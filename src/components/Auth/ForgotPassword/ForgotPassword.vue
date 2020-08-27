<template>
    <AuthWrapper>
        <template #content>
            <h3 class="auth-title">
                {{ $t('USER.FORGOT_PASSWORD') }}
            </h3>

            <ValidationObserver
                v-if="!isSuccess"
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
                            type="email"
                        />
                    </b-field>
                </ValidationProvider>

                <b-button
                    class="mg-top-30"
                    rounded
                    :disabled="validator.invalid"
                    :loading="isLoading"
                    type="is-primary is-fullwidth"
                    native-type="submit"
                >
                    {{ $t('USER.CONFIRM') }}
                </b-button>
            </ValidationObserver>
            <div
                v-else
                class="is-success"
            >
                <p>
                    {{ $t('USER.EMAIL_SUBMITTED') }}
                </p>

                <b-button
                    tag="router-link"
                    to="login"
                    type="is-text is-padding-small mg-top-20"
                >
                    {{ $t('USER.BACK_LOGIN') }}
                </b-button>
            </div>
        </template>
    </AuthWrapper>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import authService from '@/services/auth.service';
    import AuthWrapper from '@/components/Auth/AuthWrapper.vue';

    @Component({
        components: { AuthWrapper }
    })
    export default class ForgotPassword extends Vue {
        email = '';
        isLoading = false;
        isSuccess = false;

        getErrors(error: string, touched: boolean) {
            return touched ? error : '';
        }

        async submit() {
            this.isLoading = true;
            const { status } = await authService.forgotPassword({
                email: this.email
            });

            this.isSuccess = status === 204;
            this.isLoading = false;
        }

        created() {
            this.email = this.$route.query.email ? this.$route.query.email as string : '';
        }
    }
</script>
