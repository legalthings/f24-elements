<template>
    <div class="card-gallery">
        <div class="box">
            <div class="header">
                <CardLogo :name="organisation.name" />

                <!-- TODO This is for notifications -->
                <CardActionPoints
                    v-if="organisation.actionPoints"
                    :action-points="organisation.actionPoints"
                />
                <UiIcon
                    v-if="organisation.canRemoveProcess"
                    class="remove-process"
                    icon="close"
                    color="white"
                    @click="$f24.dashboardService.removeProcess(organisation.id)"
                />
            </div>
            <div class="gallery-content">
                <h3>
                    {{ organisation.name }}
                </h3>
                <UiNameFlag
                    :color="organisation.statusLabel.toLowerCase()"
                    :name="$t('DASHBOARD.' + organisation.statusLabel)"
                />
                <ul
                    v-if="!organisation.isOldFunnel"
                    class="organisation-info"
                >
                    <li
                        v-for="(info, index) in organisationInfo"
                        :key="index"
                    >
                        <span class="info-name">{{ $t(info.name) }}</span>
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

                <div class="gallery-action">
                    <!-- TODO This is here until we have incorporation's inside the new platform -->
                    <UiButton
                        v-if="organisation.isOldFunnel"
                        :is-router="false"
                        class="list-action-button"
                        :url="link"
                    >
                        <b-button
                            outlined
                            rounded
                            type="is-info is-padding-small"
                        >
                            {{ $t('DASHBOARD.PROCEED') }}
                        </b-button>
                    </UiButton>
                    <b-button
                        v-else
                        tag="router-link"
                        :to="link"
                        outlined
                        rounded
                        type="is-info is-padding-small"
                    >
                        {{ $t('DASHBOARD.MANAGE_THIS_COMPANY') }}
                    </b-button>
                </div>
            </div>
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
    export default class CardGallery extends Vue {
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

        get link() {
            if (this.organisation.scenario === 'bv-opheffen') {
                const url = new URL(`${process.env.VUE_APP_LEGACY_URL}processes/${this.organisation.id}/?hash=${this.organisation.legacySession}`);
                return url.toString();
            }
            if (this.organisation.state !== 'running') {
                return { name: 'organization', params: { organizationId: this.organisation.id } };
            }
            if (this.organisation.isOldFunnel) {
                const scenarioUrl = this.organisation.scenario === 'start-incorporation-firm24-funnel' ? 'oprichting' : this.organisation.scenario === 'start-opheffing-firm24-funnel' ? 'opheffing' : 'inschrijving';
                const url = new URL(`${process.env.VUE_APP_FUNNEL_URL}${scenarioUrl}/${this.organisation.id}/?session=${this.organisation.session}&continue=true`);
                return url.toString();
            }
            return { name: 'incorporation', params: { incorporationId: this.organisation.id } };
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .side-padding {
        padding: 2 * $margin-default;
    }

    .card-gallery {
        padding: 0 $margin-default;
        justify-content: center;
        align-content: center;
        min-height: 480px;
    }

    .box {
        overflow: hidden;
        position: relative;
        padding: 0 0 10 * $margin-default;
        height: 100%;

        &:before {
            left: 0;
            top: 0;
            right: 0;
            content: '';
            height: 152px;
            position: absolute;
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
            background: url("~images/global/organisation-gallery-blue-bg.svg") no-repeat, linear-gradient(to right, $color-blue -156%, $color-blue-darker 89%);
            background-size: cover;

            .is-draft & {
                background: url("~images/global/organisation-gallery-gray-bg.svg") no-repeat, linear-gradient(176deg, rgba($color-blue-gray-02, .3) 9%, rgba($color-blue-gray-03, .3) 98%);
                background-size: cover;
            }
        }

        .is-draft & {
            padding-bottom: 0;
        }
    }

    .header {
        display: flex;
        position: relative;
        justify-content: center;
        margin-top: 2 * $margin-default;

        .action-points {
            position: absolute;
            top: -10px;
            left: 10px;
        }
    }

    .logo {
        width: 170px;
        height: 170px;
        @extend .side-padding;
    }

    .gallery-content {
        margin-top: 3 * $margin-default;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            @include fs-medium;
            margin-bottom: $margin-default;
            max-width: 90%;
        }
    }

    .organisation-info {
        @extend .side-padding;
        list-style: none;
        margin-top: 3 * $margin-default;
        width: 100%;

        li {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
        }

        .info-value {
            @include font-size($regular-font-sizes);
            @include fs-medium;
        }

        .info-name {
            color: $color-blue-gray-02;
            font-size: 14px;
        }
    }

    .gallery-action {
        text-align: center;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        margin-top: $margin-default;
        padding: 3 * $margin-default 0;
        border-top: 1px solid rgba($color-blue-gray-02, .2);
    }

    /deep/ .step-bar {
        max-width: 84%;
        margin: 2* $margin-default auto;

        @include breakpoint-down(md) {
            display: block;
        }

        .step-status {
            flex-direction: column;
            min-width: auto;
            align-items: center;

            p {
                margin-bottom: $margin-default;
            }
        }
    }

    .remove-process {
        position: absolute;
        top: -5px;
        right: 15px;
        cursor: pointer;

        &:hover {
            /deep/ {
                fill: $color-red;
            }

        }
    }

</style>
