<template>
    <div class="section-row">
        <span class="section-label">
            <slot name="label">
                {{ item.label }}
            </slot>
        </span>
        <span class="value">
            <slot name="value">
                {{ item.value }}
            </slot>
        </span>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class PageSectionItems extends Vue {
        @Prop({ default: () => [] }) item!: Object;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .section-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: $margin-default;
        padding: $margin-default / 2 0;
        position: relative;
        z-index: 0;
        @include font-size($regular-font-sizes);

        &:last-child {
            margin-bottom: 0;
        }

        @include breakpoint-up(md) {
            padding-right: 4 * $margin-default;
        }

        &:before {
            transition: all .2s ease;
            content: '';
            position: absolute;
            width: 100%;
            height: 0;
            background-color: $color-blue-gray-01;
            opacity: 0;
            z-index: -1;
            top: 10px;
            left: -6px;
            border-radius: $border-radius / 2;
        }

        &:hover {

            &:before {
                top: -1px;
                height: 100%;
                opacity: 1;
            }
        }

        .section-label {
            flex: 1.6;
            text-transform: capitalize;
            @include fs-medium;

            @include breakpoint-up(md) {
                flex: 1;
            }

        }

        .value {
            text-align: left;
            flex: 1;
            padding-left: 2 * $margin-default;

            @include breakpoint-up(md) {
                flex: 2;
            }
        }
    }
</style>
