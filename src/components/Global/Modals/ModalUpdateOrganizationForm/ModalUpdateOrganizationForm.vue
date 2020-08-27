<template>
    <div
        class="modal-card"
    >
        <div class="box">
            <div v-if="current === 1">
                <UiInputRadio
                    v-model="invalidInformation"
                    :label="$i18n.t('ORGANIZATION_NOTIFICATION.FIX_DIALOG_TITLE')"
                    :items="itemsList"
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
                        :disabled="!invalidInformation"
                        @click="secondStep"
                    >
                        {{ $i18n.t('ORGANIZATION_NOTIFICATION.NEXT_STEP') }}
                    </b-button>
                </div>
            </div>

            <div v-if="current === 2">
                <UiInputUpload
                    v-model="files"
                    :label="$i18n.t('ORGANIZATION_NOTIFICATION.UPLOAD_TEXT')"
                    :placeholder="$i18n.t('ORGANIZATION_NOTIFICATION.UPLOAD_PLACEHOLDER')"
                    accept="file_extension|.pdf"
                />
                <div class="buttons mg-top-30">
                    <b-button
                        type="is-padding-small"
                        rounded
                        @click="firstStep"
                    >
                        {{ $i18n.t('ORGANIZATION_NOTIFICATION.PREVIOUS_STEP') }}
                    </b-button>
                    <b-button
                        type="is-primary is-padding-small"
                        rounded
                        :disabled="files.length === 0"
                        @click="descriptionStep"
                    >
                        {{ $i18n.t('ORGANIZATION_NOTIFICATION.NEXT_STEP') }}
                    </b-button>
                </div>
            </div>

            <div v-if="current === 3">
                <h2>
                    {{ $i18n.t('ORGANIZATION_NOTIFICATION.EXPLANATION_TITLE') }}
                </h2>
                <UiInputText
                    v-model="description"
                    type="textarea"
                    rules="required|min:10"
                    :label="$i18n.t('ORGANIZATION_NOTIFICATION.EXPLANATION_DESCRIPTION')"
                />
                <div class="buttons mg-top-30">
                    <b-button
                        type="is-padding-small"
                        rounded
                        @click="previousStep"
                    >
                        {{ $i18n.t('ORGANIZATION_NOTIFICATION.PREVIOUS_STEP') }}
                    </b-button>
                    <b-button
                        type="is-primary is-padding-small"
                        rounded
                        :loading="isThankYouLoading"
                        :disabled="description.length < 10"
                        @click="thankYou"
                    >
                        {{ $i18n.t('ORGANIZATION_NOTIFICATION.SUBMIT') }}
                    </b-button>
                </div>
            </div>

            <div v-if="current === 4">
                <h2>
                    {{ $i18n.t('ORGANIZATION_NOTIFICATION.THANK_YOU') }}
                </h2>
                <p>
                    {{ $i18n.t('ORGANIZATION_NOTIFICATION.THANK_YOU_FIX_DATA') }}
                </p>
                <div class="buttons">
                    <b-button
                        type="is-primary is-padding-small"
                        rounded
                        @click="close"
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
    import UiInputRadio from '@/components/Global/UiFormInputs/UiInputRadio/UiInputRadio.vue';
    import UiInputUpload from '@/components/Global/UiFormInputs/UiInputUpload/UiInputUpload.vue';
    import apiService from '@/services/api.service';
    import alertService from '@/services/alert.service';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';

    @Component({
        components: { UiInputText, UiInputUpload, UiInputRadio, SearchButton }
    })
    export default class ModalUpdateOrganizationForm extends Vue {
        @Prop() organization!: any;
        current = 1;
        invalidInformation = '';
        description = '';
        files = [];
        config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        isThankYouLoading = false;

        get itemsList() {
            return [
                {
                    name: this.$i18n.t('ORGANIZATION_NOTIFICATION.FIX_DIALOG_OPTION_1'),
                    id: 'NOTARIAL_CHANGE'
                },
                {
                    name: this.$i18n.t('ORGANIZATION_NOTIFICATION.FIX_DIALOG_OPTION_2'),
                    id: 'ORIGINAL_DATA_INCORRECT'
                }
            ];
        }

        firstStep() {
            this.current = 1;
        }

        secondStep() {
            this.invalidInformation === 'NOTARIAL_CHANGE' ? this.current = 2 : this.current = 3;
        }

        descriptionStep() {
            this.current = 3;
        }

        async thankYou() {
            this.isThankYouLoading = true;
            try {
                const { status } = await apiService.post('actions/contact-support', this.makeFormData(), [], this.config);
                await apiService.post('organizations/' + this.organization.id, { state: 'validation_requested' });
                if (status === 204) {
                    this.current = 4;
                }
            } catch (e) {
                alertService.dangerMessage('Error submitting data correction');
                console.log('Error submitting data correction:', e);
            } finally {
                this.isThankYouLoading = false;
            }
        }

        previousStep() {
            this.invalidInformation === 'NOTARIAL_CHANGE' ? this.current = 2 : this.current = 1;
        }

        makeFormData() {
            const formData = new FormData();
            formData.set('subject', this.organization.data.name + ' - Incorrect');
            formData.set('correct', 'false');
            formData.set('reason', this.invalidInformation);
            formData.set('description', this.description);
            if (this.files.length > 0) this.files.forEach((f: any) => formData.append('files[]', f));
            return formData;
        }

        close() {
            window.location.reload();
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .box {
        padding: 4 * $margin-default;

        h2 {
            @include fs-medium;
            margin-bottom: 2 * $margin-default;
        }

        p {
            margin: 2 * $margin-default 0;
        }

        .buttons {
            justify-content: flex-end;
        }
    }

</style>
