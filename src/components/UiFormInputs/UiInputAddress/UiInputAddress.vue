<template>
    <div>
        <div class="columns">
            <UiInputText
                v-model="value.postalCode"
                :label="$t('ADDRESS.POSTAL_CODE')"
                class="column"
                :size="size"
            />
            <UiInputText
                v-model="value.number"
                :label="$t('ADDRESS.NUMBER')"
                class="column is-3"
                :size="size"
            />
            <UiInputText
                v-model="value.addition"
                :label="$t('ADDRESS.ADDITION')"
                class="column is-3"
                rules=""
                :size="size"
            />
        </div>
        <div class="columns">
            <UiInputText
                v-model="value.street"
                :label="$t('ADDRESS.STREET')"
                class="column is-6"
                :size="size"
            />
            <UiInputText
                v-model="value.city"
                :label="$t('ADDRESS.CITY')"
                class="column is-6"
                :size="size"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiInputText from '../UiInputText/UiInputText.vue';

    @Component({
        components: { UiInputText }
    })
    export default class UiInputAddress extends Vue {
        @Prop() value: any;
        @Prop() size: any;
    }
</script>
