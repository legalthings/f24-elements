<template>
    <b-table
        :data="sharesEvents"
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
                field="created"
                label="Date"
                sortable
                width="120"
            >
                {{ $f24.formatDate(props.row.created) }}
                {{ new Date(props.row.created) | dateFormat('DD-MM-YYYY') }}
            </b-table-column>

            <b-table-column
                field="type"
                label="Type"
                width="130"
                sortable
            >
                {{ props.row.type }}
            </b-table-column>

            <b-table-column
                field="asset"
                label="Share"
                width="180"
                sortable
            >
                {{ $t(`ORGANIZATIONS_SHAREHOLDERS.${props.row.asset.toUpperCase()}`) }}
            </b-table-column>

            <b-table-column
                field="from"
                label="From"
                sortable
            >
                <span v-if="props.row.from && props.row.from.organization">
                    {{ props.row.from.organization.name }}
                </span>
                <span v-if="props.row.from && props.row.from.user">
                    {{ props.row.from.user.first_name }} {{ props.row.from.user.last_name }}
                </span>
                <span v-if="!props.row.from">
                    -
                </span>
            </b-table-column>

            <b-table-column
                field="to"
                label="To"
                sortable
            >
                <span v-if="props.row.to.organization">
                    {{ props.row.to.organization.name }}
                </span>
                <span v-if="props.row.to.user">
                    {{ props.row.to.user.first_name }} {{ props.row.to.user.last_name }}
                </span>
            </b-table-column>

            <b-table-column
                width="50"
            >
                <router-link
                    class="table-action-link"
                    :to="{ path: `/organization/${organizationId}/transaction/${props.row.id}`}"
                >
                    <UiIcon icon="arrow-right" />
                </router-link>
            </b-table-column>
        </template>
        <template #bottom-left>
            <b-select
                v-model="perPage"
                :disabled="!isPaginated"
            >
                <option value="5">
                    5 per page
                </option>
                <option value="10">
                    10 per page
                </option>
                <option value="20">
                    20 per page
                </option>
                <option value="50">
                    50 per page
                </option>
            </b-select>
        </template>
    </b-table>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class OrganizationTransactions extends Vue {
        @Prop() sharesEvents!: Array<any>;
        @Prop() organizationId!: string;
        isPaginated = true;
        isPaginationSimple = false;
        paginationPosition = 'bottom';
        defaultSortDirection = 'desc';
        sortIcon = 'chevron-up';
        sortIconSize = 'is-small';
        currentPage = 1;
        perPage = 5;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';
    @import "~css/tables";

    .b-table {
        width: 100%;
    }

    /deep/ .table {
        @include table-primary;
    }
</style>
