<template>
    <header class="sidebar-wrapper">
        <div class="sidebar-container">
            <slot />
        </div>
    </header>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class SidebarWrapper extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .sidebar-wrapper {
        position: relative;
        min-width: 281px;
        width: 281px;
        height: 100%;
        color: $color-gray-00;

        @include breakpoint-down(md) {
            background: url('../../../../assets/images/sidebar/menu.svg') no-repeat center top, linear-gradient(93deg, $color-blue -46%, $color-blue-darker 64%);
            background-size: cover;
            width: 100%;
        }

        @include breakpoint-down(md) {
            overflow: auto;
        }
    }

    .sidebar-container {
        display: flex;
        flex-direction: column;
        min-width: 281px;
        padding-bottom: 100px;
        position: relative;

        @include breakpoint-up(md) {
            background: url('../../../../assets/images/sidebar/menu.svg') no-repeat center top, linear-gradient(93deg, $color-blue -46%, $color-blue-darker 64%);
            background-size: cover;
        }

        @include breakpoint-up(md) {
            height: 100%;
            position: fixed;
            overflow: auto;
        }
    }

    .sidebar-wrapper {
        @include breakpoint-down(md) {
            transition: transform .3s ease;
            position: absolute;
            transform: translateX(-100%);
            z-index: 100;

            &.is-open {
                position: fixed;
                transform: none;
                width: 100%;
            }
        }
    }
</style>
