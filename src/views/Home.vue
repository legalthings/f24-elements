<template>
    <div>
        Home

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
