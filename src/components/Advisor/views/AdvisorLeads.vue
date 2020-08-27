<template>
    <PageMainSection>
        <template #header>
            {{ $t('PAGE_TITLES.LEADS') }}
        </template>
        <template #options>
            <div class="buttons">
                <AdvisorHeaderButtons />
            </div>
        </template>
        <template #content>
            <b-loading
                :is-full-page="true"
                :active.sync="isLoading"
            />
            <UiSummaryBlocks
                :summary-data="summaryBlocksData"
                variant="b"
            />

            <b-tabs
                v-if="!isLoading"
                v-model="activeTab"
                class="leads"
                expanded
                destroy-on-hide
            >
                <b-tab-item>
                    <template slot="header">
                        <div class="tab-header">
                            <h3>
                                {{ $t('ADVISOR.OPEN_LEADS') }}
                            </h3>
                            <b-tag
                                type="is-danger"
                                rounded
                            >
                                {{ openLeads.length }}
                            </b-tag>
                        </div>
                    </template>
                    <AdvisorLeadsOpenTable
                        :table-data="openLeads"
                        :loading="isLoading"
                        @updateLeads="updateLeads"
                    />
                </b-tab-item>

                <b-tab-item>
                    <template slot="header">
                        <div class="tab-header">
                            <h3>
                                {{ $t('ADVISOR.CLOSED_LEADS') }}
                            </h3>
                        </div>
                    </template>
                    <AdvisorLeadsClosedTable
                        :table-data="closedLeads"
                        :loading="isLoading"
                    />
                </b-tab-item>

                <b-tab-item>
                    <template slot="header">
                        <div class="tab-header">
                            <h3>
                                Open orders
                            </h3>
                        </div>
                    </template>
                    <AdvisorLeadsTransactions
                        :table-data="openTransactions"
                        @updateTransactions="getLeadOpenTransactions"
                    />
                </b-tab-item>
            </b-tabs>
        </template>
    </PageMainSection>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageMainSection from '@/components/Global/Page/PageMainSection/PageMainSection.vue';
    import i18n from '@/dependencies/i18n';
    import UiSummaryBlocks from '@/components/Organization/components/UiSummaryBlocks.vue';
    import AdvisorHeaderButtons from '@/components/Advisor/components/AdvisorHeaderButtons.vue';
    import { LeadPurchasesTypes } from '@/types/lead.types';
    import apiService from '@/services/api.service';
    import AdvisorLeadsOpenTable from '@/components/Advisor/components/AdvisorLeadsOpenTable.vue';
    import AdvisorLeadsClosedTable from '@/components/Advisor/components/AdvisorLeadsClosedTable.vue';
    import AdvisorLeadsTransactions from '@/components/Advisor/components/AdvisorLeadsTransactions.vue';

    @Component({
        components: {
            AdvisorLeadsTransactions,
            AdvisorLeadsClosedTable,
            AdvisorLeadsOpenTable,
            AdvisorHeaderButtons,
            UiSummaryBlocks,
            PageMainSection
        }
    })
    export default class AdvisorLeads extends Vue {
        @Prop() leadsAmount!: number;
        @Prop() leadsOpen!: { total: number, data: [LeadPurchasesTypes] };
        processes: Array<any> = [];
        leads: Array<any> = [];
        openTransactions: Array<any> = [];
        isLoading = true;
        activeTab = 0;

        async created() {
            await this.getLeads();
            this.isLoading = false;
            this.getLeadOpenTransactions();
        }

        get summaryBlocksData() {
            return [
                {
                    label: i18n.t('ADVISOR.YOUR_OPEN_LEADS'),
                    value: this.openLeads.length
                },
                {
                    label: i18n.t('ADVISOR.CLOSED_LEADS'),
                    value: this.closedLeads.length
                },
                {
                    label: i18n.t('ADVISOR.LEADS_WON'),
                    value: this.wonLeads.length
                },
                {
                    label: i18n.t('ADVISOR.AVAILABLE_LEADS'),
                    value: this.leadsAmount
                }
            ];
        }

        get wonLeads() {
            return this.leads.filter(l => l.status === 'won');
        }

        get openLeads() {
            return this.leads.filter(l => l.status === 'open');
        }

        get closedLeads() {
            return this.leads.filter(l => l.status !== 'open');
        }

        async getLeads() {
            const { data } = await apiService.get('lead-purchases', [{ key: 'limit', value: 999 }]);
            this.leads = data;
        }

        async getLeadOpenTransactions() {
            const { data } = await apiService.get('lead-transactions', [{ key: 'limit', value: 999 }, {
                key: 'status',
                value: 'new'
            }]);
            this.openTransactions = data;
        }

        updateLeads() {
            this.getLeads();
            this.$emit('updateLeads');
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .leads {
        margin-top: 3 * $margin-default;

        /deep/ .tabs {

            a {
                height: 50px;
                justify-content: flex-start;
            }
        }
    }

    .tab-header {
        display: flex;
        align-items: center;
        padding-right: 2 * $margin-default;

        h3 {
            margin-right: $margin-default;

            .is-active & {
                @include fs-medium;
            }
        }
    }

    /deep/ .tab-content {
        padding: 2 * $margin-default 0;
    }

    /deep/ .detail-container {

        .button {
            &:hover {
                .ui-icon {
                    fill: $color-gray-00;
                }
            }
        }
    }

</style>
