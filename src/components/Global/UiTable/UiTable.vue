<template>
    <b-table
        :data="data"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :pagination-simple="isPaginationSimple"
        :pagination-position="paginationPosition"
        :default-sort-direction="defaultSortDirection"
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"
        default-sort="user.firstName"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
        custom-detail-row
    >
        <template slot-scope="props">
            <b-table-column
                v-if="$vmq.xs || $vmq.sm"
                class="mobile-header-column"
            >
                {{ props.row.user.firstName }}
                <div class="mobile-header-column-actions">
                    <UiIcon
                        icon="alert"
                        color="red"
                    />
                    <UiIcon icon="arrow-right" />
                </div>
            </b-table-column>
            <b-table-column
                field="id"
                label="ID"
                width="80"
                sortable
                :searchable="tableConfig.isSearchable"
                centered
            >
                {{ props.row.id }}
            </b-table-column>

            <b-table-column
                field="user.firstName"
                label="First Name"
                :searchable="tableConfig.isSearchable"
                sortable
            >
                {{ props.row.user.firstName }}
            </b-table-column>

            <b-table-column
                field="user.lastName"
                label="Last Name"
                sortable
                :searchable="tableConfig.isSearchable"
            >
                {{ props.row.user.lastName }}
            </b-table-column>

            <b-table-column
                field="date"
                label="Date"
                sortable
                :searchable="tableConfig.isSearchable"
            >
                {{ props.row.date }}
            </b-table-column>

            <b-table-column
                label="Gender"
                field="gender"
                sortable
                :searchable="tableConfig.isSearchable"
            >
                <span>
                    <b-icon
                        pack="fas"
                        :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"
                    />
                    {{ props.row.gender }}
                </span>
            </b-table-column>

            <b-table-column
                v-if="$vmq.md || $vmq.lg"
                width="50"
            >
                <router-link :to="{ path: '/organization/123/transaction/123'}">
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
    import { Component, Vue } from 'vue-property-decorator';
    import { users } from './data';

    @Component
    export default class UiTable extends Vue {
        // Todo move this to a level up to enable table generation
        // All table or column options may be here.
        tableConfig = {
            isSearchable: false
        };

        isPaginated = true;
        isPaginationSimple = false;
        paginationPosition = 'bottom';
        defaultSortDirection = 'asc';
        sortIcon = 'chevron-up';
        sortIconSize = 'is-small';
        currentPage = 1;
        perPage = 5;
        data = users;
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
