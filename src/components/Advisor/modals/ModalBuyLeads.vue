<template>
    <UiModal @close="$parent.close()">
        <template #header>
            <h3>{{ $t('ADVISOR.BUY_LEADS') }}</h3>
        </template>
        <div slot="content">
            <b-loading
                :is-full-page="true"
                :active.sync="isLoading"
            />
            <div v-if="!isLoading">
                <p>
                    {{ $t('ADVISOR.BUY_LEADS_DESCRIPTION_1') }}
                </p>
                <p class="mt-4">
                    {{ $t('ADVISOR.BUY_LEADS_DESCRIPTION_2') }}
                </p>
                <hr>
                <div class="amount-selector">
                    <h4>
                        {{ $t('NAVIGATION.LEADS') }}
                    </h4>
                    <b-numberinput
                        v-model.number="amount"
                        min="1"
                        type="is-primary is-padding-small"
                    />
                    <p class="price">
                        <span>€ {{ types.product.price * amount }}</span>
                        <span>+ {{ types.product.tax }}%</span>
                    </p>
                </div>
                <hr>
                <div class="buttons space-between">
                    <UiIcon
                        icon="ideal"
                        type="service"
                        size="70"
                        color="black"
                    />
                    <b-button
                        :loading="buyIsLoading"
                        type="is-primary"
                        rounded
                        @click="buy"
                    >
                        {{ $t('ADVISOR.BUY_LEADS') }}
                    </b-button>
                </div>
            </div>
        </div>
    </UiModal>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import UiModal from '@/components/Global/Modals/UiModal/UiModal.vue';
    import UiNameFlag from '@/components/Global/UiNameFlag/UiNameFlag.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import leadService from '@/services/leads.service';
    import paymentService from '@/services/payment.service';

    @Component({
        components: { UiInputText, UiNameFlag, UiModal }
    })
    export default class ModalBuyLeads extends Vue {
        types: any;
        isLoading = true;
        amount = 1;
        leads = null;
        buyIsLoading = false;

        async created() {
            this.leadTypes();
            this.leads = await leadService.getLeads();
        }

        async leadTypes() {
            const { data } = await leadService.getTypes();
            // TODO first item of the array should go away, later user will be able to choose among the types
            this.types = data[0];
            this.isLoading = false;
        }

        async buy() {
            this.buyIsLoading = true;
            const { data, status } = await leadService.buyLead(this.types._id, this.amount);
            if (status === 201) {
                this.startTransaction(data.transaction.id);
            }
        }

        startTransaction(id: string) {
            window.location.href = paymentService.startPayment(id);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .amount-selector {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
            text-transform: capitalize;
            @include fs-medium;
        }

        .price {
            @include fs-medium;
            @include font-size($big-font-sizes);

            span:last-child {
                display: block;
                @include font-size($xsmall-font-sizes);
                color: $color-blue-gray-02;
            }
        }
    }

    .buttons {
        justify-content: flex-end;
    }

    /deep/ .tabs {
        display: none;
    }

    .space-between {
        justify-content: space-between;
    }
</style>
