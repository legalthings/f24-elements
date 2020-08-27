<template>
    <UiCollapsibleGrid
        ref="grid-block"
        :active="active"
        :disabled="true"
        :height="false"
        :header="false"
        :exclude="false"
    >
        <template #menu>
            <UiCollapsibleMenu
                :menu-items="menuItems"
                :current-index="activeTab"
            />
        </template>

        <template #content>
            <ValidationObserver
                ref="observer"
                v-slot="validator"
                class="field"
                tag="form"
            >
                <div v-if="activeTab === 0">
                    <h3 class="page-block-content-title">
                        {{ menuItems[0].label }}
                    </h3>

                    <p class="mt-5">
                        {{ $t('FUNNEL.DETAILS.NAME_DESCRIPTION') }}
                    </p>
                    <div class="mg-top-30">
                        <UiInputText
                            v-model="value.companyName"
                            :inline="true"
                            :label="$t('FUNNEL.DETAILS.NAME_QUESTION')"
                            :tooltip="$t('FUNNEL.DETAILS.NAME_TOOLTIP')"
                            rules="required|noBvOnName"
                        />

                        <UiTooltip
                            :tooltip="$t('FUNNEL.DETAILS.ADDRESS_TOOLTIP')"
                            class="mt-6"
                        >
                            <strong>
                                {{ $t('FUNNEL.DETAILS.ADDRESS') }}
                            </strong>
                        </UiTooltip>
                        <p class="mt-3">
                            {{ $t('FUNNEL.DETAILS.ADDRESS_DESCRIPTION') }}
                        </p>

                        <UiInputSelectbox
                            v-if="availableAddresses.length > 0"
                            v-model="value.bvAddressFromShareholder"
                            :items="availableAddresses"
                            :placeholder="$t('USER.SELECT_OPTION')"
                            class="mt-3"
                            expanded
                        />
                        <UiInputAddress
                            v-else
                            v-model="value"
                            class="mt-5"
                        />
                    </div>
                </div>

                <div v-if="activeTab === 1">
                    <h3 class="page-block-content-title">
                        {{ menuItems[1].label }}
                    </h3>
                    <p class="mt-5">
                        {{ $t('FUNNEL.DETAILS.ACTIVITY_DESCRIPTION') }}
                    </p>

                    <UiInputSelectbox
                        v-model="value.activity"
                        :items="activitiesOptions"
                        :placeholder="$t('USER.SELECT_OPTION')"
                        :label="$t('FUNNEL.DETAILS.ACTIVITY')"
                        class="mg-top-40"
                        expanded
                    />

                    <div v-if="['PRODUCTS','PRODUCTS_SERVICES'].includes(value.activity)">
                        <UiInputText
                            v-model="value.deliveries"
                            :label="$t('FUNNEL.DETAILS.DELIVERIES_QUESTION', [$t('FUNNEL.DETAILS.ACTIVITY_' + value.activity).toLowerCase()])"
                            type="textarea"
                            class="mg-top-40"
                        />

                        <UiInputSelectbox
                            v-model="value.sellTo"
                            :label="$t('FUNNEL.DETAILS.SELL_TO_QUESTION', [$t('FUNNEL.DETAILS.ACTIVITY_' + value.activity).toLowerCase()])"
                            :placeholder="$t('USER.SELECT_OPTION')"
                            :items="sellToOptions"
                            class="mg-top-40"
                            expanded
                        />

                        <UiInputRadio
                            v-model="value.import"
                            :label="$t('FUNNEL.DETAILS.IMPORT_QUESTION')"
                            :tooltip="$t('FUNNEL.DETAILS.IMPORT_QUESTION_TOOLTIP')"
                            :inline="true"
                            class="mg-top-40"
                        />

                        <UiInputRadio
                            v-model="value.export"
                            :label="$t('FUNNEL.DETAILS.EXPORT_QUESTION')"
                            :tooltip="$t('FUNNEL.DETAILS.EXPORT_QUESTION_TOOLTIP')"
                            :inline="true"
                            class="mg-top-30"
                        />

                        <UiInputRadio
                            v-if="value.activity === 'PRODUCTS_SERVICES'"
                            v-model="value.hotelLeisure"
                            :label="$t('FUNNEL.DETAILS.HOTEL_LEISURE_QUESTION')"
                            :inline="true"
                            class="mg-top-30"
                        />
                    </div>

                    <div v-if="value.activity === 'SERVICES'">
                        <UiInputText
                            v-model="value.deliveries"
                            :label="$t('FUNNEL.DETAILS.DELIVERIES_QUESTION', [$t('FUNNEL.DETAILS.ACTIVITY_' + value.activity).toLowerCase()])"
                            type="textarea"
                            class="mg-top-40"
                        />

                        <UiInputRadio
                            v-model="value.mediate"
                            :label="$t('FUNNEL.DETAILS.MEDIATE_QUESTION')"
                            :inline="true"
                            class="mg-top-30"
                        />
                        <UiInputRadio
                            v-model="value.taxi"
                            :label="$t('FUNNEL.DETAILS.TAXI_QUESTION')"
                            :inline="true"
                            class="mg-top-30"
                        />
                    </div>

                    <UiInputText
                        v-model="value.otherActivities"
                        :label="$t('FUNNEL.DETAILS.OTHER_ACTIVITIES_QUESTION')"
                        type="textarea"
                        class="mg-top-30"
                        rules=""
                    />
                </div>

                <b-notification
                    :active.sync="canContinue.hasError"
                    :closable="false"
                    type="is-danger"
                >
                    <span>
                        {{ $t('FUNNEL.SHAREHOLDER.CANT_CONTINUE') }}
                    </span>
                    <span
                        v-for="(reason, index) in canContinue.reasons"
                        :key="index"
                    >
                        {{ $t('FUNNEL.SHAREHOLDER.' + reason) }}
                    </span>
                </b-notification>

                <FunnelNavigation
                    :validator="validator"
                    :can-continue="canContinue"
                    :has-previous="hasPrevious"
                    @prev="previousStep(validator)"
                    @next="nextStep(validator)"
                />
            </ValidationObserver>
        </template>
    </UiCollapsibleGrid>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiCollapsibleGrid from '@/components/Global/UiCollapsible/UiCollapsibleGrid.vue';
    import UiCollapsibleMenu from '@/components/Global/UiCollapsible/UiCollapsibleMenu.vue';
    import UiInputSelectbox from '@/components/Global/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import i18n from '@/dependencies/i18n';
    import alertService from '@/services/alert.service';
    import formOptionsService from '@/services/form-options-service';
    import UiInputAddress from '@/components/Global/UiFormInputs/UiInputAddress/UiInputAddress.vue';
    import FunnelNavigation from '@/components/Funnel/IncorporationFunnel/components/FunnelNavigation.vue';
    import { FunnelShareholderTypes } from '@/types/funnel.types';
    import UiTooltip from '@/components/Global/UiTooltip/UiTooltip.vue';
    import UiInputRadio from '@/components/Global/UiFormInputs/UiInputRadio/UiInputRadio.vue';
    import FunnelService from '@/services/funnel-service';

    @Component({
        components: {
            UiInputRadio,
            UiTooltip,
            FunnelNavigation,
            UiInputAddress,
            UiInputText,
            UiInputSelectbox,
            UiCollapsibleMenu,
            UiCollapsibleGrid
        }
    })
    export default class ActivitiesBlock extends Vue {
        @Prop() data!: any;
        @Prop() active!: boolean;
        @Prop() value!: FunnelShareholderTypes;
        @Prop() index!: any;
        @Prop() helper!: FunnelService;

        $parent: any;

        $refs!: {
            $el: any;
            observer: any;
        };

        get availableAddresses() {
            return this.helper.shareholders.filter(s => {
                const membersInNetherlands = s.members.filter(m => m.netherlandsResidence);
                return s.shareholderType === 'holding' || (s.shareholderType === 'natural' && membersInNetherlands.length > 0);
            }).map(ss => ({ name: ss.displayName, id: ss.displayName }));
        }

        get menuItems() {
            return [
                {
                    label: i18n.t('FUNNEL.DETAILS.NAME_BV') as string
                },
                {
                    label: i18n.t('FUNNEL.DETAILS.ACTIVITIES_BV') as string
                }
            ];
        }

        get activeTab() {
            return this.data.progress.childIndex;
        }

        get canContinue() {
            const reasons: Array<string> = [];
            const hasError = false;
            return { reasons, hasError };
        }

        get hasPrevious() {
            return true;
        }

        get activitiesOptions() {
            return [
                {
                    name: i18n.t('FUNNEL.DETAILS.ACTIVITY_PRODUCTS'),
                    id: 'PRODUCTS'
                },
                {
                    name: i18n.t('FUNNEL.DETAILS.ACTIVITY_SERVICES'),
                    id: 'SERVICES'
                },
                {
                    name: i18n.t('FUNNEL.DETAILS.ACTIVITY_PRODUCTS_SERVICES'),
                    id: 'PRODUCTS_SERVICES'
                },
                {
                    name: i18n.t('FUNNEL.DETAILS.ACTIVITY_HOLDING_ACTIVITIES'),
                    id: 'HOLDING_ACTIVITIES'
                }
            ];
        }

        get sellToOptions() {
            return [
                {
                    name: i18n.t('FUNNEL.DETAILS.B2C'),
                    id: 'B2C'
                },
                {
                    name: i18n.t('FUNNEL.DETAILS.B2B'),
                    id: 'B2B'
                },
                {
                    name: i18n.t('FUNNEL.DETAILS.BOTH'),
                    id: 'BOTH'
                }
            ];
        }

        nextStep(validator: any) {
            validator.validate();
            if (validator.invalid || !this.canContinue) {
                setTimeout(() => formOptionsService.scrollToError(), 100);
                return alertService.dangerMessage('Please fill all fields', null, { position: 'is-bottom' });
            }
            validator.reset();

            if (this.menuItems.length > this.activeTab + 1) {
                this.data.progress.childIndex++;
                const top = this.$refs['grid-block'].$el.offsetTop;
                formOptionsService.scrollToPosition(top);
            } else {
                this.$parent.nextStep();
            }
        }

        previousStep() {
            if (this.data.progress.childIndex > 0) {
                this.data.progress.childIndex--;
                const top = this.$refs['grid-block'].$el.offsetTop;
                formOptionsService.scrollToPosition(top);
            } else {
                this.$parent.previousStep();
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .notification {
        margin-top: 3 * $margin-default;

        span {
            display: flex;

            &:not(:first-child) {
                margin-top: $margin-default;
            }
        }
    }

    /deep/ .shareholder-jointly {
        border: 2px solid $color-gray-20;
        padding: $margin-default * 2;
        border-radius: $border-radius / 2;
    }
</style>
