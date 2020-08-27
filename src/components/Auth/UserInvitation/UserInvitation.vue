<template>
    <AuthWrapper>
        <template #content>
            <h3 class="auth-title">
                {{ $t('USER.CREATE_YOUR_ACCOUNT') }}
            </h3>

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
                        :label="$t('USER_ACCOUNT.NEW_PASSWORD')"
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
                        :label="$t('USER_ACCOUNT.CONFIRM_NEW_PASSWORD')"
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
    export default class UserInvitation extends Vue {
        password = '';
        confirmPassword = '';
        isLoading = false;
        token: string = '';

        getErrors(error: string, touched: boolean) {
            return touched ? error : '';
        }

        async submit() {
            this.isLoading = true;
            const { status } = await authService.resetPassword({
                password: this.password,
                token: this.token
            });

            if (status === 201) {
                await this.$router.push({ name: 'dashboard' });
            }
            this.isLoading = false;
        }

        created() {
            this.token = this.$route.query.passwordToken ? this.$route.query.passwordToken as string : '';
            if (!this.token) {
                this.$router.push('/login');
            }
        }
    }
</script>
