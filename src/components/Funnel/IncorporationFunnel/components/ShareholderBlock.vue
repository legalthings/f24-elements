<template>
    <UiCollapsibleGrid
        ref="grid-block"
        :active="active"
        :disabled="true"
        :height="false"
        :exclude="canExclude"
        @excludeStep="excludeStep"
    >
        <template #header>
            <UiShareholderType
                :type="value.shareholderType"
                size="30"
            />
            {{ $t('FUNNEL.SHAREHOLDER.TAB_TITLE') }} ({{ index + 1 }})
        </template>

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

                    <div class="mg-top-50">
                        <UiInputRadio
                            v-model="value.shareholderType"
                            :inline="true"
                            :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_TYPE_QUESTION')"
                            :items="shareholderOptions.shareholderType"
                            :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_TYPE_TOOLTIP')"
                        />

                        <!-- SHAREHOLDER NATURAL PERSON -->
                        <div
                            v-if="value.shareholderType === 'natural'"
                            class="mg-top-40"
                        >
                            <ShareholderGeneralInformation
                                v-for="(m, index) in value.members"
                                :key="index"
                                v-model="value.members[index]"
                                :length="value.members.length"
                                :index="index"
                                :shareholder-type="value.shareholderType"
                                prefix="primaryShareholder"
                                class="mg-top-50"
                            />
                        </div>

                        <!-- SHAREHOLDER HOLDING -->
                        <div
                            v-if="value.shareholderType === 'holding'"
                            class="mg-top-40"
                        >
                            <UiInputText
                                v-model="value.holdingName"
                                :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_HOLDING_NAME_QUESTION')"
                                :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_HOLDING_NAME_TOOLTIP')"
                            />

                            <UiInputSelectbox
                                v-model="value.dutchBv"
                                :items="dutchBvOptions"
                                :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_DUTCH_BV_QUESTION')"
                                :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_DUTCH_BV_TOOLTIP')"
                                :placeholder="$t('USER.SELECT_OPTION')"
                                expanded
                                class="mg-top-40"
                            />

                            <UiInputText
                                v-model="value.holdingKvkNumber"
                                :inline="true"
                                :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_HOLDING_KVK_NUMBER_QUESTION')"
                                :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_HOLDING_KVK_NUMBER_TOOLTIP')"
                                class="mg-top-40"
                                rules="kvk"
                                max="8"
                            />

                            <UiInputRadio
                                v-model="value.holdingDirectorRepresents"
                                :inline="true"
                                :items="shareholderHoldingRepresentsOptions"
                                :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_HOLDING_DIRECTOR_REPRESENTS_QUESTION')"
                                :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_HOLDING_DIRECTOR_REPRESENTS_TOOLTIP')"
                                class="mg-top-50"
                            />

                            <template v-if="value.holdingDirectorRepresents">
                                <ShareholderGeneralInformation
                                    v-for="(m, index) in value.members"
                                    :key="index"
                                    v-model="value.members[index]"
                                    :length="value.members.length"
                                    :index="index"
                                    :shareholder-type="value.shareholderType"
                                    prefix="primaryShareholder"
                                    class="mg-top-50"
                                />
                            </template>
                        </div>
                    </div>
                </div>

                <div v-if="activeTab === 1">
                    <h3 class="page-block-content-title">
                        {{ menuItems[1].label }}
                    </h3>
                    <p class="mt-6">
                        <strong>
                            {{ $t('FUNNEL.SHAREHOLDER.OFFICIAL_DETAILS') }}
                        </strong>
                    </p>
                    <p class="mt-2">
                        {{ $t('FUNNEL.SHAREHOLDER.OFFICIAL_DETAILS_DESCRIPTION') }}
                    </p>

                    <ShareholderPersonalInfo
                        v-for="(m, index) in value.members"
                        :key="index"
                        v-model="value.members[index]"
                        :length="value.members.length"
                        :index="index"
                        prefix="primaryShareholder"
                        class="mg-top-30"
                    />
                </div>

                <div v-if="activeTab === 2">
                    <h3 class="page-block-content-title">
                        {{ menuItems[2].label }}
                    </h3>
                    <p class="mt-6">
                        {{ $t('FUNNEL.SHAREHOLDER.CONTACT_DETAILS_DESCRIPTION') }}
                    </p>

                    <ShareholderContactDetails
                        v-for="(m, index) in value.members"
                        :key="index"
                        v-model="value.members[index]"
                        :length="value.members.length"
                        :index="index"
                        prefix="primaryShareholder"
                        class="mg-top-30"
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
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import UiCollapsibleGrid from '@/components/Global/UiCollapsible/UiCollapsibleGrid.vue';
    import UiCollapsibleMenu from '@/components/Global/UiCollapsible/UiCollapsibleMenu.vue';
    import UiInputSelectbox from '@/components/Global/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';
    import UiInputRadio from '@/components/Global/UiFormInputs/UiInputRadio/UiInputRadio.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import i18n from '@/dependencies/i18n';
    import alertService from '@/services/alert.service';
    import ShareholderGeneralInformation
        from '@/components/Funnel/IncorporationFunnel/components/ShareholderGeneralInformation.vue';
    import formOptionsService from '@/services/form-options-service';
    import UiInputDatepicker from '@/components/Global/UiFormInputs/UiInputDatepicker/UiInputDatepicker.vue';
    import UiInputCheckbox from '@/components/Global/UiFormInputs/UiInputCheckbox/UiInputCheckbox.vue';
    import UiInputAddress from '@/components/Global/UiFormInputs/UiInputAddress/UiInputAddress.vue';
    import FunnelNavigation from '@/components/Funnel/IncorporationFunnel/components/FunnelNavigation.vue';
    import UiShareholderType from '@/components/Global/UiShareholderType/UiShareholderType.vue';
    import { FunnelShareholderTypes, HoldingCompanyTypeEnum } from '@/types/funnel.types';
    import ShareholderPersonalInfo
        from '@/components/Funnel/IncorporationFunnel/components/ShareholderPersonalInfo.vue';
    import ShareholderContactDetails
        from '@/components/Funnel/IncorporationFunnel/components/ShareholderContactDetails.vue';

    @Component({
        components: {
            ShareholderContactDetails,
            ShareholderPersonalInfo,
            UiShareholderType,
            FunnelNavigation,
            UiInputAddress,
            UiInputCheckbox,
            UiInputDatepicker,
            ShareholderGeneralInformation,
            UiInputText,
            UiInputRadio,
            UiInputSelectbox,
            UiCollapsibleMenu,
            UiCollapsibleGrid
        }
    })
    export default class ShareholderBlock extends Vue {
        @Prop() data!: any;
        @Prop() active!: boolean;
        @Prop() value!: FunnelShareholderTypes;
        @Prop() index!: any;

        $parent: any;

        $refs!: {
            $el: any;
            observer: any;
        };

        get menuItems() {
            return [
                {
                    label: i18n.t('FUNNEL.SHAREHOLDER.TAB_GENERAL_INFORMATION') as string
                },
                {
                    label: i18n.t('FUNNEL.SHAREHOLDER.TAB_GENERAL_PERSONAL_DETAILS') as string
                },
                {
                    label: i18n.t('FUNNEL.SHAREHOLDER.TAB_GENERAL_CONTACT_DETAILS') as string
                }
            ];
        }

        get canContinue() {
            const reasons: Array<string> = [];
            let hasError = false;

            const dutchOrEnglish = this.value.members && this.value.members.some(m => this.$f24.isFalseAndNotUndefined(m.englishLanguage));
            if (dutchOrEnglish) {
                reasons.push('NOT_ENGLISH_SPEAKER');
                hasError = true;
            }

            const postalAddress = this.value.members && this.value.members.some(m => (m.netherlandsResidence === 'POSTAL_ADDRESS'));
            if (postalAddress) {
                reasons.push('ONLY_POSTAL_CODE');
                hasError = true;
            }

            const signInNetherlands = this.value.members && this.value.members.some(m => this.$f24.isFalseAndNotUndefined(m.signInNetherlands));
            if (signInNetherlands) {
                reasons.push('ONLY_POSTAL_CODE');
                hasError = true;
            }

            const countryResidence = this.value.members && this.value.members.some(m => (formOptionsService.getHighRiskCountryById(m.countryResidence)));
            if (countryResidence) {
                hasError = true;
            }

            if (this.value.dutchBv === HoldingCompanyTypeEnum.FoundationStak) {
                reasons.push('SHAREHOLDER_DUTCH_BV_ERROR_FOUNDATION');
                hasError = true;
            }

            if (this.value.dutchBv === HoldingCompanyTypeEnum.Foreign) {
                reasons.push('SHAREHOLDER_DUTCH_BV_ERROR_FOREIGN');
                hasError = true;
            }

            return { reasons, hasError };
        }

        get activeTab() {
            return this.data.progress.childIndex;
        }

        get hasPrevious() {
            return this.data.progress.parentIndex !== 0 || this.activeTab !== 0;
        }

        get canExclude() {
            return this.data.steps.filter(s => s.slug === 'shareholder').length > 1;
        }

        get dutchBvOptions() {
            return [
                {
                    name: i18n.t('GLOBAL.TRUE'),
                    id: HoldingCompanyTypeEnum.Yes
                },
                {
                    name: i18n.t('FUNNEL.SHAREHOLDER.SHAREHOLDER_DUTCH_BV_OPTION_1'),
                    id: HoldingCompanyTypeEnum.FoundationStak
                },
                {
                    name: i18n.t('FUNNEL.SHAREHOLDER.SHAREHOLDER_DUTCH_BV_OPTION_2'),
                    id: HoldingCompanyTypeEnum.Foreign
                }
            ];
        }

        get shareholderHoldingRepresentsOptions() {
            return [
                {
                    name: i18n.t('FUNNEL.SHAREHOLDER.SHAREHOLDER_HOLDING_DIRECTOR_REPRESENTS_OPTION_1'),
                    id: 'SOLELY'
                },
                {
                    name: i18n.t('FUNNEL.SHAREHOLDER.SHAREHOLDER_HOLDING_DIRECTOR_REPRESENTS_OPTION_2'),
                    id: 'JOINTLY'
                }
            ];
        }

        get shareholderOptions() {
            return {
                shareholderType: [
                    {
                        name: i18n.t('FUNNEL.SHAREHOLDER.SHAREHOLDER_TYPE_OPTION_1'),
                        id: 'natural'
                    },
                    {
                        name: i18n.t('FUNNEL.SHAREHOLDER.SHAREHOLDER_TYPE_OPTION_2'),
                        id: 'holding'
                    }
                ]
            };
        }

        get netherlandsResidenceOptions() {
            return [
                {
                    name: i18n.t('GLOBAL.TRUE'),
                    id: true
                },
                {
                    name: i18n.t('GLOBAL.FALSE'),
                    id: false
                },
                {
                    name: i18n.t('FUNNEL.SHAREHOLDER.SHAREHOLDER_NETHERLANDS_RESIDENCE_OPTION'),
                    id: 'POSTAL_ADDRESS'
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
            if (this.activeTab > 0) {
                this.data.progress.childIndex--;
                const top = this.$refs['grid-block'].$el.offsetTop;
                formOptionsService.scrollToPosition(top);
            } else {
                this.$parent.previousStep();
            }
        }

        excludeStep() {
            this.$parent.removeShareholder(this.index);
        }

        // This is for clean the entire block when shareholderType is changed
        @Watch('value.shareholderType')
        onChangeShareholderType(v) {
            const members = [
                {
                    type: 'primary',
                    address: {}
                }
            ];

            this.$refs.observer.reset();
            this.$emit('input', {
                slug: 'shareholder',
                shareholderType: v,
                amountOfShares: 60,
                isDirector: false,
                members
            });
        }

        // This is for clean the entire secondaryShareholder Holding director representing is changed
        @Watch('value.holdingDirectorRepresents')
        onChangeHoldingDirectorRepresents(v) {
            if (!v) return;
            if (v === 'JOINTLY') {
                this.value.members.push({ type: 'secondary', address: {} });
            } else {
                this.value.members.splice(1, 1);
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
