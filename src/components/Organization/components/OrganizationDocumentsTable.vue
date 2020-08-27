<template>
    <div>
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
                    field="name"
                    label="Name"
                    sortable
                    width="60%"
                >
                    {{ props.row.name || (`${props.row.first_name} ${props.row.last_name}`) }}
                </b-table-column>
                <b-table-column
                    field="created"
                    label="Created"
                    sortable
                >
                    {{ $f24.formatDate(props.row.created) }}
                </b-table-column>
                <b-table-column
                    field="details"
                    width="50"
                >
                    <a
                        v-if="props.row.version !== 0"
                        :href="downloadUrl(props.row)"
                        class="table-action-link"
                    >
                        <UiIcon icon="arrow-right" />
                    </a>
                </b-table-column>
            </template>
        </b-table>
        <div v-else>
            {{ $t('GLOBAL.NO_DOCUMENTS_AVAILABLE') }}
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { DocumentTypes } from '@/types/document.types';
    import apiService from '@/services/api.service';

    @Component

    export default class OrganizationDocumentsTable extends Vue {
        @Prop() documents!: DocumentTypes;
        @Prop() isLoading!: boolean;

        isPaginated = false;
        isPaginationSimple = false;
        paginationPosition = 'bottom';
        defaultSortDirection = 'desc';
        sortIcon = 'chevron-up';
        sortIconSize = 'is-small';
        currentPage = 1;
        perPage = 100;

        downloadUrl(document: DocumentTypes) {
            return `${apiService.API_URL}documents/${document.id}/versions/${document.version}`;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
    @import "~css/_tables";

    .b-table {
        width: 100%;
    }

    /deep/ .table {
        @include table-primary;
    }
</style>
