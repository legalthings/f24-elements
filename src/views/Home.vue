<template>
    <div>
        Home

        {{ $t('VALIDATION.THIS_FIELD_IS_REQUIRED') }}

        <ValidationObserver>
            <UiInputText v-model="text" />
        </ValidationObserver>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import UiInputText from '@/components/UiFormInputs/UiInputText/UiInputText.vue';

    @Component({
        components: { UiInputText }
    })
    export default class Home extends Vue {
        text = null;
    }
</script>
