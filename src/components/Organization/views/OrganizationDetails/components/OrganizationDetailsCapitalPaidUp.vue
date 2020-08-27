<template>
    <b-table
        ref="table"
        :data="sharesEvents"
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
                field="asset"
                :label="$t('SHAREHOLDERS_DETAILS.TYPE_OF_SHARES')"
                sortable
            >
                <ShareSymbol :asset="props.row.asset" />
            </b-table-column>

            <b-table-column
                field="total_amount_asset"
                :label="$t('ORGANIZATION.TOTAL_NUMBER_OF_SHARES')"
                sortable
            >
                {{ props.row.fully_paid_amount }}
            </b-table-column>

            <b-table-column
                field="to"
                label="to"
                sortable
            >
                <div v-if="props.row.to.user">
                    {{ props.row.to.user.first_name + ' ' + props.row.to.user.last_name }}
                </div>
                <div v-else>
                    {{ props.row.to.organization.name }}
                </div>
            </b-table-column>

            <b-table-column
                field="created"
                :label="$t('ORGANIZATION.PLACEMENT_DATE')"
                sortable
            >
                {{ $f24.formatDate(props.row.created) }}
            </b-table-column>

            <b-table-column
                field="type"
                :label="$t('ORGANIZATION.NOMINAL_AMOUNT_PER_SHARE')"
            >
                {{ getPaidCapital(props.row.asset) }}
            </b-table-column>
        </template>
    </b-table>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageSectionItems from '@/components/Global/Page/PageSection/PageSectionItems.vue';
    import ShareSymbol from '@/components/Global/ShareSymbol/ShareSymbol.vue';
    import ShareholderDetailChart
        from '@/components/Organization/views/ShareholderDetail/components/ShareholderDetailChart.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';

    @Component({
        components: { ShareholderDetailChart, ShareSymbol, PageSectionItems }
    })
    export default class OrganizationDetailsCapitalPaidUp extends Vue {
        $refs!: {
            table: any
        };

        @Prop() organization!: OrganizationService;
        @Prop() sharesEvents!: any;

        isPaginated = false;
        sortIcon = 'chevron-up';
        sortIconSize = 'is-small';
        currentPage = 1;
        perPage = 50;

        getPaidCapital(asset: string) {
            const share = this.organization.data.share_values_summary.find((s: any) => s.asset === asset) || { value: '-' };
            return this.$f24.convertToLocaleString(share.value);
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

        .mobile-header-column {

            .mobile-header-column-actions {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
</style>
