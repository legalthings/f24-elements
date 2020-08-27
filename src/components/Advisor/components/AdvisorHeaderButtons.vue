<template>
    <div>
        <b-button
            type="is-primary is-padding-small"
            rounded
            @click="buyLeads"
        >
            {{ $t('ADVISOR.BUY_LEADS') }}
        </b-button>
        <b-button
            type="is-primary is-padding-small"
            rounded
            @click="newProcess"
        >
            {{ $t('ADVISOR.NEW_PROCESS') }}
        </b-button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ModalBuyLeads from '@/components/Advisor/modals/ModalBuyLeads.vue';
    import incorporationService from '@/services/incorporation.service';

    @Component
    export default class AdvisorHeaderButtons extends Vue {
        buyLeads() {
            this.$buefy.modal.open({
                parent: this,
                component: ModalBuyLeads,
                hasModalCard: true,
                trapFocus: true
            });
        }

        newProcess() {
            incorporationService.newIncorporation();
        }
    }
</script>
