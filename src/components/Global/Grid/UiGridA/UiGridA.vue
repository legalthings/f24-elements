<template>
    <div class="grid-a">
        <div class="grid-a-menu">
            <slot name="menu" />
        </div>
        <div class="grid-a-content">
            <slot name="content" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class UiGridA extends Vue {
        $refs!: {
            content: HTMLElement,
            offsetHeight: HTMLFormElement
        };
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .grid-a {
        display: flex;
        flex-direction: column;

        @include breakpoint-up(md) {
            flex-direction: row;
        }

        .grid-menu {
            position: sticky;
            top: 40px;
        }

        .grid-a-menu {
            flex: 1;
            border-bottom: 2px solid $color-blue-gray-01;

            @include breakpoint-up(md) {
                padding: 0;
                border-bottom: none;
                border-right: 1px solid $color-blue-gray-01;
            }

            &:empty {
                display: none;
            }
        }

        .grid-a-content {
            flex: 2;
            padding: 2 * $margin-default;

            @include breakpoint-up(md) {
                padding: 2 * $margin-default 10 * $margin-default 0 0;
                margin-left: 8 * $margin-default;
            }
        }
    }
</style>
