<template>
    <div>
        <h1 class="title">
            Which type of BV do you want to incorporate?
        </h1>
        <div class="product-options">
            <router-link
                v-for="item in data.productTypes"
                :key="item.slug"
                :to="{name: 'start-incorporation', params: {product: data.product.slug, type: item.slug}}"
                class="card-link"
            >
                <UiCard>
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
                </UiCard>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiCard from '@/components/Global/UiCard/UiCard.vue';

    @Component({
        components: { UiCard }
    })
    export default class StartType extends Vue {
        @Prop() data!: any;
    }
</script>
