<template>
    <UiModal @close="$parent.close()">
        <template #header>
            <h3>{{ $t('DOCUMENTS.NEW_CONTRACT') }}</h3>
        </template>
        <div
            slot="content"
            class="document-selector"
        >
            <b-tabs v-model="step">
                <b-tab-item>
                    <OrganizationContractsTemplates
                        :items="items"
                        @newDocument="stepTwo"
                    />
                    <hr>
                    <div class="buttons">
                        <b-button
                            type="is-primary"
                            rounded
                            outlined
                            @click="$parent.close()"
                        >
                            {{ $t('EDITABLE_BLOCK.CANCEL') }}
                        </b-button>
                    </div>
                </b-tab-item>

                <b-tab-item>
                    <div
                        v-if="stepSelected.folder"
                        class="is-flex document-list-header"
                    >
                        <UiIcon
                            :icon="stepSelected.folder"
                            type="service"
                            size="50"
                        />
                        <h4>
                            {{ stepSelected.label }}
                        </h4>
                    </div>
                    <div class="document-list-items">
                        <ul>
                            <li
                                v-for="document in documents"
                                :key="document.id"
                                @click="selectDocument(document)"
                            >
                                <span>
                                    {{ document.name }}
                                </span>
                                <span
                                    v-if="document.locked"
                                    class="is-lock"
                                >
                                    <UiIcon
                                        size="14"
                                        color="orange"
                                        icon="lock"
                                        type="custom"
                                    />
                                    UPGRADE
                                </span>
                            </li>
                        </ul>
                    </div>
                    <hr>
                    <div class="buttons">
                        <b-button
                            type="is-primary"
                            rounded
                            outlined
                            @click="step = 0"
                        >
                            {{ $t('BACK_BUTTON.BACK') }}
                        </b-button>
                    </div>
                </b-tab-item>

                <b-tab-item>
                    <div
                        v-if="stepSelected.folder"
                        class="is-flex document-list-header"
                    >
                        <UiIcon
                            :icon="stepSelected.folder"
                            type="service"
                            size="50"
                        />
                        <h4>
                            {{ stepSelected.label }}
                        </h4>
                    </div>
                    <div class="document-name">
                        <p>
                            {{ documentSelected.name }}
                        </p>
                        <UiInputText
                            v-model="newDocumentName"
                            :value="documentSelected.name"
                            :label="$t('DOCUMENTS.DOCUMENT_NAME')"
                            class="document-name-input"
                        />
                    </div>
                    <hr>
                    <div class="buttons space-between">
                        <b-button
                            type="is-primary"
                            rounded
                            outlined
                            @click="step = 1"
                        >
                            {{ $t('BACK_BUTTON.BACK') }}
                        </b-button>

                        <b-button
                            :loading="loadingNewDocument"
                            type="is-primary"
                            rounded
                            @click="createDocument"
                        >
                            {{ $t('DOCUMENTS.CREATE') }}
                        </b-button>
                    </div>
                </b-tab-item>
            </b-tabs>
        </div>
    </UiModal>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiModal from '@/components/Global/Modals/UiModal/UiModal.vue';
    import UiNameFlag from '@/components/Global/UiNameFlag/UiNameFlag.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import apiService from '@/services/api.service';
    import { clone } from 'lodash';
    import OrganizationContractsTemplates
        from '@/components/Organization/views/OrganizationContracts/OrganizationContractsTemplates.vue';

    @Component({
        components: { OrganizationContractsTemplates, UiInputText, UiNameFlag, UiModal }
    })
    export default class ModalNewContract extends Vue {
        @Prop() organization!: OrganizationService;
        @Prop() templates: any;
        @Prop() items!: Array<any>;
        @Prop({ default: null }) givenStep: any;
        step = 0;
        stepSelected: any = {};
        documentSelected: any = {};
        loadingNewDocument = false;
        newDocumentName = null;

        created() {
            if (this.givenStep !== null) {
                this.stepTwo(this.givenStep);
            }
        }

        get documents() {
            return this.templates.filter(d => d.folder === this.stepSelected.folder);
        }

        stepTwo(step: number) {
            this.step = 1;
            this.stepSelected = this.items.find(i => i.id === step);
        }

        selectDocument(document: any) {
            this.documentSelected = document;
            this.step = 2;
            this.newDocumentName = clone(this.documentSelected.name);
        }

        async createDocument() {
            this.loadingNewDocument = true;
            try {
                const config = {
                    name: this.newDocumentName,
                    template: this.documentSelected.id,
                    organization: this.organization.id,
                    values: {}
                };
                const { data, status } = await apiService.post('contracts', config);
                if (status === 201) {
                    await this.$router.push({ name: 'document-create', params: { documentId: data.id } });
                    (this.$parent as any).close();
                }
            } catch (e) {
                console.log('Error creating new contract');
            } finally {
                this.loadingNewDocument = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    /deep/ .box {
        padding: 2 * $margin-default;
    }

    .document-selector {
        min-height: 470px;
    }

    .column {
        margin-bottom: 2 * $margin-default;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
            background: $color-blue-gray-01;
            border-radius: $border-radius;
        }

        .ui-icon {
            width: 70px;
            height: auto;
            margin-bottom: 2 * $margin-default;
        }
    }

    h4 {
        text-align: center;
    }

    .buttons {
        justify-content: flex-end;
    }

    /deep/ .tabs {
        display: none;
    }

    .document-list-header {
        align-items: center;

        .ui-icon {
            margin-right: 2 * $margin-default;
        }
    }

    .document-list-items {
        margin-top: 2 * $margin-default;
        height: 260px;
        overflow: auto;

        li {
            cursor: pointer;
            padding: $margin-default 0;
            display: flex;
            align-items: center;

            &:before {
                transition: all 3s ease;
                opacity: 0;
            }

            &:hover {
                position: relative;
                color: $color-blue;

                &:before {
                    opacity: 1;
                    right: 0;
                    top: 9px;
                    content: '';
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    background-color: $color-blue;
                    mask-repeat: no-repeat;
                    mask-image: url("~icons/common/icon-arrow-right.svg");
                }
            }

            &:not(:last-child) {
                border-bottom: 1px solid $color-blue-gray-01;
            }
        }

        .is-lock {
            border: 1px solid $color-orange;
            display: flex;
            border-radius: $border-radius;
            color: $color-orange;
            font-size: 11px;
            padding: 2px 6px;
            margin-left: $margin-default;

            /deep/ .ui-icon {
                margin-right: $margin-default / 2;

                svg {
                    height: 14px;
                }
            }
        }
    }

    .document-name {
        margin-top: 4 * $margin-default;

        .document-name-input {
            margin-top: 3 * $margin-default;
        }
    }

    .space-between {
        justify-content: space-between;
    }
</style>
