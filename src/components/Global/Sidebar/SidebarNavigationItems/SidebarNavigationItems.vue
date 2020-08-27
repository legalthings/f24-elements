<template>
    <ul class="sidebar-navigation-item">
        <li
            v-for="nav in menuItems"
            :key="nav.label"
        >
            <UiButton
                :is-router="nav.isRouter"
                :url="nav.url"
                class="sidebar-navigation-label"
            >
                {{ nav.label }}
            </UiButton>
        </li>
    </ul>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { NavigationItem } from '@/types/navigation.types';
    import SidebarWrapper from '@/components/Global/Sidebar/SidebarWrapper/SidebarWrapper.vue';
    import UiButton from '@/components/Global/UiButton/UiButton.vue';

    @Component({
        components: {
            UiButton,
            SidebarWrapper
        }
    })
    export default class SidebarNavigationItems extends Vue {
        @Prop() menuItems!: Array<NavigationItem>;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .sidebar-navigation-item {
        margin-top: $margin-default * 3;
        max-width: 300px;
    }

    ul {
        display: flex;
        flex-direction: column;
    }

    li {
        margin: $margin-default / 3 0;

        /deep/  a {
            padding: $margin-default 0 $margin-default $margin-default * 3;
            position: relative;
            @include font-size($medium-font-sizes);
            color: $color-blue-light;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;

            &:hover {
                color: $color-gray-00
            }

            &.router-link-exact-active {
                color: $color-gray-00;

                &:before {
                    position: absolute;
                    content: '';
                    width: 9px;
                    height: 42px;
                    left: 0;
                    top: 0;
                    background: $color-orange;
                    border-radius: 0 5px 5px 0;
                    animation: sidebar-nav-item-slide-in .3s ease-in;
                }
            }
        }
    }

    .sidebar-submenu-container {
        max-height: 0;
        overflow: hidden;
        transition: max-height .3s ease;

        span {
            display: block;
            padding-left: $margin-default * 4;
            height: 42px;
        }

        &.expanded {
            max-height: 210px;
            margin-bottom: $margin-default * 2;
        }
    }

    @keyframes sidebar-nav-item-slide-in {
        0% {
            left: -9px;
        }
        100% {
            left: 0;
        }
    }
</style>
