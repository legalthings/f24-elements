<template>
    <UiCollapsible
        ref="grid-block"
        :active="active"
        :disabled="true"
        :height="false"
    >
        <template #header>
            {{ $t('FUNNEL.SHAREHOLDER.DISTRIBUTION') }}
        </template>

        <template
            v-if="active"
            #content
        >
            <ValidationObserver
                ref="observer"
                v-slot="validator"
                class="field"
                tag="form"
            >
                <div class="columns">
                    <div class="column is-2 is-7-tablet">
                        <UiTooltip :tooltip="$t('FUNNEL.SHAREHOLDER.HOW_MANY_SHARES_CREATE_TOOLTIP')">
                            <h3 class="page-block-content-title">
                                {{ $t('FUNNEL.SHAREHOLDER.HOW_MANY_SHARES_CREATE') }}
                            </h3>
                        </UiTooltip>
                        <p class="mt-3">
                            {{ $t('FUNNEL.SHAREHOLDER.HOW_MANY_SHARES_CREATE_DESCRIPTION') }}
                        </p>
                    </div>
                    <div class="column">
                        <div class="columns">
                            <UiInputText
                                v-model="value.shareValue"
                                :label="$t('FUNNEL.SHAREHOLDER.VALUE_PER_SHARE') + ' €'"
                                rules="required|currency|min_value:0.01"
                                class="column"
                                type="number"
                                step="0.01"
                            />
                            <UiInputText
                                :value="helper.totalSharesAmount"
                                :label="$t('FUNNEL.SHAREHOLDER.AMOUNT_OF_SHARES')"
                                class="column"
                                disabled
                            />
                            <UiInputText
                                :value="(value.shareValue * helper.totalSharesAmount).toFixed(2)"
                                :label="$t('ORGANIZATION.PAID_UP_CAPITAL') + ' €'"
                                class="column"
                                type="number"
                                disabled
                            />
                        </div>
                    </div>
                </div>

                <hr>

                <div class="mg-top-50">
                    <h3 class="page-block-content-title">
                        {{ $t('FUNNEL.SHAREHOLDER.SHARES_DISTRIBUTED') }}
                    </h3>

                    <div class="columns mt-6">
                        <div class="column shareholders-list">
                            <div
                                v-for="(shareholder, index) in helper.shareholders"
                                :key="index"
                                class="shareholder-share-amount"
                            >
                                <div class="shareholder-name">
                                    <UiShareholderType
                                        :type="shareholder.shareholderType"
                                        :name="shareholder.displayName"
                                        size="40"
                                    />
                                    {{ shareholder.displayName }}
                                </div>

                                <UiInputCheckbox
                                    v-model="shareholder.isDirector"
                                    :items="[{name: 'Director', id: true}]"
                                    :rules="directorRules"
                                />

                                <UiInputText
                                    v-model.number="shareholder.amountOfShares"
                                    :label="$t('FUNNEL.SHAREHOLDER.AMOUNT_OF_SHARES')"
                                    :name="`amountOfShares_${index}`"
                                    rules="required|min_value:1"
                                    class="shareholder-amount"
                                    type="number"
                                />
                            </div>
                        </div>
                        <div class="column is-5 shareholder-chart">
                            <apexchart
                                type="donut"
                                :options="options"
                                :series="helper.totalsShareAmounts"
                                width="300"
                            />
                        </div>
                    </div>
                </div>

                <FunnelNavigation
                    :validator="validator"
                    :can-continue="canContinue"
                    :has-previous="true"
                    @prev="previousStep(validator)"
                    @next="nextStep(validator)"
                />
            </ValidationObserver>
        </template>
    </UiCollapsible>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import UiCollapsible from '@/components/Global/UiCollapsible/UiCollapsible.vue';
    import UiTooltip from '@/components/Global/UiTooltip/UiTooltip.vue';
    import VueApexCharts from 'vue-apexcharts';
    import { ColorHelper } from '@/helpers/utility.helper';
    import UiInputCheckbox from '@/components/Global/UiFormInputs/UiInputCheckbox/UiInputCheckbox.vue';
    import FunnelNavigation from '@/components/Funnel/IncorporationFunnel/components/FunnelNavigation.vue';
    import UiShareholderType from '@/components/Global/UiShareholderType/UiShareholderType.vue';
    import alertService from '@/services/alert.service';

    Vue.component('apexchart', VueApexCharts);

    @Component({
        components: {
            UiShareholderType,
            FunnelNavigation,
            UiInputCheckbox,
            UiTooltip,
            UiCollapsible,
            UiInputText
        }
    })
    export default class DistributionBlock extends Vue {
        @Prop() data!: any;
        @Prop() active!: boolean;
        @Prop() value!: any;
        @Prop() progress!: any;
        @Prop() index!: any;
        @Prop() helper!: any;

        $parent: any;

        observer: any = null;

        created() {
            if (!this.value.shareValue) {
                this.value.shareValue = 0.01;
            }
            this.setShareholderStartSharesAmount();
            this.$emit('input', this.value);
        }

        get directorRules() {
            return `atLeastOneDirector:${this.hasNoDirector}`;
        }

        get hasNoDirector() {
            return !this.helper.shareholders.find(s => (s.isDirector));
        }

        get canContinue() {
            // To be used in case a new rule came in
            const reasons: Array<string> = [];
            const hasError = false;
            return { reasons, hasError };
        }

        get options() {
            const labels: Array<string> = [];
            const colors: Array<string> = [];
            this.helper.shareholders.map((s) => {
                labels.push(s.displayName);
                colors.push(ColorHelper.getHex(s.displayName));
            });
            return {
                labels,
                colors,
                dataLabels: {
                    enabled: true
                },
                legend: {
                    show: false
                }
            };
        }

        setShareholderStartSharesAmount() {
            this.helper.shareholders.map(s => {
                if (!s.amountOfShares) (s.amountOfShares = 60);
            });
        }

        nextStep(validator: any) {
            validator.validate();
            if (validator.invalid || this.canContinue.hasError) {
                return alertService.dangerMessage('Please fill all fields', null, { position: 'is-bottom' });
            }
            validator.reset();
            // TODO Perform validation on required fields in this component
            this.$parent.nextStep();
        }

        previousStep() {
            this.$parent.previousStep();
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    /deep/ .stepper-main-content {
        padding: 4 * $margin-default;
    }

    .shareholders-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .shareholder-share-amount {
        display: flex;
        align-items: center;
        margin-bottom: 2 * $margin-default;

        @include breakpoint-down(sm) {
            flex-direction: column;
        }

        .shareholder-name {
            flex: 2;
            display: flex;
            align-items: center;
        }

        .shareholder-amount {
            flex: 1;
        }

        .ui-checkbox {
            flex: 1;
        }
    }

    .shareholder-chart {
        display: flex;
        justify-content: center;
    }
</style>
