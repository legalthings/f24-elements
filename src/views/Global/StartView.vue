<template>
    <div>
        <HeaderDashboard />
        <section class="section">
            <section class="container">
                <router-view
                    :products="products"
                    :product-list="productList"
                    :start-products="startProducts"
                />
            </section>
        </section>
        <LanguageSelector />
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HeaderDashboard from '@/components/Global/Header/HeaderDashboard/HeaderDashboard.vue';
    import LanguageSelector from '@/components/Global/LanguageSelector/LanguageSelector.vue';
    import { productList, productsOptions, startProducts } from '@/mocks/products-options';

    @Component({
        components: { LanguageSelector, HeaderDashboard }
    })
    export default class StartView extends Vue {
        products = productsOptions;
        productList = productList;
        startProducts = startProducts;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;

        @include breakpoint-up(sm) {
            align-items: normal;
            justify-content: center;
            flex-direction: row;
        }

        .card-wrapper {
            margin-bottom: $margin-default;

            @include breakpoint-up(sm) {
                margin: 0 $margin-default;
            }
        }
    }

    /deep/ .section {
        .product-options {
            display: flex;
            flex-direction: column;
            align-items: center;

            @include breakpoint-up(sm) {
                align-items: normal;
                justify-content: center;
                flex-direction: row;
            }

            .card-wrapper {
                margin-bottom: $margin-default;

                @include breakpoint-up(sm) {
                    margin: 0 $margin-default;
                }
            }
        }

        .card-link {
            transition: all 0.2s cubic-bezier(0.1, 1, 0.1, 3);

            &:hover {
                transform: scale(.9);
            }
        }

        .buttons {
            justify-content: center;
            margin: 6 * $margin-default auto 0;
        }

        .title {
            text-align: center;
            margin: 4 * $margin-default;
        }
    }
</style>
