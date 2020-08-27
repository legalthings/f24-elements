<template>
    <div
        :class="color"
        class="name-flag is-uppercase"
    >
        <UiIcon
            v-if="$vmq.xs || $vmq.sm"
            :icon="icon"
            size="18"
            :type="iconType"
        />
        <span v-else>
            {{ name }}
        </span>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiNameFlag extends Vue {
        @Prop() color: string | undefined;
        @Prop() name!: string;
        @Prop({ default: 'alert' }) icon!: string;
        @Prop({ default: 'common' }) iconType!: string;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .default-color {
        $color: $color-blue-light;
        color: $color;

        @include breakpoint-up(sm) {
            border: 1px solid $color;
        }

        &.unconfirmed, &.validation_requested, &.new {
            $color: $color-orange;
            color: $color;
            @include breakpoint-up(sm) {
                border: 1px solid $color;
            }

            .ui-icon {
                fill: $color;
            }
        }

        &.liquidating {
            $color: $color-red;
            color: $color;
            @include breakpoint-up(sm) {
                border: 1px solid $color;
            }

            .ui-icon {
                fill: $color;
            }
        }

        &.live {
            $color: $color-green;
            color: $color;
            @include breakpoint-up(sm) {
                border: 1px solid $color;
            }

            .ui-icon {
                fill: $color;
            }
        }

    }

    .name-flag {
        flex: auto;
        max-width: 120px;
        font-size: 10px;
        @include fs-medium;
        text-align: center;
        padding: 3px 10px 2px;
        color: $color-blue-light;
        border-radius: $border-radius;
        @extend .default-color;
    }
</style>
