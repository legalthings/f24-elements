<template>
    <Breadcrumbs />
    <!--    <ul class="ui-breadcrumbs">-->
    <!--        <li-->
    <!--            v-for="(item, i) in items"-->
    <!--            :key="i"-->
    <!--        >-->
    <!--            <router-link :to="item.to">-->
    <!--                {{ item.name }}-->
    <!--            </router-link>-->
    <!--        </li>-->
    <!--    </ul>-->
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiBreadcrumbs extends Vue {
        @Prop() items!: Array<any>;
        bread: any = null

        created() {
            this.$nextTick(() => (this.bread = this.$route.matched.map(r => r.name)));
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .divider {
        &:before {
            position: absolute;
            right: -11px;
            content: '';
            width: 0;
            height: 0;
            top: 0;
            z-index: 1;
            border-style: solid;
            border-width: 18px 0 18px 10px;
            border-color: transparent transparent transparent rgba($color-gray-100, .2);
            filter: blur(0.04rem);
        }

        &:after {
            position: absolute;
            right: -10px;
            top: 0;
            z-index: 2;
            content: '';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 18px 0 18px 10px;
            border-color: transparent transparent transparent $color-blue-gray-05;
        }
    }

    .breadcrumb {
        display: flex;
        background: rgba($color-blue-gray-02, .2);

        /deep/ li {
            padding-left: 2.2 * $margin-default;

            &:first-child {
                padding-left: 2 * $margin-default;
            }

            &:not(:last-child) {
                padding-right: $margin-default;
                background: $color-blue-gray-05;
                position: relative;

                @extend .divider;
            }

            &:before {
                content: none;
            }

            a, span {
                color: $color-blue-gray-02;
                padding: $margin-default 0;
                @include font-size($small-font-sizes);
                display: block;

                &:hover {
                    text-decoration: underline;
                }
            }

            &:last-child {
                pointer-events: none;
            }
        }
    }
</style>
