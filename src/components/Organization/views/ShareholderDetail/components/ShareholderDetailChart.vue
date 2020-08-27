<template>
    <div class="shareholder-chart">
        <apexchart
            width="80"
            :type="type"
            :options="options"
            :series="series"
        />

        {{ (totalShares / totalAvailableShares * 100).toFixed(2) }}%
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { ShareholderTypes } from '@/types/organisation.types';
    import { ColorHelper } from '@/helpers/utility.helper';
    import VueApexCharts from 'vue-apexcharts';

    Vue.component('apexchart', VueApexCharts);

    @Component
    export default class ShareholderDetailChart extends Vue {
        @Prop() shareholder!: ShareholderTypes;
        @Prop() totalShares!: any;
        @Prop() totalAvailableShares!: any;
        @Prop({ default: 'pie' }) type!: string;

        options: any = {
            colors: [],
            labels: [],
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            }
        };

        series: Array<any> = [];

        created() {
            const labels: Array<string> = [];
            const colors: Array<string> = [];
            const amounts: Array<number> = [];
            this.shareholder.shares.forEach(s => {
                amounts.push(s.amount);
                labels.push(s.asset);
                colors.push(ColorHelper.getHex(s.asset));
            });
            colors.push('#cdd2d7');
            labels.push('Remaining shares');
            amounts.push(this.totalAvailableShares - this.totalShares);
            this.options.colors = colors;
            this.options.labels = labels;
            this.series = amounts;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .shareholder-chart {
        display: flex;
        align-items: center;
    }
</style>
