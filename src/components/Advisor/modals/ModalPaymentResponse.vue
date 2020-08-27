<template>
    <UiModal @close="$parent.close">
        <template #header>
            <h3>
                {{ $t('PAYMENT.' + status + '_TITLE') }}
            </h3>
        </template>
        <div slot="content">
            <div>
                <p>
                    {{ $t('PAYMENT.' + status + '_DESCRIPTION') }}
                </p>
            </div>

            <div class="buttons space-between mt-6">
                <UiIcon
                    icon="ideal"
                    type="service"
                    size="70"
                    color="black"
                />
                <b-button
                    type="is-primary"
                    rounded
                    @click="$parent.close"
                >
                    {{ $t('GLOBAL.CLOSE') }}
                </b-button>
            </div>
        </div>
    </UiModal>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiModal from '@/components/Global/Modals/UiModal/UiModal.vue';
    import UiNameFlag from '@/components/Global/UiNameFlag/UiNameFlag.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';

    @Component({
        components: { UiInputText, UiNameFlag, UiModal }
    })
    export default class ModalPaymentResponse extends Vue {
        @Prop() status!: string;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
</style>
