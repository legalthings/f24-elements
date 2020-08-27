<template>
    <div class="shareholders-details">
        <PageBlock
            :back-button="{name: 'organization', label: $t('NAVIGATION.OVERVIEW'), params: {organizationId: $route.params.organizationId}}"
        >
            <template #content>
                <PageSection>
                    <div slot="header">
                        {{ $t('SIDEBAR_MENU.DIRECTORS') }}
                    </div>
                    <div slot="content">
                        <b-table
                            v-if="organization.boardMembers.length > 0"
                            :data="organization.boardMembers"
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
                                    field="corporation_type"
                                    label="Type"
                                    sortable
                                    width="120"
                                >
                                    <figure class="type-icon">
                                        <UiIcon
                                            v-if="!props.row.corporation_type"
                                            size="16"
                                            icon="account"
                                            type="custom"
                                            color="white"
                                        />
                                        <i
                                            v-else
                                            class="far fa-building"
                                        />
                                    </figure>
                                </b-table-column>
                                <b-table-column
                                    field="name"
                                    :label="$t('SHAREHOLDERS_DETAILS.NAME')"
                                    sortable
                                >
                                    {{ props.row.name || (`${props.row.first_name} ${props.row.last_name}`) }}
                                </b-table-column>
                                <b-table-column
                                    field="details"
                                    width="50"
                                >
                                    <router-link
                                        v-if="props.row.hasShares"
                                        class="table-action-link"
                                        :to="{name: 'organization-shareholder', params: {shareholderId: props.row.id}}"
                                    >
                                        <UiIcon icon="arrow-right" />
                                    </router-link>
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
    import OrganizationDetailsEvents from '@/components/Organization/components/OrganizationDetailsEvents.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';

    @Component({
        components: {
            OrganizationDetailsEvents,
            PageSection,
            PageBlock
        }
    })

    export default class OrganizationDirectors extends Vue {
        @Prop() organization!: OrganizationService;
        isPaginated = false;
        isPaginationSimple = false;
        paginationPosition = 'bottom';
        defaultSortDirection = 'desc';
        sortIcon = 'chevron-up';
        sortIconSize = 'is-small';
        currentPage = 1;
        perPage = 100;
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
