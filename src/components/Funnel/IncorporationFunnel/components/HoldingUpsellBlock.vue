<template>
    <UiCollapsible
        ref="grid-block"
        :disabled="true"
        :height="false"
        :header="false"
        :active="true"
    >
        <template #content>
            <ValidationObserver
                ref="observer"
                v-slot="validator"
                tag="form"
            >
                <h2 class="page-block-content-title is-size-3-tablet">
                    {{ $t('FUNNEL.HOLDING_UPSELL.PAGE_TITLE') }}
                </h2>

                <p class="description mg-top-30">
                    {{ $t('FUNNEL.HOLDING_UPSELL.PAGE_DESCRIPTION_1') }}
                </p>

                <p class="description mg-top-20">
                    {{ $t('FUNNEL.HOLDING_UPSELL.PAGE_DESCRIPTION_2') }}
                </p>

                <div class="usp-list">
                    <UiTooltip
                        v-for="(item, i) in usps"
                        :key="i"
                        :tooltip="item.description"
                    >
                        <p>
                            {{ item.title }}
                        </p>
                    </UiTooltip>
                </div>

                <div class="holdings">
                    <div class="shareholders-wrapper">
                        <div
                            v-for="(shareholder, index) in helper.shareholders"
                            :key="index"
                            :class="{'is-holding': shareholder.isHolding || shareholder.upsellHolding}"
                            class="shareholders-item"
                        >
                            <div
                                :ref="'user_' + index"
                                class="shareholder"
                            >
                                <UiIcon
                                    icon="shareholder"
                                    type="service"
                                    size="50"
                                    :color="shareholder.isHolding || shareholder.upsellHolding ? 'green' : 'red'"
                                />
                                {{ shareholder.displayName }}
                            </div>

                            <div
                                :ref="'holding_' + index"
                                class="shareholder holding"
                            >
                                <UiIcon
                                    :icon="shareholder.isHolding || shareholder.upsellHolding ? 'security' : 'no-security'"
                                    type="service"
                                    size="50"
                                    :color="shareholder.isHolding || shareholder.upsellHolding ? 'green' : 'red'"
                                />
                                <span v-if="!shareholder.upsellHolding && !shareholder.isHolding">
                                    No holding
                                </span>
                                <span v-else>
                                    {{ shareholder.upsellHoldingName || shareholder.displayName }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="bv-wrapper">
                        <div
                            ref="bv"
                            class="bv"
                        >
                            <UiIcon
                                icon="bv-funnel"
                                type="service"
                                size="60"
                                color="blue-darker"
                            />
                            BV
                        </div>
                    </div>
                </div>

                <div>
                    <p class="notification">
                        <strong>{{ $t('FUNNEL.HOLDING_UPSELL.PROMO_MESSAGE') }}</strong>
                    </p>
                </div>

                <div>
                    <ul>
                        <li
                            v-for="(shareholder, index) in helper.shareholders"
                            :key="index"
                            class="upsell-line"
                        >
                            <div>
                                <div
                                    v-if="!shareholder.isHolding"
                                    class="upsell-holding-name"
                                >
                                    <b-switch
                                        v-model="shareholder.upsellHolding"
                                        type="is-success"
                                        size="is-medium"
                                        @change.native="onHoldingUpsellChange"
                                    />
                                    <div>
                                        <span class="page-block-content-title">
                                            {{ $t('FUNNEL.HOLDING_UPSELL.ADD_HOLDING') }} {{ shareholder.displayName }}
                                        </span>
                                        <UiInputText
                                            v-if="shareholder.upsellHolding"
                                            v-model="shareholder.upsellHoldingName"
                                            :placeholder="shareholder.displayName + ' Holding'"
                                            :label="$t('FUNNEL.HOLDING_UPSELL.HOLDING_NAME')"
                                            :tooltip="$t('FUNNEL.HOLDING_UPSELL.HOLDING_UPSELL_DESCRIPTION')"
                                            class="mt-4"
                                            expanded
                                            @change.native="onHoldingUpsellChange"
                                        />
                                    </div>
                                </div>

                                <div
                                    v-else
                                    class="is-flex"
                                >
                                    <b-switch
                                        :value="true"
                                        type="is-success"
                                        disabled
                                        size="is-medium"
                                    />
                                    <span class="page-block-content-title">
                                        {{ shareholder.displayName }}
                                    </span>
                                </div>
                            </div>

                            <div
                                v-if="!shareholder.isHolding"
                                class="holding-price"
                            >
                                <PriceLabel
                                    :price="315"
                                    :price-before="350"
                                />
                            </div>
                        </li>
                    </ul>
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
    import UiCollapsible from '@/components/Global/UiCollapsible/UiCollapsible.vue';
    import UiTooltip from '@/components/Global/UiTooltip/UiTooltip.vue';
    import FunnelNavigation from '@/components/Funnel/IncorporationFunnel/components/FunnelNavigation.vue';
    import alertService from '@/services/alert.service';
    import i18n from '@/dependencies/i18n';
    import FunnelService from '@/services/funnel-service';
    import UiInputCheckbox from '@/components/Global/UiFormInputs/UiInputCheckbox/UiInputCheckbox.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import PriceLabel from '@/components/Global/PriceLabel/PriceLabel.vue';

    const LeaderLine = require('@/dependencies/leader-line.min');

    @Component({
        components: {
            PriceLabel,
            UiInputText,
            UiInputCheckbox,
            FunnelNavigation,
            UiTooltip,
            UiCollapsible
        }
    })
    export default class DistributionBlock extends Vue {
        @Prop() data!: any;
        @Prop() value!: any;
        @Prop() stepsDefinition;
        @Prop() helper!: FunnelService;

        lines: any = {};
        $parent: any;
        observer: any = null;

        mounted() {
            this.generateLines();
        }

        beforeDestroy() {
            this.removeLines();
        }

        get canContinue() {
            // To be used in case a new rule came in
            const reasons: Array<string> = [];
            const hasError = false;
            return { reasons, hasError };
        }

        get usps() {
            return Object.keys(i18n.t('FUNNEL.HOLDING_UPSELL.USPS')).filter((k) => k.indexOf('USP') > -1).map((kk, i) => {
                return {
                    title: i18n.t(`FUNNEL.HOLDING_UPSELL.USPS.USP_${i + 1}`),
                    description: i18n.t(`FUNNEL.HOLDING_UPSELL.USPS.DESCRIPTION_${i + 1}`)
                };
            });
        }

        generateLines() {
            const options: any = {
                size: 2,
                path: 'grid',
                endPlug: 'disc',
                showEffectName: 'draw',
                startSocket: 'bottom',
                endSocket: 'auto',
                hide: true,
                duration: 1500,
                timing: [0.38, 0, 0.82, 1]
            };
            this.helper.shareholders.map((s, i) => {
                options.color = s.isHolding || s.upsellHolding ? '#2cc164' : '#f96555';
                options.dash = (!s.isHolding && !s.upsellHolding);
                const user = 'user_' + i;
                const holding = 'holding_' + i;

                // Add lines
                this.lines[i] = new LeaderLine(this.$refs[user][0], this.$refs[holding][0], options);
                this.lines['bv_' + i] = new LeaderLine(this.$refs[holding][0], this.$refs.bv, options);

                // Show lines
                this.lines[i].show('draw', options);
                this.lines['bv_' + i].show('draw', options);
            });
        }

        removeLines() {
            Object.keys(this.lines).forEach(l => this.lines[l].remove());
        }

        nextStep(validator: any) {
            validator.validate();
            if (validator.invalid || this.canContinue.hasError) {
                return alertService.dangerMessage('Please fill all fields', null, { position: 'is-bottom' });
            }
            validator.reset();
            this.$parent.nextStep();
        }

        previousStep() {
            this.$parent.previousStep();
        }

        onHoldingUpsellChange() {
            this.removeLines();
            this.generateLines();
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    /deep/ .stepper-main-content {
        padding: 4* $margin-default;
    }

    .description {
        @include breakpoint-up(md) {
            max-width: 60%;
        }
    }

    .usp-list {
        margin-top: 2 * $margin-default;

        .tooltip {
            margin-bottom: 2 * $margin-default;
            position: relative;
            padding-left: 34px;

            &:before {
                content: '';
                width: 30px;
                height: 30px;
                position: absolute;
                left: 0;
                background-color: $color-green;
                mask-image: url("~icons/common/icon-check.svg");
                mask-repeat: no-repeat;
            }
        }
    }

    .holdings {
        @include font-size($xsmall-font-sizes);

        .ui-icon {
            margin-bottom: $margin-default;
        }
    }

    .shareholders-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 6 * $margin-default;
    }

    .shareholders-item {
        margin: 0 2 * $margin-default;

        @include breakpoint-down(md) {
            margin: $margin-default / 2;
        }
    }

    .shareholder {
        padding: $margin-default 2 * $margin-default;
        border-radius: $border-radius / 2;
        background: rgba($color-red, .25);
        color: $color-red-dark;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 140px;
        text-align: center;
        height: 100%;
        transition: all .3s ease;
        max-width: 140px;

        @include breakpoint-down(md) {
            min-width: 50px;
            padding: $margin-default;
        }

        .is-holding & {
            background: rgba($color-green, .25);
            color: $color-green-dark;
        }
    }

    .holding {
        margin-top: 6 * $margin-default;
        color: $color-red;
        background: none;
        border: 2px dotted $color-red;

        .is-holding & {
            background: rgba($color-green, .25);
            color: $color-green-dark;
            border: 2px dotted transparent;
        }

        span {
            word-wrap: break-word;
            hyphens: auto;
            max-width: 100%;
        }
    }

    .bv-wrapper {
        display: flex;
        justify-content: center;

        .bv-funnel svg {
            fill: $color-blue-darker;
        }
    }

    .bv {
        margin-top: 6 * $margin-default;
        min-width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $color-blue-darker;
        padding: $margin-default 2 * $margin-default;
        border-radius: $border-radius / 2;
        background: rgba($color-blue, .25);
    }

    .notification {
        text-align: center;
        margin: 4 * $margin-default 0;
        background-color: rgba($color-green, .1);
        color: $color-green;
        @include font-size($small-font-sizes);
    }

    .upsell-line {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2 * $margin-default;
    }

    .upsell-holding-name {
        display: flex;
        align-items: flex-start;

        @include breakpoint-down(sm) {
            flex-direction: column;
        }

        .page-block-content-title {
            @include breakpoint-down(sm) {
                margin-top: 2* $margin-default;
            }
        }
    }

    .stepper-grid {
        max-width: 920px;
        margin: auto;
    }
</style>
