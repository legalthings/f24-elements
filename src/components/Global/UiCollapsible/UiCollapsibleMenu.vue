<template>
    <div class="step-menu">
        <ul>
            <li
                v-for="(item, index) in menuItems"
                :key="index"
                :class="getClass(index)"
            >
                <span class="is-hidden-desktop">{{ index + 1 }}.</span> {{ item.label }}
                <UiIcon
                    v-if="index < currentIndex"
                    icon="check-simple"
                    size="16"
                    color="green"
                />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiCollapsibleMenu extends Vue {
        @Prop() menuItems!: Array<any>;
        @Prop() currentIndex!: number;

        getClass(index) {
            let className;
            if (index < this.currentIndex) {
                className = 'complete';
            }
            if (index === this.currentIndex) {
                className = 'active';
            }
            return className;
            // return index > this.currentIndex ? 'active' : 'complete';
        }
    }

</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .step-menu {
        @include breakpoint-down(md) {
            position: relative;
            height: 48px;
        }

        ul {
            display: flex;
            overflow-x: scroll;
            flex-wrap: nowrap;

            &::-webkit-scrollbar {
                display: none;
            }

            @include breakpoint-up(md) {
                flex-direction: column;
            }

            @include breakpoint-down(md) {
                position: absolute;
                width: 100%;
            }
        }

        li {
            flex: none;
            padding: $margin-default 0;
            color: $color-blue-gray-02;
            margin: 0 3 * $margin-default;
            @include font-size($regular-font-sizes);

            &:last-of-type {
                padding-right: 4 * $margin-default;
            }

            @include breakpoint-up(md) {
                margin: 0;
                padding: $margin-default 3 * $margin-default;
            }

            span {
                margin-right: $margin-default / 2;
            }

            &.active {
                color: $color-gray-90;
                position: relative;

                @include breakpoint-down(md) {
                    border-bottom: 3px solid $color-green;
                }

                @include breakpoint-up(md) {
                    &:before {
                        content: '';
                        top: 0;
                        left: 0;
                        width: 7px;
                        height: 100%;
                        position: absolute;
                        background: $color-green;
                        border-top-right-radius: $border-radius / 4;
                        border-bottom-right-radius: $border-radius / 4;
                    }
                }

                &:last-child {
                    margin-right: 2 * $margin-default;
                }
            }

            &.complete {
                display: flex;
                color: $color-green;
                align-items: center;

                .ui-icon {
                    margin-left: $margin-default / 2;

                    @include breakpoint-down(md) {
                        display: none;
                    }
                }

            }
        }
    }
</style>
