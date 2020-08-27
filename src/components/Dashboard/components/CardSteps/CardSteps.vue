<template>
    <div class="step-bar">
        <div class="step-status">
            <p>
                {{ percentage }}
            </p>
            <div class="step-progress">
                <b-progress
                    :type="actionPoints ? 'is-danger': 'is-primary'"
                    :value="barProgress"
                    size="is-small"
                />
            </div>
        </div>
        <p>
            {{ currentStepTitle }}
        </p>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { OrganisationListInfoTypes } from '@/types/organisation.types';

    @Component
    export default class CardSteps extends Vue {
        @Prop() currentStepTitle!: Array<OrganisationListInfoTypes>;
        @Prop() currentStep!: number;
        @Prop() totalSteps!: number;
        @Prop() actionPoints!: number;

        get percentage() {
            if (isNaN(this.totalSteps) || isNaN(this.currentStep)) return '-';
            return `${this.barProgress} %`;
        }

        get barProgress() {
            return Number((this.currentStep / this.totalSteps * 100).toFixed());
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .step-bar {

        @include breakpoint-down(md) {
            display: none;
        }

        .step-status {
            display: flex;
            justify-content: flex-start;
            min-width: 500px;
            margin-bottom: $margin-default;
            align-items: center;

            /deep/ .progress.is-small {
                height: 8px !important;

                &::-webkit-progress-bar {
                    background: $color-blue-gray-01;
                }
            }

            p {
                color: $color-blue-gray-02;
            }
        }

        p {
            text-align: left;
            margin-right: $margin-default;
            @include font-size($small-font-sizes);
        }

        .step-progress {
            flex-grow: 3;
            display: block;
        }
    }
</style>
