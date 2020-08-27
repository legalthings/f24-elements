<template>
    <div class="box">
        <embed
            :src="conceptDeed"
            type="application/pdf"
            frameBorder="10px"
            scrolling="auto"
            height="500px"
            width="100%"
        >
        <div class="buttons">
            <b-button
                :disabled="disabled"
                :loading="rejectLoading"
                type="is-danger"
                rounded
                @click="reject"
            >
                REJECT
            </b-button>
            <b-button
                :disabled="disabled"
                :loading="submitLoading"
                type="is-primary"
                rounded
                @click="submit"
            >
                APPROVE
            </b-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { IncorporationTypes } from '@/types/incorporation.types';
    import EditableBlock from '@/components/Global/EditableBlock/EditableBlock.vue';
    import EditableBlockItem from '@/components/Global/EditableBlock/EditableBlockItem.vue';
    import ShareholderIdentificationStatus
        from '@/components/Incorporation/components/Global/ShareholderIdentificationStatus.vue';
    import apiService from '@/services/api.service';
    import alertService from '@/services/alert.service';

    @Component({
        components: {
            ShareholderIdentificationStatus,
            EditableBlockItem,
            EditableBlock
        }
    })
    export default class IncorporationAcceptConceptDocuments extends Vue {
        @Prop() organization!: IncorporationTypes;

        rejectLoading = false;
        submitLoading = false;
        disabled = false;
        conceptDeedId = this.organization.data.assets.concept_akte.public_id;

        reply: any = {
            action: this.organization.data.current.key,
            chained_hash: this.organization.data.current.chained_hash
        };

        get conceptDeed() {
          if (!this.conceptDeedId) return;
          return `${apiService.getApiUrl()}proxy/dms/public-documents/${this.conceptDeedId}.pdf`;
        }

        async reject() {
            this.disabled = true;
            this.rejectLoading = true;
            this.reply.response = 'reupload';

            const url = `proxy/processes/${this.organization.id}/response`;
            try {
                const { status } = await apiService.post(url, this.reply);
                if (status === 200) {
                    this.redirectToStepper();
                } else {
                    alertService.dangerMessage('Error trying to reject this document');
                }
            } catch (e) {
                alertService.dangerMessage('Error trying to reject this document');
            }
            this.disabled = false;
            this.rejectLoading = false;
        }

        async submit() {
            this.disabled = true;
            this.submitLoading = true;
            this.reply.response = 'confirm';

            const url = `proxy/processes/${this.organization.id}/response`;
            try {
                const { status } = await apiService.post(url, this.reply);
                if (status === 200) {
                    this.redirectToStepper();
                } else {
                    alertService.dangerMessage('Error trying to approve this document');
                }
            } catch (e) {
                alertService.dangerMessage('Error trying to approve this document');
            }
            this.disabled = false;
            this.submitLoading = false;
        }

        redirectToStepper() {
            this.$router.push({
                name: 'incorporation',
                params: { incorporationId: this.organization.id }
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .box {
        margin-top: 3* $margin-default;
    }

    .buttons {
        margin-top: 3 * $margin-default;
    }
</style>
