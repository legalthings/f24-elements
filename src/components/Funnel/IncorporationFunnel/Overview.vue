<template>
    <div class="container">
        <section class="section">
            <ValidationObserver
                ref="observer"
                v-slot="validator"
                tag="form"
            >
                <h1 class="">
                    {{ $t('FUNNEL.OVERVIEW.PAGE_TITLE') }}
                </h1>

                <div class="box mt-6">
                    <h3 class="page-content-title">
                        {{ $t('FUNNEL.OVERVIEW.ESTABLISHMENT') }}
                    </h3>

                    <OverviewItems :items="products" />

                    <hr>

                    <h3 class="page-content-title">
                        {{ $t('FUNNEL.DOCUMENTS.SHAREHOLDER_PACKAGE') }}
                    </h3>

                    <OverviewItems :items="contracts" />

                    <hr>

                    <h3 class="page-content-title">
                        {{ $t('FUNNEL.OVERVIEW.ADDITIONAL_SERVICES') }}
                    </h3>

                    <div class="overview-bookkeeper">
                        <b-switch
                            v-model="value[0].optInBookkeeper"
                            type="is-success"
                        />
                        <div>
                            <h4>{{ $t('FUNNEL.OVERVIEW.FREE_BOOKKEEPER') }}</h4>
                            <span>{{ $t('FUNNEL.OVERVIEW.FREE_BOOKKEEPER_DESCRIPTION') }}</span>
                        </div>
                    </div>

                    <hr>

                    <OverviewItems :items="subTotals" />

                    <hr>

                    <div class="total">
                        <h2 class="page-block-content-title is-size-3">
                            {{ $t('FUNNEL.OVERVIEW.TOTAL') }}
                        </h2>
                        <PriceLabel :price="totalPrice" />
                    </div>
                </div>

                <div class="box mt-6">
                    <h3 class="page-content-title">
                        {{ $t('FUNNEL.OVERVIEW.STATEMENT_OF_APPROVAL') }}
                    </h3>

                    <div class="mt-5 agreement">
                        <UiInputCheckbox
                            v-model="value[0].agree_1"
                            :rules="{ required: { allowFalse: false } }"
                        >
                            Ja, ik heb de <a href="#"> algemene voorwaarden </a> en <a href="#"> WWFT informatie </a>
                            gelezen en ben hiermee akkoord.
                        </UiInputCheckbox>

                        <UiInputCheckbox
                            v-model="value[0].agree_2"
                            :rules="{ required: { allowFalse: false } }"
                        >
                            <div>
                                <span>Ik verklaar dat de aandeelhouder(s) / oprichter(s) / bestuurder(s):</span>
                                <span>
                                    <i>•</i> niet betrokken zijn geweest bij criminele antecedenten
                                </span>
                                <span>
                                    <i>•</i> de afgelopen 4 jaar niet betrokken is / zijn geweest bij een faillisement, of onder bewind of curatele heeft / hebben gestaan.
                                </span>
                            </div>
                        </UiInputCheckbox>
                    </div>
                </div>

                <FunnelNavigation
                    :validator="validator"
                    :has-previous="true"
                    next-label="Payment"
                    @prev="previousStep(validator)"
                    @next="nextStep(validator)"
                />
            </ValidationObserver>
        </section>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import FunnelNavigation from './components/FunnelNavigation.vue';
    import UiInputCheckbox from '../../Global/UiFormInputs/UiInputCheckbox/UiInputCheckbox.vue';
    import FunnelService from '../../../services/funnel-service';
    import alertService from '@/services/alert.service';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import UiInputRadio from '@/components/Global/UiFormInputs/UiInputRadio/UiInputRadio.vue';
    import UiTooltip from '@/components/Global/UiTooltip/UiTooltip.vue';
    import PriceLabel from '@/components/Global/PriceLabel/PriceLabel.vue';
    import OverviewItems from '@/components/Funnel/IncorporationFunnel/components/OverviewItems.vue';
    import i18n from '@/dependencies/i18n';

    @Component({
        components: {
            OverviewItems,
            PriceLabel,
            UiTooltip,
            UiInputRadio,
            UiInputText,
            UiInputCheckbox,
            FunnelNavigation
        }
    })
    export default class Overview extends Vue {
        @Prop() data!: any;
        @Prop() value: any;
        @Prop() stepsDefinition;
        @Prop() helper!: FunnelService;

        created() {
            this.value[0].optInBookkeeper = true;
        }

        get products() {
            const upsellHolding = this.helper.upsellHolding.map(u => {
                return [
                    {
                        label: 'Holding for ' + u.displayName,
                        price: 350
                    },
                    {
                        label: 'Speed for holding' + u.displayName,
                        price: 195
                    }
                ];
            }).flat();

            return [
                {
                    label: 'Pakketkeuze oprichting - Plus Pakket',
                    price: 344,
                    originalPrice: 499
                },
                {
                    label: 'Oprichtingssnelheid - Spoed',
                    price: 195
                },
                {
                    label: 'Wettelijke bijdrage Kwaliteitsfonds Notariaat',
                    price: 8.22,
                    tooltip: 'Description'
                },
                {
                    label: 'Bemiddelingskosten adviseur',
                    price: 240,
                    tooltip: 'Description'
                },
                ...upsellHolding
            ];
        }

        get contracts() {
            const salaryPackages = this.helper.salaryPackages.map(s => {
                return {
                    label: 'DGA salarispakket voor ' + s.displayName,
                    price: 130
                };
            });
            const contract = {
                label: 'Aandeelhouderspakket',
                price: 75
            };
            return [
                ...salaryPackages,
                contract
            ];
        }

        get totalProductsPrice() {
            return [...this.products, ...this.contracts].reduce((acc, c) => (acc = acc + c.price), 0);
        }

        get subTotals() {
            return [
                {
                    label: i18n.t('FUNNEL.OVERVIEW.SUBTOTAL'),
                    price: this.totalProductsPrice
                },
                {
                    label: 'BTW (21%)',
                    price: this.totalTax
                }
            ];
        }

        get totalTax() {
            return this.totalProductsPrice * 0.21;
        }

        get totalPrice() {
            return this.totalProductsPrice + this.totalTax;
        }

        nextStep(validator) {
            validator.validate();
            if (validator.invalid) {
                return alertService.dangerMessage('Please fill all fields', null, { position: 'is-bottom' });
            }
            validator.reset();
        }

        previousStep() {
            this.$router.push({ name: 'incorporation-documents' });
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .box {
        padding: 5 * $margin-default;

        @include breakpoint-down(sm) {
            padding: 2 * $margin-default;
        }
    }

    hr {
        width: calc(100% + 100px);
        margin-left: -50px;

        @include breakpoint-down(sm) {
            width: calc(100% + 40px);
            margin-left: -20px;
        }
    }

    h1 {
        text-align: center;
    }

    /deep/ .checkbox {
        margin-bottom: 2 * $margin-default;
        display: flex;
        align-items: flex-start;

        a {
            margin: 0 $margin-default / 2;
        }

        span {
            display: block;

            &:first-child {
                margin-bottom: $margin-default / 2;
            }

            i {
                color: $color-blue;
                font-style: normal;
            }
        }
    }

    .overview-bookkeeper {
        margin: 3 * $margin-default $margin-default;
        display: flex;
        align-items: flex-start;

        h4 {
            color: $color-blue-darker;
            @include font-size($regular-font-sizes);
            @include fs-medium;
        }

        span {
            color: $color-blue-gray-02;
            margin-top: $margin-default / 2;
            display: block;
        }

        @include breakpoint-down(sm) {
            margin: 3 * $margin-default 0;
        }
    }

    .total {
        display: flex;
        justify-content: space-between;

        margin: 3 * $margin-default 4 * $margin-default 0 3 * $margin-default;

        @include breakpoint-down(sm) {
            margin: 3 * $margin-default 0;
        }
    }
</style>
