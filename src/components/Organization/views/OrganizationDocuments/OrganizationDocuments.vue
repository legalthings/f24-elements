<template>
    <div class="shareholders-details">
        <PageBlock
            :back-button="{name: 'organization', label: $t('NAVIGATION.OVERVIEW'), params: {organizationId: $route.params.organizationId}}"
        >
            <template
                v-if="!isLoading"
                #content
            >
                <PageSection>
                    <div slot="header">
                        {{ $t('SIDEBAR_MENU.DOCUMENTS') }}
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
                                    {{ decodeURIComponent(props.row.name) }}
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
                                    <span
                                        v-if="props.row.legacy_id || props.row.kos_file_name || props.row.version !== 0"
                                        class="table-action-link"
                                        @click="download(props.row)"
                                    >
                                        <UiIcon
                                            :loading="getIsLoading(props.row.id)"
                                            icon="download"
                                        />
                                    </span>
                                </b-table-column>
                            </template>
                        </b-table>
                        <div
                            v-else
                            class="box"
                        >
                            {{ $t('GLOBAL.NO_DATA_AVAILABLE') }}
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

    @Component({
        components: {
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

        isPaginated = false;
        isPaginationSimple = false;
        paginationPosition = 'bottom';
        defaultSortDirection = 'desc';
        sortIcon = 'chevron-up';
        sortIconSize = 'is-small';
        currentPage = 1;
        perPage = 100;

        async created() {
            try {
                this.isLoading = true;
                const { data, status } = await apiService.get('documents', [{
                    key: 'organization',
                    value: this.organization.id
                }]);
                if (status === 200) {
                    this.documents = data;
                }
            } catch (e) {
                console.log(e);
            } finally {
                this.isLoading = false;
                this.loadingModal.close();
            }
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
            return `${apiService.API_URL}documents/${document.id}/versions/latest`;
        }

        getIsLoading(id: string) {
            return this.loadingDocuments.includes(id);
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
</style>
