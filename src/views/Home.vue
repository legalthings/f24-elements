<template>
    <div>
        {{ $t('VALIDATION.THIS_FIELD_IS_REQUIRED') }}

        <ValidationObserver>
            <UiInputText v-model="text" />
        </ValidationObserver>

        <UiLanguageSelector />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import UiInputText from '@/components/UiFormInputs/UiInputText/UiInputText.vue';
    import UiLanguageSelector from '@/components/UiLanguageSelector/UiLanguageSelector.vue';

    @Component({
        components: { UiLanguageSelector, UiInputText }
    })
    export default class Home extends Vue {
        text = null;
    }
</script>
