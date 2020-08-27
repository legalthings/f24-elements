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
                :data-hash="item.hash"
            >
                <router-link
                    class="scrollactive-item"
                    :to="`#${item.hash}`"
                    @click.native="change"
                >
                    <UiIcon
                        :icon="item.icon"
                        :color="isActive(item.hash) ? 'green' : 'gray'"
                        type="custom"
                    />
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

    @Component
    export default class GridMenuAnchor extends Vue {
        $refs!: {
            items: HTMLFormElement
        };

        @Prop() menu!: any;
        @Prop() active!: string;
        @Prop() parentRouteName!: string;

        top = 0;

        isActive(item: string): boolean {
            return this.$route.hash.replace('#', '') === item;
        }

        setActiveMarker() {
            const urlHash = this.$route.hash.replace('#', '');
            if (!urlHash) {
                this.$router.replace('#' + this.menu[0].hash);
            }
            const activeItem = this.$route.hash.replace('#', '') || this.menu[0].hash;
            this.top = this.$refs.items.find((f: { dataset: { hash: string; }; }) => f.dataset.hash === activeItem).offsetTop;
        }

        mounted() {
            this.setActiveMarker();
        }

        get position(): Object {
            return {
                top: this.top + 'px'
            };
        }

        change(a: any): void {
            this.top = a.target.offsetTop;
        }

        @Watch('$route')
        onRouterChange() {
            this.setActiveMarker();
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

            .ui-icon {
                width: 17px;
                margin-right: $margin-default;
                display: grid;

                /deep/ svg {
                    display: flex;
                }

            }

            &.router-link-active {
                color: $color-green;
            }
        }
    }
</style>
