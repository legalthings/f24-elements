<template>
    <section class="section">
        <div class="page-section-header">
            <h1 class="section-title">
                <slot name="header" />
            </h1>
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
    export default class PageMainSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .page-section-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4 * $margin-default;

        @include breakpoint-down(sm) {
            flex-direction: column;

            .section-title {
                margin-bottom: $margin-default;
            }
        }
    }

    .section-title {
        @include fs-medium;

        &:empty {
            display: none;
        }
    }

</style>
