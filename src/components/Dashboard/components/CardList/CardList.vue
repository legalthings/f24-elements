<template>
    <div
        :class="{'has-action-points': organisation.actionPoints}"
        class="card-list"
    >
        <div class="box">
            <div class="header">
                <UiButton
                    :is-router="!organisation.isOldFunnel"
                    :url="organisation.url"
                >
                    <CardLogo :name="organisation.name" />
                </UiButton>
                <div class="header-title">
                    <h3>
                        {{ organisation.name }}
                        <CardActionPoints
                            class="is-hidden-mobile"
                            :action-points="organisation.actionPoints"
                            :label="false"
                        />
                    </h3>

                    <UiNameFlag
                        :color="organisation.statusLabel.toLowerCase()"
                        :name="$t('DASHBOARD.' + organisation.statusLabel)"
                    />
                </div>
            </div>
            <div class="list-content">
                <ul
                    v-if="!organisation.isOldFunnel"
                    class="organisation-info"
                >
                    <li
                        v-for="(info, index) in organisationInfo"
                        :key="index"
                    >
                        <span class="info-value">{{ info.value }}</span>
                    </li>
                </ul>
                <CardSteps
                    v-else
                    :action-points="organisation.actionPoints"
                    :current-step-title="organisation.currentStep.title"
                    :current-step="organisation.currentStepCount"
                    :total-steps="organisation.totalSteps"
                />
            </div>
            <div class="list-action">
                <CardActionPoints
                    v-if="organisation.actionPoints"
                    class="is-hidden-tablet"
                    :action-points="organisation.actionPoints"
                    :label="false"
                />
                <div class="list-action-button">
                    <UiIcon
                        v-if="organisation.canRemoveProcess"
                        class="remove-process"
                        icon="close"
                        color="red"
                        @click="$f24.dashboardService.removeProcess(organisation.id)"
                    />
                    <UiButton
                        :is-router="!organisation.isOldFunnel"
                        :url="organisation.url"
                    >
                        <UiIcon icon="arrow-right" />
                    </UiButton>
                </div>
            </div>

            <b-progress
                v-if="organisation.isOldFunnel && ($vmq.xs || $vmq.sm || $vmq.md)"
                class="mobile-step"
                :type="organisation.actionPoints ? 'is-danger': 'is-primary'"
                :value="organisation.currentStepCount * 10"
                size="is-small"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { OrganisationListTypes } from '@/types/organisation.types';
    import CardLogo from '@/components/Dashboard/components/CardLogo/CardLogo.vue';
    import CardSteps from '@/components/Dashboard/components/CardSteps/CardSteps.vue';
    import CardActionPoints from '@/components/Dashboard/components/CardActionPoints/CardActionPoints.vue';
    import UiButton from '@/components/Global/UiButton/UiButton.vue';
    import UiNameFlag from '@/components/Global/UiNameFlag/UiNameFlag.vue';
    import { convertToLocaleString } from '@/helpers/utility.helper';

    @Component({
        components: { UiNameFlag, UiButton, CardActionPoints, CardSteps, CardLogo }
    })
    export default class CardList extends Vue {
        @Prop() organisation!: OrganisationListTypes;

        organisationInfo = [
            {
                name: 'GLOBAL.TYPE',
                value: this.organisation.corporation_type
            },
            {
                name: 'DASHBOARD.NOMINAL_VALUE',
                value: this.shouldInclude(this.organisation.corporation_type) ? convertToLocaleString(this.organisation.total_shares_value) : '-'
            },
            {
                name: 'DASHBOARD.AMOUNT_SHARES',
                value: this.shouldInclude(this.organisation.corporation_type) ? this.organisation.total_shares_amount : '-'
            },
            {
                name: 'DASHBOARD.AMOUNT_SHAREHOLDERS',
                value: this.shouldInclude(this.organisation.corporation_type) ? this.getShareholders() : '-'
            }
        ];

        getShareholders() {
            return this.organisation.shareholders?.length === 0 ? 0 : this.organisation.shareholders?.length - 1;
        }

        shouldInclude(type: string) {
            const include = ['bv', 'nv', 'holding', 'stichting'];
            return include.includes(type);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .card-list {
        justify-content: center;
        align-content: center;

        &.is-draft {

            @include breakpoint-down(md) {
                .header-title, .list-action {
                    margin-bottom: $margin-default;
                }
            }
        }
    }

    .box {
        display: flex;
        overflow: hidden;
        position: relative;
        align-items: center;
        justify-content: space-between;
        padding: $margin-default 0;

        &:before {
            top: 0;
            left: 0;
            width: 55px;
            content: '';
            height: 100%;
            position: absolute;
            background: url("~images/global/organisation-gallery-blue-bg.svg") no-repeat, linear-gradient(to right, $color-blue -156%, $color-blue-darker 89%);
            background-size: cover;

            .is-draft & {
                background: url("~images/global/organisation-gallery-gray-bg.svg"), linear-gradient(176deg, rgba($color-blue-gray-02, .3) 9%, rgba($color-blue-gray-03, .3) 98%);
                background-size: cover;
            }

            @include breakpoint-up(md) {
                width: 83px;
            }
        }
    }

    .header {
        display: flex;
        position: relative;
        align-items: center;

        @include breakpoint-up(md) {
            flex: 2.4;
        }

        .logo {
            margin: 0 $margin-default;
            min-width: 63px;
            max-width: 63px;
            height: 63px;

            @include breakpoint-up(md) {
                margin: 0 2 * $margin-default;
                min-width: 94px;
                max-width: 94px;
                height: 94px;
            }
        }

        .header-title {
            display: flex;
            align-items: center;

            @include breakpoint-up(md) {
                align-items: flex-start;
                flex-direction: column;
            }

            .action-points {
                margin-left: $margin-default;
            }
        }

        h3 {
            @include font-size($big-font-sizes);
            display: flex;
            align-items: center;
            @include breakpoint-up(md) {
                margin-bottom: $margin-default;
            }
        }
    }

    .list-content {
        text-align: center;
        display: flex;

        @include breakpoint-up(md) {
            flex: 3;
        }

        h3 {
            @include fs-medium;
        }
    }

    .organisation-info {
        display: flex;
        list-style: none;
        align-items: center;
        flex: 1;

        @include breakpoint-down(md) {
            display: none;
        }

        li {
            @include font-size($medium-font-sizes);
            display: flex;
            flex: 1;
            justify-content: space-between;
        }

        .info-name {
            color: $color-blue-gray-02;
            font-size: 14px;
        }
    }

    .list-action {
        display: flex;
        align-items: center;
        min-width: 50px;

        .list-action-button {
            border: none;
            outline: none;
            cursor: pointer;
            padding: 0 $margin-default 0 0;
            background: none;
            display: flex;

            @include breakpoint-up(md) {
                padding: 2 * $margin-default;
            }
        }

        .has-action-points & {
            .ui-icon {
                margin-top: 4px;
                fill: $color-red;
            }
        }
    }

    .mobile-step {
        width: calc(100% - 100px);
        left: 84px;
        bottom: 16px;
        position: absolute;

        /deep/ .progress.is-small {
            height: 5px !important;
        }
    }

    .remove-process {
        margin-right: $margin-default
    }
</style>
