<template>
    <div>
        <div class="stepper-wrapper">
            <IncorporationStepper
                status="previous"
                :disabled="true"
                :steps="organization.data.previous"
            />
            <IncorporationStepper
                v-if="!isLastStep"
                status="current"
                :steps="[organization.data.current]"
                :start-index="organization.data.previous.length"
            />
            <IncorporationStepper
                v-else
                status="current"
                :disabled="true"
                :is-last-step="true"
                :steps="[{title: 'reno'}]"
                :start-index="organization.data.previous.length"
            />
            <IncorporationStepper
                status="next"
                :disabled="true"
                :steps="organization.data.next"
                :start-index="organization.data.previous.length + 1"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import IncorporationStepper from '@/components/Incorporation/components/IncorporationStepper.vue';

    @Component({
        components: { IncorporationStepper }
    })
    export default class ProcessTimeline extends Vue {
        @Prop() organization!: any;

        get isLastStep() {
            return !this.organization.data.next;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .stepper-wrapper {
        height: 300px;
        overflow: auto;
        padding: $margin-default 0 2 * $margin-default;
    }

    /deep/ .stepper {
        li {
            align-items: center;

            &:before {
                height: 97%;
                top: 20px;
                left: 18px;
            }
        }

        .stepper-grid {
            margin: 0;
        }

        .stepper-main-wrapper {
            display: none;
        }

        .stepper-header {
            padding: 0;

            * {
                font-size: 12px;
                line-height: 14px;
            }

            h3 {
                max-width: 60%;
            }

            .ui-icon {
                display: none;
            }
        }

        .header-extra {
            margin: 0;
        }

        .step-number, .step-number-current {
            transform: scale(.7);
            margin-left: -8px;
            margin-right: 5px;
        }

        .box {
            box-shadow: none;
        }
    }
</style>
