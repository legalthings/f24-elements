<template>
    <div
        :class="status"
        class="step"
    >
        <div class="step-number">
            <span v-if="!isCompleted">{{ index + 1 }}</span>
            <UiIcon
                v-if="isCompleted"
                icon="check-simple"
            />
        </div>
        <div class="step-label">
            {{ label }}
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class HeaderStep extends Vue {
        @Prop() private label!: string;
        @Prop() private index!: number;
        @Prop() private current!: number;

        get status() {
            let status;
            if (this.current === this.index) status = 'current';
            if (this.current > this.index) status = 'completed';
            return status;
        }

        get isCompleted() {
            return this.status === 'completed';
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .step {
        padding: $margin-default/ 2 $margin-default;
        display: flex;
        align-items: center;
        color: $color-gray-00;
        text-align: center;
        border-radius: 32px;
        margin-right: $margin-default / 2;
        opacity: .5;

        @include breakpoint-down(sm) {
            padding: 6px;
        }

        &:last-child {
            margin-right: 0;
        }

        &.current {
            opacity: 1;
            background: rgba($color-blue, .5);
        }

        &.completed {
            opacity: 1;

            .step-number {
                background: $color-green;
                border: none;

                i {
                    fill: $color-gray-00;
                }
            }
        }

        .step-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            @include font-size($regular-font-sizes);
            border: 2px solid $color-blue-light;
            border-radius: 50%;

            @include breakpoint-up(md) {
                width: 32px;
                height: 32px;
            }
        }

        .step-label {
            margin: 0 $margin-default;

            @include breakpoint-down(md) {
                display: none;
            }
        }
    }
</style>
