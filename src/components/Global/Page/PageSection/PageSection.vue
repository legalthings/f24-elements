<template>
    <section class="section">
        <div class="page-section-header">
            <h3 class="section-title">
                <slot name="header" />
            </h3>
            <slot name="options" />
        </div>
        <div class="section-content">
            <slot name="content" />
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class PageSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .page-section-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2 * $margin-default;

        @include breakpoint-down(sm) {
            flex-direction: column;

            .section-title {
                margin-bottom: $margin-default;
            }
        }
    }

    .section-title {
        @include fs-medium;
        @include font-size($h3-font-sizes);

        &:empty {
            display: none;
        }
    }

    .box-title {
        @include fs-medium;
        padding-bottom: 2 * $margin-default;
        margin: $margin-default 0 3 * $margin-default 0;
        border-bottom: 1px solid $color-blue-gray-01;

        &:not(:first-child) {
            margin-top: 5 * $margin-default;
        }
    }
</style>
