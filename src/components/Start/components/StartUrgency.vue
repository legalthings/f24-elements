<template>
    <div>
        <h1 class="title">
            In a rush?
        </h1>
        <div class="product-options">
            <router-link
                v-for="item in data.productUrgency"
                :key="item.slug"
                :to="{name: 'start-incorporation', params: {product: data.product.slug, type: $route.params.type, package: $route.params.package, urgency: item.slug}}"
                class="card-link"
            >
                <UiCardOptional :best-seller="item.best_seller">
                    <template #icon>
                        <UiIcon
                            :icon="item.slug"
                            type="service"
                            size="110"
                        />
                    </template>
                    <template #title>
                        {{ $t(`START.${item.slug.toUpperCase()}.TITLE`) }}
                    </template>
                    <template #description>
                        {{ $t(`START.${item.slug.toUpperCase()}.DESCRIPTION`) }}
                    </template>
                    <template #footer>
                        <PriceLabel
                            :price="item.price"
                            :price-before="item.normal_price"
                        />
                    </template>
                </UiCardOptional>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiCardOptional from '@/components/Global/UiCardOptional/UiCardOptional.vue';
    import PriceLabel from '@/components/Global/PriceLabel/PriceLabel.vue';

    @Component({
        components: { PriceLabel, UiCardOptional }
    })
    export default class StartUrgency extends Vue {
        @Prop() data!: any;
    }
</script>
