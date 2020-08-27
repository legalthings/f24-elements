<template>
    <div class="contracts">
        <PageBlock
            :back-button="{name: 'organization', label: $t('NAVIGATION.OVERVIEW'), params: {organizationId: $route.params.organizationId}}"
        >
            <template
                v-if="!isLoading"
                #content
            >
                <PageSection>
                    <div slot="header">
                        {{ $t('SIDEBAR_MENU.CONTRACT') }}
                    </div>
                    <div slot="options">
                        <b-button
                            type="is-primary is-padding-small"
                            rounded
                            @click="newDocument()"
                        >
                            {{ $t('DOCUMENTS.NEW_CONTRACT') }}
                        </b-button>
                    </div>
                    <div slot="content">
                        <b-table
                            v-if="documents.length > 0"
                            :loading="isLoading"
                            :data="documents"
                            :paginated="isPaginated"
                            :per-page="perPage"
                            default-sort="created"
                            :current-page.sync="currentPage"
                            :pagination-simple="isPaginationSimple"
                            :pagination-position="paginationPosition"
                            :default-sort-direction="defaultSortDirection"
                            :sort-icon="sortIcon"
                            :sort-icon-size="sortIconSize"
                            aria-next-label="Next page"
                            aria-previous-label="Previous page"
                            aria-page-label="Page"
                            aria-current-label="Current page"
                        >
                            <template slot-scope="props">
                                <b-table-column
                                    label=""
                                    width="60px"
                                >
                                    <UiIcon icon="document" />
                                </b-table-column>

                                <b-table-column
                                    field="name"
                                    label="Name"
                                    sortable
                                    class="name"
                                >
                                    {{ props.row.name }}
                                </b-table-column>
                                <b-table-column
                                    field="created"
                                    label="Created"
                                    width="200px"
                                    sortable
                                >
                                    {{ $f24.formatDate(props.row.created) }}
                                </b-table-column>
                                <b-table-column
                                    field="details"
                                    width="50px"
                                >
                                    <div v-if="props.row.document">
                                        <span
                                            class="table-action-link"
                                            @click="download(props.row)"
                                        >
                                            <UiIcon
                                                :loading="getIsLoading(props.row.id)"
                                                icon="download"
                                            />
                                        </span>
                                    </div>
                                    <div
                                        v-else
                                        class="is-flex"
                                    >
                                        <span @click="deleteContract(props.row)">
                                            <b-icon
                                                icon="trash-alt"
                                                class="remove"
                                            />
                                        </span>
                                        <b-tooltip
                                            :label="$t('GLOBAL.DUPLICATE')"
                                            position="is-left"
                                            type="is-white"
                                        >
                                            <span @click="duplicateContract(props.row)">
                                                <b-icon
                                                    icon="copy"
                                                    class="copy"
                                                />
                                            </span>
                                        </b-tooltip>
                                        <router-link
                                            :to="{name: 'document-create', params: {documentId: props.row.id}}"
                                        >
                                            <UiIcon
                                                icon="edit"
                                            />
                                        </router-link>
                                    </div>
                                </b-table-column>
                            </template>
                        </b-table>
                        <div
                            v-else
                            class="box"
                        >
                            <OrganizationContractsTemplates
                                :items="templatesItems"
                                @newDocument="newDocument"
                            />
                        </div>
                    </div>
                </PageSection>
            </template>
        </PageBlock>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageBlock from '@/components/Global/Page/PageBlock/PageBlock.vue';
    import PageSection from '@/components/Global/Page/PageSection/PageSection.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import apiService from '@/services/api.service';
    import { DocumentTypes } from '@/types/document.types';
    import { downloadFile } from '@/helpers/utility.helper';
    import ModalNewContract from '@/components/Organization/views/OrganizationContracts/modals/ModalNewContract.vue';
    import i18n from '@/dependencies/i18n';
    import OrganizationContractsTemplates
        from '@/components/Organization/views/OrganizationContracts/OrganizationContractsTemplates.vue';

    @Component({
        components: {
            OrganizationContractsTemplates,
            ModalNewContract,
            PageSection,
            PageBlock
        }
    })

    export default class OrganizationDocuments extends Vue {
        @Prop() organization!: OrganizationService;

        documents = [];
        isLoading = false;
        loadingModal = this.$buefy.loading.open({});
        loadingDocuments: Array<string> = [];
        templates = [];

        isPaginated = true;
        isPaginationSimple = true;
        paginationPosition = 'bottom';
        defaultSortDirection = 'desc';
        sortIcon = 'chevron-up';
        sortIconSize = 'is-small';
        currentPage = 1;
        perPage = 10;

        options = [
            {
                key: 'limit',
                value: 999
            },
            {
                key: 'organization',
                value: this.organization.id
            }
        ]

        created() {
            this.getContracts();
        }

        async getContracts() {
            try {
                this.isLoading = true;
                const { data, status } = await apiService.get('contracts', this.options);
                if (status === 200) {
                    this.documents = data;
                }
            } catch (e) {
                console.log(e);
            } finally {
                this.isLoading = false;
                this.loadingModal.close();
                await this.getTemplates();
            }
        }

        async getTemplates() {
            try {
                const { data, status } = await apiService.get('templates', this.options);
                if (status !== 200) {
                    console.log('Error trying to download document');
                    return new Error('Failed fetching templates');
                }
                this.templates = data;
            } catch (e) {
                return new Error(e);
            }
        }

        newDocument(id?: number) {
            this.$buefy.modal.open({
                parent: this,
                component: ModalNewContract,
                hasModalCard: true,
                trapFocus: true,
                props:
                    {
                        templates: this.templates,
                        organization: this.organization,
                        givenStep: id,
                        items: this.templatesItems
                    }
            });
        }

        async download(document: DocumentTypes) {
            this.loadingDocuments.push(document.id);
            try {
                const { data, status } = await apiService.getFileFromURL(this.getUrl(document));
                if (status === 200) {
                    downloadFile(data, decodeURIComponent(document.name), 'pdf');
                } else {
                    console.log('Error trying to download document', document);
                }
            } catch (e) {
                console.log('Error trying to download document', e);
            } finally {
                this.loadingDocuments.splice(this.loadingDocuments.findIndex(d => d === document.id), 1);
            }
        }

        getUrl(document: DocumentTypes) {
            return `${apiService.API_URL}contracts/${document.id}.pdf`;
        }

        getIsLoading(id: string) {
            return this.loadingDocuments.includes(id);
        }

        async createDocument(original: any, name: string) {
            try {
                const config = {
                    name: name,
                    template: original.template.id,
                    organization: original.organization.id,
                    values: original.values
                };
                const { data, status } = await apiService.post('contracts', config);
                if (status === 201) {
                    await this.$router.push({ name: 'document-create', params: { documentId: data.id } });
                    (this.$parent as any).close();
                }
            } catch (e) {
                console.log('Error creating new contract');
            }
        }

        async deleteContractApi(id: string) {
            try {
                const { status } = await apiService.delete('contracts/' + id);
                if (status === 204) {
                    this.getContracts();
                }
            } catch (e) {
                console.log('Error creating new contract', e);
            }
        }

        deleteContract(data: any) {
            this.$buefy.dialog.confirm({
                message: this.$t('GLOBAL.ARE_YOU_SURE') as string,
                cancelText: i18n.t('GLOBAL.CANCEL') as string,
                confirmText: i18n.t('GLOBAL.AGREE') as string,
                trapFocus: true,
                onConfirm: () => this.deleteContractApi(data.id)
            });
        }

        duplicateContract(data: any) {
            this.$buefy.dialog.prompt({
                message: this.$t('DOCUMENTS.DOCUMENT_NAME') as string,
                cancelText: i18n.t('GLOBAL.CANCEL') as string,
                confirmText: i18n.t('GLOBAL.AGREE') as string,
                inputAttrs: {
                    placeholder: this.$t('DOCUMENTS.DOCUMENT_NAME') as string,
                    value: data.name
                },
                trapFocus: true,
                onConfirm: (value) => this.createDocument(data, value)
            });
        }

        get templatesItems() {
            return [
                {
                    label: this.$t('DOCUMENTS.MANAGE_EMPLOYEES'),
                    folder: 'manage-employees',
                    id: 0
                },
                {
                    label: this.$t('DOCUMENTS.MANAGE_PRIVACY'),
                    folder: 'manage-privacy',
                    id: 1
                },
                {
                    label: this.$t('DOCUMENTS.SHAREHOLDERS_MANAGEMENT'),
                    folder: 'shareholders-and-management',
                    id: 2
                },
                {
                    label: this.$t('DOCUMENTS.ENGLISH_CONTRACTS'),
                    folder: 'english-contracts',
                    id: 3
                },
                {
                    label: this.$t('DOCUMENTS.IT_AND_SOFTWARE'),
                    folder: 'it-and-software',
                    id: 4
                }
            ];
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
    @import "~css/_tables";

    .b-table {
        width: 100%;
    }

    .table-action-link {
        cursor: pointer;
    }

    /deep/ .table {
        @include table-primary;

        .name {
            @include breakpoint-down(sm) {
                overflow-wrap: break-word;
                word-wrap: break-word;
                hyphens: auto;
            }
        }
    }

    .new-contract {
        text-align: center;
        margin: auto;

        h3 {
            margin: 4 * $margin-default 0;
        }

        ul {
            max-width: 600px;
            margin: auto;
        }

        li {
            cursor: pointer;
            margin-bottom: 4 * $margin-default;

            &:hover {
                background: $color-blue-gray-01;
                border-radius: $border-radius;
            }
        }

        .ui-icon {
            width: 70px;
            height: auto;
            margin-bottom: 2 * $margin-default;
        }
    }

    .ui-icon {
        &:hover {
            fill: $color-blue-darker;
        }
    }

    .copy {
        color: $color-blue;
        margin-right: $margin-default;
        cursor: pointer;
        transition: color .3s ease;

        &:hover {
            color: $color-blue-darker;
        }
    }
</style>
