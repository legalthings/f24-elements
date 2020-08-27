<template>
    <section class="section">
        <div class="header">
            <h2>
                {{ $t('ORGANIZATION.SHAREHOLDERS') }}
            </h2>
            <b-button
                type="is-primary is-padding-small has-icon"
                href="https://www.firm24.com/wijzigen-onderneming/"
                tag="a"
                target="_blank"
                rounded
            >
                <i class="fas fa-people-arrows" />
                {{ $t('ORGANIZATION.UPDATE_SHAREHOLDERS') }}
            </b-button>
        </div>
        <div
            v-if="organization.getShareholders().length > 0"
            class="box"
        >
            <div class="chart">
                <b-select
                    v-model="selectedShareType"
                    class="type-selector"
                    size="is-small"
                    rounded
                    :expanded="$vmq.xs || $vmq.sm"
                >
                    <option
                        v-for="(type, key, index) in availableShareTypes"
                        :key="index"
                        :value="key"
                    >
                        {{ $t(`ORGANIZATIONS_SHAREHOLDERS.${type.name}`) }}
                    </option>
                </b-select>

                <apexchart
                    :width="chartWidth"
                    type="donut"
                    :options="options"
                    :series="series"
                />
            </div>
            <div class="table">
                <div class="chart-labels">
                    <span>
                        {{ $t('ORGANIZATION.SHAREHOLDERS') }}
                    </span>
                    <span>
                        {{ $t('ORGANIZATION.SHARES_AMOUNT') }}
                    </span>
                    <template v-if="$vmq.lg">
                        <span>
                            {{ $t('ORGANIZATION.FULLY_PAID') }}
                        </span>
                        <span>
                            {{ $t('ORGANIZATION.ENCOURAGED') }}
                        </span>
                    </template>
                </div>
                <div class="chart-values">
                    <div
                        v-for="(shareholder, index) in organization.sharesSummary"
                        :key="index"
                    >
                        <div
                            v-if="getSharesAndPercentage(shareholder.shares).amount > 0"
                            class="chart-value-line"
                        >
                            <span
                                v-if="shareholder.user"
                                class="chart-value-line-first"
                            >
                                <span
                                    :style="{background: options.colors[index]}"
                                    class="icon-wrapper"
                                >
                                    <UiIcon
                                        size="20"
                                        icon="account"
                                        type="custom"
                                        color="white"
                                    />
                                </span>
                                <router-link
                                    :to="{name: 'organization-shareholder', params: {shareholderId: shareholder.user.id}}"
                                >
                                    {{ shareholder.user.first_name }} {{ shareholder.user.last_name }}
                                </router-link>
                            </span>

                            <span v-if="shareholder.organization">
                                <span
                                    :style="{background: options.colors[index]}"
                                    class="icon-wrapper"
                                >
                                    <i class="far fa-building" />
                                </span>
                                <router-link
                                    :to="{name: 'organization-shareholder', params: {shareholderId: shareholder.organization.id}}"
                                >
                                    {{ shareholder.organization.name }}
                                </router-link>
                            </span>

                            <span>
                                {{ getSharesAndPercentage(shareholder.shares).amount }} ({{ getSharesAndPercentage(shareholder.shares).percentage }}%)
                            </span>
                            <template v-if="$vmq.lg">
                                <span>
                                    <UiIcon
                                        v-if="getIsNotFullyPaid(shareholder.shares)"
                                        icon="close"
                                        color="red"
                                    />
                                    <UiIcon
                                        v-else
                                        icon="check"
                                        color="green"
                                    />
                                </span>

                                <span>
                                    {{ getIsEncumbered(shareholder.shares) }}
                                </span>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-else
            class="box"
        >
            <h4>
                {{ $t('GLOBAL.NO_DATA_AVAILABLE') }}
            </h4>
        </div>
        <router-link :to="{path: `/organization/${organization.id}/organization-details/`}">
            <b-button
                type="is-text has-text-primary shareholder-details"
                rounded
            >
                {{ $t('ORGANIZATION.SHAREHOLDERS_DETAILS') }}

                <UiIcon icon="arrow-left" />
            </b-button>
        </router-link>
    </section>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import VueApexCharts from 'vue-apexcharts';
    import { ShareTypes } from '@/types/shares.types';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import i18n from '@/dependencies/i18n';
    import UiDropdownRequestChange from '@/components/Global/UiDropdownRequestChange/UiDropdownRequestChange.vue';
    import UiButton from '@/components/Global/UiButton/UiButton.vue';

    Vue.component('apexchart', VueApexCharts);
    @Component({
        components: { UiButton, UiDropdownRequestChange }
    })
    export default class OrganizationShareholders extends Vue {
        @Prop() organization!: OrganizationService;

        availableShareTypes: any = {};
        selectedShareType = 'all_shares';

        options: any = {
            labels: [],
            colors: [],
            dataLabels: {
                enabled: true
            },
            legend: {
                show: false
            }
        };

        series: Array<any> = [];

        created() {
            this.availableShareTypes = this.organization.getAllAvailableShareTypes();
            const sharesOverview = this.organization.getSharesPerSelectedType(this.selectedShareType);
            this.setChartData(sharesOverview);
        }

        setChartData(sharesOverview: any) {
            this.options.labels = sharesOverview.names;
            this.options.colors = sharesOverview.colors;
            this.series = sharesOverview.amounts;
        }

        getSharesAndPercentage(shares: Array<ShareTypes>) {
            let amount = 0;
            let percentage = '';

            if (this.selectedShareType === 'all_shares') {
                const totalShares = shares.reduce((acc, current) => {
                    return acc + current.amount;
                }, 0);
                amount = totalShares;
                percentage = (totalShares / this.availableShareTypes.all_shares.amount * 100).toFixed(2);
            } else {
                const share: any = shares.find(s => s.asset === this.selectedShareType);
                if (share) {
                    amount = share.amount;
                    percentage = (share.amount / this.availableShareTypes[share.asset].amount * 100).toFixed(2);
                }
            }

            return {
                amount: amount,
                percentage: percentage
            };
        }

        get chartWidth() {
            return this.$vmq.xs || this.$vmq.sm || this.$vmq.md ? '280px' : '300px';
        }

        getSelectedShare(shares: Array<ShareTypes>): ShareTypes | undefined {
            return shares.find((s: any) => s.asset === this.selectedShareType);
        }

        getIsEncumbered(shares: Array<ShareTypes>) {
            const share = this.getSelectedShare(shares);
            const encumbered = share && share.encumbered ? share.encumbered : i18n.t('GLOBAL.FALSE');
            return this.selectedShareType === 'all_shares' ? i18n.t('GLOBAL.FALSE') : encumbered;
        }

        getIsNotFullyPaid(shares: any) {
            if (this.selectedShareType === 'all_shares') {
                return shares.some((s: ShareTypes) => s.fully_paid_amount < s.amount);
            }
            const share = this.getSelectedShare(shares);
            return share && share.fully_paid_amount < share.amount;
        }

        @Watch('selectedShareType')
        onSelectedShareType(selectedShareType: string) {
            const sharesOverview = this.organization.getSharesPerSelectedType(selectedShareType);
            this.setChartData(sharesOverview);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2 * $margin-default;

        @include breakpoint-down(sm) {
            flex-direction: column;

            h2 {
                margin-bottom: $margin-default;
            }
        }

        h2 {
            display: flex;
            @include fs-medium;
            justify-content: space-between;
        }
    }

    .box {
        position: relative;
        display: flex;

        @include breakpoint-down(md) {
            flex-direction: column;
        }
    }

    .chart-label {
        @include fs-medium;
        color: $color-blue-gray-02;
        @include font-size($small-font-sizes);
    }

    .type-selector {
        margin: 2 * $margin-default 0;

        /deep/ select {
            background: $color-blue-gray-02;
            color: $color-gray-00;
            border-color: $color-blue-gray-02;
        }

        /deep/ .select {
            &:after {
                border-color: $color-gray-00;
            }
        }
    }

    .table {
        margin-top: 30px;
        flex-grow: 1;
        padding-right: 2 * $margin-default;

        .chart-labels {
            display: flex;
            justify-content: space-between;

            span {
                flex: 1;
                @extend .chart-label;
                text-align: center;

                &:first-child {
                    text-align: left;
                }

                &:last-child {
                    @include breakpoint-up(md) {
                        text-align: right;
                    }
                }
            }
        }

        .chart-values {
            margin-top: 4 * $margin-default;

            .chart-value-line {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: $margin-default * 2;
            }

            span:not(.icon-wrapper) {
                text-align: center;
                flex: 1;

                &:last-child {
                    text-align: right;
                }

                &:first-child {
                    display: flex;
                    text-align: left;
                    color: $color-gray-00;
                    align-items: center;
                }
            }
        }
    }

    .icon-wrapper {
        border-radius: 100%;
        min-width: 40px;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: $margin-default;
    }

    /deep/ .apexcharts-legend {
        position: absolute;
        right: 0 !important;
        left: auto !important;
        top: 70px !important;

        .apexcharts-legend-series {
            display: flex;
            margin-bottom: 20px !important;

            .apexcharts-legend-text {
                font-family: FiraSans-Medium, sans-serif;
                font-weight: bold;
                color: $color-blue !important;
                margin-left: $margin-default;
            }
        }
    }

    /deep/ .shareholder-details {

        span {
            display: flex;
            align-items: center;
        }

        .ui-icon {
            transform: scaleX(-1);
        }
    }

    .no-link {
        pointer-events: none;
        color: $color-gray-70;
    }
</style>
