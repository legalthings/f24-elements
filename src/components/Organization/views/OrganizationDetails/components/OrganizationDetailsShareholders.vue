<template>
    <div v-if="organization.getShareholders().length > 0">
        <b-table
            ref="table"
            :data="organization.getShareholders()"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            default-sort-direction="desc"
            :show-detail-icon="false"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
        >
            <template slot-scope="props">
                <b-table-column
                    v-if="$vmq.md || $vmq.lg"
                    field="type"
                    :label="$t('GLOBAL.TYPE')"
                >
                    <figure class="type-icon">
                        <UiIcon
                            v-if="props.row.type === 'user'"
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
                >
                    <template>
                        {{ props.row.name }}
                    </template>
                </b-table-column>

                <b-table-column
                    field="type"
                    :label="$t('SHAREHOLDERS_DETAILS.TYPE_OF_SHARES')"
                >
                    <div class="shares-icons">
                        <ShareSymbol
                            v-for="(share, index) in props.row.shares"
                            :key="index"
                            :asset="share.asset"
                        />
                    </div>
                </b-table-column>

                <b-table-column
                    :label="$t('SHAREHOLDERS_DETAILS.OWNERSHIP_PERCENTAGE')"
                >
                    <ShareholderDetailChart
                        type="donut"
                        :shareholder="props.row"
                        :total-shares="props.row.totalShares"
                        :total-available-shares="totalAvailableShares"
                    />
                </b-table-column>

                <b-table-column
                    field="details"
                    width="50"
                >
                    <router-link
                        :to="{name: 'organization-shareholder', params: {shareholderId: props.row.data.id}}"
                        class="table-action-link"
                    >
                        <UiIcon icon="arrow-right" />
                    </router-link>
                </b-table-column>
            </template>
        </b-table>
    </div>
    <div
        v-else
        class="box"
    >
        {{ $t('GLOBAL.NO_DATA_AVAILABLE') }}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageSectionItems from '@/components/Global/Page/PageSection/PageSectionItems.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import ShareSymbol from '@/components/Global/ShareSymbol/ShareSymbol.vue';
    import ShareholderDetailChart
        from '@/components/Organization/views/ShareholderDetail/components/ShareholderDetailChart.vue';

    @Component({
        components: { ShareholderDetailChart, ShareSymbol, PageSectionItems }
    })
    export default class OrganizationDetailsShareholders extends Vue {
        $refs!: {
            table: any
        };

        @Prop() organization!: OrganizationService;
        @Prop() events!: Array<any>;

        isPaginated = false;
        sortIcon = 'chevron-up';
        sortIconSize = 'is-small';
        currentPage = 1;
        perPage = 50;
        totalAvailableShares = 0;

        created() {
            this.totalAvailableShares = this.organization.data.total_shares_amount;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
    @import "~css/_tables";

    /deep/ .table {
        @include table-primary;

        .mobile-header-column {

            .mobile-header-column-actions {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }

    .row-action {
        display: flex;
    }

    .open-details {
        cursor: pointer;
        transition: transform .3s ease-in-out;

        &:hover {
            fill: $color-blue-darker;
        }

        &.is-open {
            transform: rotate(180deg);
        }
    }

    .shares-icons {
        display: flex;

        @include breakpoint-down(xs) {
            flex-direction: column;
            span {
                margin-bottom: $margin-default;
            }
        }
    }
</style>
