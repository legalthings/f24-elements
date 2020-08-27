<template>
    <AuthWrapper>
        <template #content>
            <h3
                class="auth-title"
                @click="isComplete = !isComplete"
            >
                {{ $t('USER.REGISTER') }}
            </h3>

            <div
                v-if="!isComplete"
                class="form-wrapper"
            >
                <ValidationProvider
                    v-slot="{ errors, valid, touched }"
                    rules="required"
                    name="reason"
                    class="field"
                    vid="firstName"
                >
                    <b-field
                        :label="$t('USER.FIRST_NAME')"
                        :message="getErrors(errors, touched)"
                        :type="{ 'is-danger': errors[0] && touched, 'is-success': valid }"
                    >
                        <b-input
                            v-model="firstName"
                            maxlength="50"
                        />
                    </b-field>
                </ValidationProvider>
                <ValidationProvider
                    v-slot="{ errors, valid, touched }"
                    rules="required"
                    name="reason"
                    class="field"
                    vid="firstName"
                >
                    <b-field
                        :label="$t('USER.LAST_NAME')"
                        :message="getErrors(errors, touched)"
                        :type="{ 'is-danger': errors[0] && touched, 'is-success': valid }"
                    >
                        <b-input
                            v-model="lastName"
                            maxlength="50"
                        />
                    </b-field>
                </ValidationProvider>

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

                <ValidationObserver
                    ref="observer"
                    v-slot="validator"
                    class="field"
                    tag="form"
                    @submit.prevent="submit"
                >
                    <ValidationProvider
                        v-slot="{ errors, valid, touched }"
                        rules="required"
                        name="reason"
                        class="field"
                        vid="password"
                    >
                        <b-field
                            :label="$t('USER_ACCOUNT.PASSWORD')"
                            :message="getErrors(errors, touched)"
                            :type="{ 'is-danger': errors[0] && touched, 'is-success': valid }"
                        >
                            <b-input
                                v-model="password"
                                password-reveal
                                type="password"
                            />
                        </b-field>
                    </ValidationProvider>

                    <ValidationProvider
                        v-slot="{ errors, valid, touched }"
                        rules="required|confirmed:password"
                        name="reason"
                        class="field"
                        vid="confirmPassword"
                    >
                        <b-field
                            class="mg-tb-20"
                            :label="$t('USER_ACCOUNT.CONFIRM_PASSWORD')"
                            :message="errors"
                            :type="{ 'is-danger': errors[0] && touched, 'is-success': valid }"
                        >
                            <b-input
                                v-model="confirmPassword"
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
                        {{ $t('USER.CONFIRM') }}
                    </b-button>
                </ValidationObserver>
            </div>
            <div v-else>
                <div class="svg-box">
                    <svg class="circular green-stroke">
                        <circle
                            class="path"
                            cx="75"
                            cy="75"
                            r="50"
                            fill="none"
                            stroke-width="5"
                            stroke-miterlimit="10"
                        />
                    </svg>
                    <svg class="checkmark green-stroke">
                        <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
                            <path
                                class="checkmark__check"
                                fill="none"
                                d="M616.306,283.025L634.087,300.805L673.361,261.53"
                            />
                        </g>
                    </svg>
                </div>
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
    import AuthWrapper from '@/components/Auth/AuthWrapper.vue';

    @Component({
        components: { AuthWrapper, VueRecaptcha }
    })
    export default class RegisterUser extends Vue {
        $refs!: {
            invisibleRecaptcha: HTMLFormElement
        };

        isComplete = false;
        firstName = '';
        lastName = '';
        email = '';
        password = '';
        confirmPassword = '';
        isLoading = false;
        siteKey = '';
        hasLoaded = false;
        captcha = '';

        getErrors(error: string, touched: boolean) {
            return touched ? error : '';
        }

        async onVerify(v: string) {
            this.captcha = v;
            this.isComplete = true;
            this.getReCaptchaAndSubmit(v);
        }

        submit() {
            this.isLoading = true;
            if (!this.siteKey) {
                return this.getReCaptchaAndSubmit('abc');
            }
            this.$refs.invisibleRecaptcha.execute();
        }

        async login() {
            const { status, data } = await authService.login({
                email: this.email,
                password: this.password,
                captcha_response: this.captcha
            });

            if (status === 201) {
                axios.defaults.headers.common['X-session'] = data.id;
                await this.$router.push({ name: 'dashboard' });
            }
        }

        async getReCaptchaAndSubmit(captcha: string) {
            const { status } = await authService.addUser({
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                password: this.password,
                captcha_response: captcha,
                locale: 'en_GB',
                birth_date: '',
                birth_country: ''
            });

            if (status === 201) {
                setTimeout(() => this.login(), 1500);
            }

            this.isLoading = false;
        }

        async created() {
            const { data } = await authService.getInfo();
            this.siteKey = data.captcha.site_key;
            this.hasLoaded = true;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .box {
        transition: max-height .3s ease;
    }

    .form-wrapper {
        width: 100%;
    }

    .svg-box {
        display: inline-block;
        position: relative;
        width: 150px;
    }

    .green-stroke {
        stroke: #7CB342;
    }

    .circular circle.path {
        stroke-dasharray: 330;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        opacity: 0.4;
        animation: 0.7s draw-circle ease-out;
    }

    .checkmark {
        stroke-width: 6.25;
        stroke-linecap: round;
        position: absolute;
        top: 56px;
        left: 49px;
        width: 52px;
        height: 40px;

        path {
            animation: 1s draw-check ease-out;
        }
    }

    @keyframes draw-circle {
        0% {
            stroke-dasharray: 0, 330;
            stroke-dashoffset: 0;
            opacity: 1;
        }

        80% {
            stroke-dasharray: 330, 330;
            stroke-dashoffset: 0;
            opacity: 1;
        }

        100% {
            opacity: 0.4;
        }
    }

    @keyframes draw-check {
        0% {
            stroke-dasharray: 49, 80;
            stroke-dashoffset: 48;
            opacity: 0;
        }

        50% {
            stroke-dasharray: 49, 80;
            stroke-dashoffset: 48;
            opacity: 1;
        }

        100% {
            stroke-dasharray: 130, 80;
            stroke-dashoffset: 48;
        }
    }
</style>
