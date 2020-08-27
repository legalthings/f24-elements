<template>
    <div class="grid-menu">
        <span
            :style="position"
            class="icon-active"
        />
        <ul class="grid-menu-list">
            <li
                v-for="item in menu"
                :key="item.name"
                ref="items"
                :data-slug="item.slug"
            >
                <router-link
                    :to="{name: parentRouteName, params:{ slug: item.slug}}"
                >
                    <UiIcon
                        :icon="item.icon"
                        :color="isActive(item.slug) ? 'green' : 'gray'"
                        type="custom"
                    />
                    {{ $t(item.name) }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

    @Component
    export default class GridMenu extends Vue {
        $refs!: {
            items: HTMLFormElement
        };

        @Prop() menu!: any;
        @Prop() active!: string;
        @Prop() parentRouteName!: string;

        top = 0;

        isActive(item: string): boolean {
            return this.active === item;
        }

        mounted() {
            this.setTop();
        }

        setTop() {
            this.top = this.$refs.items.find((f: { dataset: { slug: string; }; }) => f.dataset.slug === this.active).offsetTop;
        }

        get position(): Object {
            return {
                top: this.top + 'px'
            };
        }

        @Watch('$route')
        onChange() {
            this.setTop();
        }
    }

</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .icon-active {
        transition: top .3s ease;
        top: 0;
        left: 0;
        width: 7px;
        height: 40px;
        position: absolute;
        background: $color-green;
        border-top-right-radius: $border-radius / 4;
        border-bottom-right-radius: $border-radius / 4;
    }

    .grid-menu-list {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;

        a {
            color: $color-gray-90;
            display: flex;
            align-items: center;
            padding: $margin-default 0 $margin-default 3 * $margin-default;
            @include font-size($regular-font-sizes);

            /deep/ .ui-icon {
                margin-right: $margin-default;
                display: grid;

                svg {
                    width: 22px;
                    height: 22px;
                }
            }

            &.router-link-active {
                color: $color-green;
            }
        }
    }
</style>
