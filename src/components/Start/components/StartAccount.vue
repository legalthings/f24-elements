<template>
    <div class="section">
        <div class="box new-account">
            <ValidationObserver
                ref="observer"
                v-slot="validator"
                class="field"
                tag="form"
                @submit.prevent="submit"
            >
                <ValidationProvider
                    v-slot="{ errors, valid, touched }"
                    rules="required|email"
                    name="email"
                    class="field"
                    vid="email"
                >
                    <b-field
                        :label="$t('USER.EMAIL')"
                        :message="getErrors(errors, touched)"
                        :type="{ 'is-danger': errors[0] && touched, 'is-success': valid }"
                    >
                        <b-input
                            v-model="email"
                            maxlength="50"
                            type="email"
                        />
                    </b-field>
                </ValidationProvider>

                <ValidationProvider
                    v-slot="{ errors, valid, touched }"
                    rules="required"
                    name="password"
                    class="field"
                    vid="password"
                >
                    <b-field
                        class="mg-tb-20"
                        :label="$t('USER_ACCOUNT.PASSWORD')"
                        :message="errors"
                        :type="{ 'is-danger': errors[0] && touched, 'is-success': valid }"
                    >
                        <b-input
                            v-model="password"
                            class="color"
                            password-reveal
                            type="password"
                        />
                    </b-field>
                </ValidationProvider>

                <b-button
                    rounded
                    :disabled="validator.invalid"
                    :loading="isLoading"
                    type="is-primary is-fullwidth"
                    native-type="submit"
                >
                    {{ $t('USER.SIGN_IN') }}
                </b-button>
            </ValidationObserver>

            <VueRecaptcha
                v-if="hasLoaded && siteKey"
                ref="invisibleRecaptcha"
                size="invisible"
                :sitekey="siteKey"
                :load-recaptcha-script="true"
                @verify="onVerify"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import LoginBox from '@/components/Auth/LoginBox/LoginBox.vue';
    import authService from '@/services/auth.service';
    import axios from '@/services/axios.service';
    import store from '@/store';
    import VueRecaptcha from 'vue-recaptcha';

    @Component({
        components: { LoginBox, VueRecaptcha }
    })
    export default class StartAccount extends Vue {
        @Prop() data!: any;
        $refs!: {
            invisibleRecaptcha: HTMLFormElement
        };

        name = '';
        email = '';
        password = '';
        isLoading = false;
        siteKey = '';
        hasLoaded = false;

        getErrors(error: string, touched: boolean) {
            return touched ? error : '';
        }

        onVerify(v: string) {
            this.getReCaptchaAndSubmit(v);
        }

        submit() {
            // TODO register new account and redirect to the new route
            this.$router.push({ name: 'incorporation-shareholders' });
            // this.isLoading = true;
            // if (!this.siteKey) {
            //     return this.getReCaptchaAndSubmit('abc');
            // }
            // this.$refs.invisibleRecaptcha.execute();
        }

        async getReCaptchaAndSubmit(captcha: string) {
            const { status, data } = await authService.login({
                email: this.email,
                password: this.password,
                captcha_response: captcha
            });

            if (status === 201) {
                axios.defaults.headers.common['X-session'] = data.id;
                this.redirect();
            }
            this.isLoading = false;
        }

        redirect() {
            const to = this.$store.state.applicationStore.deepLink?.name ? this.$store.state.applicationStore.deepLink : null;
            if (to) {
                store.commit('applicationStore/updateDeepLink', {});
                this.$router.push(to);
            } else {
                this.$router.push({ name: 'dashboard' });
            }
        }

        async created() {
            const { data } = await authService.getInfo();
            if (data.captcha) this.siteKey = data.captcha.site_key;
            this.hasLoaded = true;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .new-account {
        max-width: 600px;
        margin: auto;
    }
</style>
