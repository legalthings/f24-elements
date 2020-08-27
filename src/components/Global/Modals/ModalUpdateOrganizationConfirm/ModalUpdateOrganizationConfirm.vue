<template>
    <div
        class="modal-card"
    >
        <div class="box">
            <div v-if="current === 1">
                <h2>
                    {{ $i18n.t('ORGANIZATION_NOTIFICATION.CONFIRMATION_TITLE') }}
                </h2>

                <UiInputCheckbox
                    v-model="agree"
                    :items="[{name: $i18n.t('ORGANIZATION_NOTIFICATION.CONFIRMATION_DESCRIPTION'), value: false}]"
                />
                <div class="buttons mg-top-30">
                    <b-button
                        type="is-padding-small"
                        rounded
                        @click="$parent.close()"
                    >
                        {{ $i18n.t('ORGANIZATION_NOTIFICATION.CANCEL') }}
                    </b-button>
                    <b-button
                        type="is-primary is-padding-small"
                        rounded
                        :disabled="!agree"
                        @click="next"
                    >
                        {{ $i18n.t('ORGANIZATION_NOTIFICATION.SUBMIT') }}
                    </b-button>
                </div>
            </div>

            <div v-if="current === 2">
                <h2>
                    {{ $i18n.t('ORGANIZATION_NOTIFICATION.THANK_YOU') }}
                </h2>
                <p>
                    {{ $i18n.t('ORGANIZATION_NOTIFICATION.THANK_YOU_TEXT') }}
                </p>
                <div class="buttons mg-top-30">
                    <b-button
                        type="is-primary is-padding-small"
                        rounded
                        @click="submit"
                    >
                        {{ $i18n.t('ORGANIZATION_NOTIFICATION.CLOSE') }}
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import SearchButton from '@/components/Global/Buttons/SearchButton.vue';
    import UiInputCheckbox from '@/components/Global/UiFormInputs/UiInputCheckbox/UiInputCheckbox.vue';
    import apiService from '@/services/api.service';
    import alertService from '@/services/alert.service';

    @Component({
        components: { UiInputCheckbox, SearchButton }
    })
    export default class ModalUpdateOrganizationConfirm extends Vue {
        @Prop() organization!: any;
        agree = false;
        current = 1;

        config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        next() {
            this.current = 2;
        }

        makeFormData() {
            const formData = new FormData();
            formData.set('subject', this.organization.data.name + ' - Correct');
            formData.set('correct', 'true');
            formData.set('description', 'Information is correct');
            return formData;
        }

        async submit() {
            try {
                const { status } = await apiService.post('actions/contact-support', this.makeFormData(), [], this.config);
                await apiService.post('organizations/' + this.organization.id, { state: 'validation_requested' });
                if (status === 204) {
                    window.location.reload();
                } else {
                    (this.$parent as any).close();
                }
            } catch (e) {
                alertService.dangerMessage('Error submitting data correction');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .box {
        text-align: center;
        padding: 20px;

        h2 {
            @include fs-medium;
            margin-bottom: 2 * $margin-default;
        }

        .buttons {
            justify-content: flex-end;
        }

        .ui-checkbox {
            margin: auto;
            max-width: 90%;
        }
    }

</style>
