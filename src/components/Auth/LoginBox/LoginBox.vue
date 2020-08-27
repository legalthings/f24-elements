<template>
    <AuthWrapper>
        <template #content>
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
                    name="reason"
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
                    name="reason"
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

            <div class="login-box-footer">
                <b-button
                    tag="router-link"
                    :to="{path:'/auth/forgot-password', query: {email: email}}"
                    type="is-padding-small is-text"
                >
                    {{ $t('USER.FORGOT_PASSWORD') }}
                </b-button>
                <b-button
                    tag="router-link"
                    to="/auth/register"
                    type="is-padding-small is-text"
                >
                    {{ $t('USER.REGISTER') }}
                </b-button>
            </div>

            <VueRecaptcha
                v-if="hasLoaded && siteKey"
                ref="invisibleRecaptcha"
                size="invisible"
                :sitekey="siteKey"
                :load-recaptcha-script="true"
                @verify="onVerify"
            />
        </template>
    </AuthWrapper>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import authService from '@/services/auth.service';
    import VueRecaptcha from 'vue-recaptcha';
    import axios from '@/services/axios.service';
    import LanguageSelector from '@/components/Global/LanguageSelector/LanguageSelector.vue';
    import AuthWrapper from '@/components/Auth/AuthWrapper.vue';
    import store from '@/store';

    @Component({
        components: { AuthWrapper, LanguageSelector, VueRecaptcha }
    })
    export default class LoginBox extends Vue {
        $refs!: {
            invisibleRecaptcha: HTMLFormElement
        };

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
            this.isLoading = true;
            if (!this.siteKey) {
                return this.getReCaptchaAndSubmit('abc');
            }
            this.$refs.invisibleRecaptcha.execute();
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

    .field {
        width: 100%;

        /deep/ .label {
            font-weight: 400;
        }
    }

    .button {
        margin-top: $margin-default;
    }

    /deep/ .icon.has-text-primary.is-clickable {
        color: $color-blue-gray-02 !important;
    }

    .login-box-footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>
