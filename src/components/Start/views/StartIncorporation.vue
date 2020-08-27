<template>
    <div>
        <nav class="product-breadcrumb">
            <ul>
                <template v-for="item in Object.keys($route.params)">
                    <li
                        v-if="$route.params[item]"
                        :key="item.slug"
                    >
                        <router-link
                            :to="getBreadcrumbUrl(item)"
                        >
                            <UiIcon
                                :icon="$route.params[item]"
                                type="service"
                                size="40"
                            />
                            <strong>
                                {{ $t(`START.${$route.params[item].toUpperCase()}.TITLE`) }}
                            </strong>
                        </router-link>
                    </li>
                </template>
            </ul>
        </nav>

        <component
            :is="component"
            :data="{product, productPackages, productTypes, productUrgency, products}"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import pageMetadataService from '@/services/page-metadata.service';
    import UiCard from '@/components/Global/UiCard/UiCard.vue';

    @Component({
        components: { UiCard }
    })
    export default class StartIncorporation extends Vue {
        @Prop() products!: Array<any>;
        @Prop() productList!: Array<any>;

        componentMap: any = {
            start: () => import('@/components/Start/components/StartProduct.vue'),
            type: () => import('@/components/Start/components/StartType.vue'),
            package: () => import('@/components/Start/components/StartPackage.vue'),
            urgency: () => import('@/components/Start/components/StartUrgency.vue'),
            account: () => import('@/components/Start/components/StartAccount.vue')
        };

        created() {
            pageMetadataService.setPageTitle(this.$route);
        }

        get product() {
            return this.getCurrentProductBySlug(this.$route.params.product);
        }

        get hasType() {
            return this.product.products.types.includes(this.$route.params.type);
        }

        get hasPackage() {
            return this.product.products.packages.includes(this.$route.params.package);
        }

        get hasUrgency() {
            return this.product.products.urgency.includes(this.$route.params.urgency);
        }

        get component() {
            return this.componentMap[this.resolveComponent()];
        }

        get productTypes() {
            return this.product && this.product.products.types.map(p => this.getProductBySlug(p));
        }

        get productPackages() {
            return this.product && this.product.products.packages.map(p => this.getProductBySlug(p));
        }

        get productUrgency() {
            return this.product && this.product.products.urgency.map(p => this.getProductBySlug(p));
        }

        getBreadcrumbUrl(key: string) {
            const params: any = {
                name: 'start-incorporation',
                params: {}
            };
            if (key === 'type') {
                params.params.product = this.$route.params.product;
            }
            if (key === 'package') {
                params.params.product = this.$route.params.product;
                params.params.type = this.$route.params.type;
            }
            if (key === 'urgency') {
                params.params.product = this.$route.params.product;
                params.params.type = this.$route.params.type;
                params.params.package = this.$route.params.package;
            }
            return params;
        }

        getProductBySlug(slug: string) {
            return this.productList.find(p => p.slug === slug);
        }

        getCurrentProductBySlug(slug: string) {
            return this.products.find(p => p.slug === slug);
        }

        resolveComponent() {
            let label = 'start';
            const parameters: any = {};
            const params = this.$route.params;

            if (!this.product && params.product) {
                this.$router.push({ path: '/start/incorporation' });
            }

            if (this.product && !this.hasType) {
                if (params.type) {
                    parameters.product = params.product;
                    this.$router.push({ name: 'start-incorporation', params: parameters });
                }
                label = 'type';
            }

            if (this.product && this.hasType && !this.hasPackage) {
                if (params.package) {
                    parameters.product = params.product;
                    parameters.type = params.type;
                    this.$router.push({ name: 'start-incorporation', params: parameters });
                }
                label = 'package';
            }

            if (this.product && this.hasType && this.hasPackage && !this.hasUrgency) {
                if (params.urgency) {
                    parameters.product = params.product;
                    parameters.type = params.type;
                    parameters.package = params.package;
                    this.$router.push({ name: 'start-incorporation', params: parameters });
                }
                label = 'urgency';
            }

            if (this.product && this.hasType && this.hasPackage && this.hasUrgency) {
                label = 'account';
            }
            return label;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

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

    .product-breadcrumb {
        display: flex;
        justify-content: center;

        ul {
            display: flex;
            position: relative;
        }

        li {
            &:not(:first-child) {
                margin-left: 3 * $margin-default;

                &:before {
                    content: '';
                    position: absolute;
                    left: -28px;
                    top: 50%;
                    margin-top: -10px;
                    width: 20px;
                    height: 20px;
                    @include fs-medium;
                    background: url("~icons/common/icon-chevron-down.svg") no-repeat;
                    transform: rotate(-90deg);
                }
            }

            display: flex;
            align-items: center;
            background: $color-gray-00;
            padding: $margin-default / 2 2 * $margin-default;
            border-radius: $border-radius;
            box-shadow: 0 2px 6px 0 rgba($color-gray-100, .05);
            position: relative;

            a {
                display: flex;
                align-items: center;
            }

            .product-label {
                margin-right: $margin-default;
            }
        }

        .ui-icon {
            margin-right: $margin-default;
        }
    }
</style>
