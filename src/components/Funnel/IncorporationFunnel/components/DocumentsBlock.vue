<template>
    <div>
        <div class="header-content has-text-centered mg-tb-40">
            <h1 class="is-size-3">
                {{ $t('FUNNEL.DOCUMENTS.PAGE_TITLE') }}
            </h1>
        </div>

        <UiCollapsibleGrid
            ref="grid-block"
            :active="true"
            :disabled="true"
            :height="false"
            :header="false"
        >
            <template #menu>
                <UiCollapsibleMenu
                    :menu-items="menuItems"
                    :current-index="data.progress.childIndex"
                />
            </template>

            <template #content>
                <div v-if="data.progress.childIndex === 0">
                    <h3 class="page-block-content-title">
                        {{ menuItems[0].label }}
                    </h3>

                    <div class="columns mt-5">
                        <div class="column is-8">
                            <p>
                                {{ $t('FUNNEL.DOCUMENTS.CONCEPT_DESCRIPTION_1') }}
                            </p>
                            <p class="mt-5">
                                {{ $t('FUNNEL.DOCUMENTS.CONCEPT_DESCRIPTION_2') }}
                            </p>

                            <a
                                href="https://shop.firm24.com/assets/concept.pdf"
                                target="_blank"
                                class="mg-top-30 concept-link"
                            >
                                <i class="fas fa-search" />
                                {{ $t('FUNNEL.DOCUMENTS.CONCEPT_CHECK') }}
                            </a>
                        </div>
                        <figure class="column">
                            <img
                                src="/img/content/documents/concept.png"
                                :alt="$t('FUNNEL.DOCUMENTS.PAGE_TITLE')"
                            >
                        </figure>
                    </div>
                </div>

                <div
                    v-if="data.progress.childIndex === 1"
                    class="dga-salary"
                    :class="{'has-package': hasAnyMemberPackage}"
                >
                    <UiRibbon
                        class="most-chosen is-hidden-mobile"
                    >
                        <span>
                            69%
                        </span>
                        <span>
                            {{ $t('FUNNEL.DOCUMENTS.CHOSE_THIS_PACKAGE') }}
                        </span>
                    </UiRibbon>
                    <h3 class="page-block-content-title">
                        {{ menuItems[1].label }}
                    </h3>
                    <p class="mt-6">
                        {{ $t('FUNNEL.DOCUMENTS.DGA_DESCRIPTION') }}
                    </p>

                    <ul
                        class="usp-list"
                        :class="{'is-active': true}"
                    >
                        <li>
                            {{ $t('FUNNEL.DOCUMENTS.USPS.USP_1') }}
                        </li>
                        <li>
                            {{ $t('FUNNEL.DOCUMENTS.USPS.USP_2') }}
                        </li>
                        <li>
                            {{ $t('FUNNEL.DOCUMENTS.USPS.USP_3') }}
                        </li>
                    </ul>

                    <div class="mt-5">
                        <b-field :label="$t('FUNNEL.DOCUMENTS.DGA_QUESTION')" />
                        <ul class="members mt-5">
                            <li
                                v-for="(member, i) in members"
                                :key="i"
                                :class="{'member-has-package': member.hasSalaryPackage}"
                            >
                                <b-switch
                                    v-model="member.hasSalaryPackage"
                                    type="is-success"
                                />
                                <div class="member-options">
                                    <p>
                                        <span class="member-name">
                                            {{ member.firstName }} {{ member.lastName }}
                                        </span>
                                        <span class="member-name-message">
                                            <span v-if="member.hasSalaryPackage">
                                                <strong>{{ $t('GLOBAL.TRUE') }}</strong>
                                                {{ $t('FUNNEL.DOCUMENTS.DGA_YES') }}
                                            </span>
                                            <span v-else>
                                                <strong>{{ $t('GLOBAL.FALSE') }}</strong>
                                                {{ $t('FUNNEL.DOCUMENTS.DGA_NO') }}
                                            </span>
                                        </span>
                                    </p>
                                    <span
                                        v-if="member.hasSalaryPackage"
                                        class="price"
                                    >
                                        <strong>€ 130</strong> <i>{{ $t('FUNNEL.DOCUMENTS.PER_YEAR') }}</i>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div v-if="data.progress.childIndex === 2">
                    <h3 class="page-block-content-title">
                        {{ menuItems[2].label }}
                    </h3>
                    <p class="mt-6">
                        Contracts here...
                    </p>
                </div>

                <FunnelNavigation
                    :has-previous="true"
                    @prev="previousStep"
                    @next="nextStep"
                />
            </template>
        </UiCollapsibleGrid>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import FunnelService from '@/services/funnel-service';
    import { FunnelShareholderMembers, FunnelStepDefinition } from '@/types/funnel.types';
    import UiCollapsibleGrid from '@/components/Global/UiCollapsible/UiCollapsibleGrid.vue';
    import UiCollapsibleMenu from '@/components/Global/UiCollapsible/UiCollapsibleMenu.vue';
    import FunnelNavigation from '@/components/Funnel/IncorporationFunnel/components/FunnelNavigation.vue';
    import i18n from '@/dependencies/i18n';
    import formOptionsService from '@/services/form-options-service';
    import BestSeller from '@/components/Global/BestSeller/BestSeller.vue';
    import UiRibbon from '@/components/Global/UiRibbon/UiRibbon.vue';

    @Component({
        components: { UiRibbon, BestSeller, FunnelNavigation, UiCollapsibleMenu, UiCollapsibleGrid }
    })
    export default class DocumentsBlock extends Vue {
        @Prop() data!: FunnelStepDefinition;
        @Prop() value!: any;
        @Prop() stepsDefinition;
        @Prop() helper!: FunnelService;

        $refs!: any;
        $parent!: any;

        get menuItems() {
            return [
                {
                    label: i18n.t('FUNNEL.DOCUMENTS.CONCEPT') as string
                },
                {
                    label: i18n.t('FUNNEL.DOCUMENTS.SALARY_PACKAGE') as string
                },
                {
                    label: i18n.t('FUNNEL.DOCUMENTS.SHAREHOLDER_PACKAGE') as string
                }
            ];
        }

        get hasAnyMemberPackage() {
            return this.members.some(m => (m.hasSalaryPackage));
        }

        get members(): Array<FunnelShareholderMembers> {
            return this.helper.shareholders.map(s => s.members).flat();
        }

        nextStep() {
            if (this.menuItems.length > this.data.progress.childIndex + 1) {
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

    .concept-link {
        display: block;
        margin-top: 2 * $margin-default;
    }

    $dga-margin: 8 * $margin-default;

    .dga-salary {
        position: relative;

        @include breakpoint-up(md) {
            margin-top: $dga-margin;

            &:before {
                background: url("~images/global/belastingdienst.svg") no-repeat;
                content: '';
                position: absolute;
                width: 160px;
                height: 160px;
                top: -$dga-margin - 40px;
                left: 45%;
            }
        }
    }

    .most-chosen {
        position: absolute;
        right: -100px;
        top: -$dga-margin - 40px;

        span:nth-child(1) {
            display: block;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 8px;
        }

        span:nth-child(2) {
            display: block;
        }
    }

    .usp-list {
        margin-top: 4 * $margin-default;
        display: flex;
        flex-direction: column;

        li {
            margin-bottom: $margin-default;
            position: relative;
            padding-left: 34px;

            &:before {
                content: '';
                width: 26px;
                height: 26px;
                position: absolute;
                left: 0;
                top: 2px;
                background-color: $color-red;
                mask-image: url("~icons/common/icon-close.svg");
                mask-repeat: no-repeat;

                .has-package & {
                    background-color: $color-green;
                    mask-image: url("~icons/common/icon-check.svg");
                }
            }
        }
    }

    .members {

        li {
            display: flex;
            margin-bottom: 2 * $margin-default;
            align-items: flex-start;
        }

        .member-options {
            flex: 1;
            display: flex;
            justify-content: space-between;

            .member-name-message {
                @include font-size($small-font-sizes);
                display: block;
                max-width: 80%;

                strong {
                    @include font-size($regular-font-sizes);
                }
            }
        }
    }

    .member-name {
        font-weight: bold;
        display: block;
        color: $color-red;

        .member-has-package & {
            color: $color-green;
        }
    }

    .price {

        * {
            color: $color-blue-darker;
        }

        i {
            font-style: normal;
            @include font-size($small-font-sizes);
        }
    }
</style>
