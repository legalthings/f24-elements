<template>
    <ul
        class="stepper"
        :class="[status,{'last-step':isLastStep}]"
    >
        <li
            v-for="(step, index) in steps"
            :key="index"
        >
            <div
                v-if="status !== 'current'"
                class="step-number"
            >
                {{ index + startIndex + 1 }}
            </div>
            <div
                v-else
                class="step-number-current"
            >
                {{ index + startIndex + 1 }}
                <UiCircularProgress
                    :radius="28"
                    :progress="100"
                    :stroke="3"
                />
            </div>
            <UiCollapsible
                :disabled="disabled"
                :active="active"
            >
                <template #header>
                    <span>
                        {{ step.title }}
                    </span>
                    <UiIcon
                        v-if="status === 'previous'"
                        icon="check-simple"
                        size="20"
                        color="green"
                    />
                </template>
                <template
                    v-if="disabled"
                    #header-extra
                >
                    <strong>{{ $f24.formatDate(active ? step.activation_date: step.response_date) }}</strong>
                </template>
                <template #extra-actions>
                    <strong>{{ $f24.formatDate(active ? step.activation_date: step.response_date) }}</strong>
                </template>
                <template
                    v-if="!disabled"
                    #content
                >
                    <div v-html="step.description" />
                    <b-button
                        v-if="status === 'current' && hasDeepView(step.key)"
                        tag="router-link"
                        :to="{name:'incorporation-step-details'}"
                        type="is-primary is-padding-small"
                        rounded
                    >
                        Step details
                    </b-button>
                </template>
            </UiCollapsible>
        </li>
    </ul>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiCollapsible from '@/components/Global/UiCollapsible/UiCollapsible.vue';
    import { IncorporationStepTypes } from '@/types/incorporation.types';
    import UiCircularProgress from '@/components/Global/UiCircularProgress/UiCircularProgress.vue';

    @Component({
        components: {
            UiCircularProgress,
            UiCollapsible
        }
    })
    export default class IncorporationStepper extends Vue {
        @Prop() steps!: Array<IncorporationStepTypes>;
        @Prop() status!: string;
        @Prop({ default: 0 }) startIndex!: boolean;
        @Prop({ default: false }) active!: boolean;
        @Prop({ default: false }) disabled!: boolean;
        @Prop({ default: false }) isLastStep!: boolean;

        deeperViewMap = [
            'wait_for_submission',
            'accept_concept_documents_lawyer_step',
            'waiting_for_signers_step'
        ];

        hasDeepView(key: string) {
            return this.deeperViewMap.includes(key);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .stepper {
        width: 100%;
    }

    .extra-actions strong {
        margin-right: 2 * $margin-default;
    }

    .step-number {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: $color-gray-00;
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: $margin-default;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid $color-blue-gray-02;
        color: $color-blue-gray-02;
        font-size: 20px;
        @include fs-medium;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);

        .previous & {
            border: 2px solid $color-green;
            color: $color-green;
        }
    }

    li {
        width: 100%;
        display: flex;
        align-items: flex-start;
        position: relative;
        z-index: 0;

        .next & {
            &:last-child:before {
                content: none;
            }
        }

        &:before {
            content: '';
            width: 2px;
            height: 100%;
            position: absolute;
            background: $color-blue-gray-04;
            left: 25px;
            z-index: -1;

            .previous & {
                background: $color-green;
            }

            .last-step & {
                background: transparent;
            }
        }
    }

    .step-number-current {
        width: 52px;
        height: 52px;
        position: relative;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        margin-right: $margin-default;
        z-index: 2;
        color: $color-blue;
        font-size: 20px;
        @include fs-medium;

        svg {
            z-index: -1;
            position: absolute;
        }
    }

    /deep/ .stepper-grid {
        flex: 1;

        .stepper-header-title {
            color: $color-blue-gray-02;
            align-items: center;
            display: flex;

            .current & {
                color: $color-blue;
            }

            .previous & {
                color: $color-green;

                .ui-icon {
                    margin-left: $margin-default;
                }
            }
        }
    }

    /deep/ .stepper-main-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        div * {
            margin-bottom: 2 * $margin-default;
        }

        .button {
            margin: $margin-default 0;
        }

        div:first-child {
            display: flex;
            flex-direction: column;
        }

        ol {
            width: 80%;
            margin: $margin-default 0;
            list-style: decimal inside;

            li {
                margin: $margin-default 0;
            }
        }
    }

</style>
