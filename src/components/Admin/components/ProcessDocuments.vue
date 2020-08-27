<template>
    <div class="process-documents">
        <b-table
            :data="documentsArray"
            hoverable
            paginated
            sort-icon="chevron-up"
            :per-page="limit"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
        >
            <template slot-scope="props">
                <b-table-column
                    field="name"
                    :label="$t('SHAREHOLDERS_DETAILS.NAME')"
                    sortable
                >
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column
                    field="created"
                    :label="$t('GLOBAL.LAST_UPDATE')"
                    sortable
                >
                    {{ $f24.formatDate(props.row.last_updated.date) }}
                </b-table-column>

                <b-table-column
                    field="id"
                    :label="$t('GLOBAL.DOWNLOAD')"
                >
                    <span
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
            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="table"
                                size="is-large"
                            />
                        </p>
                        <p>
                            {{ $t('GLOBAL.NO_DATA_AVAILABLE') }}
                        </p>
                    </div>
                </section>
            </template>
        </b-table>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { DocumentTypes } from '@/types/document.types';
    import apiService from '@/services/api.service';
    import { downloadFile } from '@/helpers/utility.helper';

    @Component
    export default class ProcessDocuments extends Vue {
        @Prop() documents!: Array<any>;
        limit = 10;
        loadingDocuments: Array<string> = [];

        get documentsArray() {
            let result: any = [];
            Object.keys(this.documents).map(o => {
                if (Array.isArray(this.documents[o])) {
                    result = [...result, ...this.documents[o]];
                } else {
                    result.push(this.documents[o]);
                }
            });
            return result;
        }

        getIsLoading(id: string) {
            return this.loadingDocuments.includes(id);
        }

        getUrl(document: DocumentTypes) {
            return `${apiService.API_URL}proxy/dms/documents/${document.id}.pdf`;
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
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
    @import "~css/_tables";

    /deep/ table {
        @include table-primary;
        @include table-primary-compact;
    }
</style>
