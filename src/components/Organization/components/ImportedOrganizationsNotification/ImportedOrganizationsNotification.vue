<template>
    <section
        class="section"
        :class="organization.data.state"
    >
        <div class="box">
            <div v-if="organization.data.state === 'consider' || fixData">
                <h3 class="is-size-5">
                    {{ $i18n.t('ORGANIZATION_NOTIFICATION.BANNER_TEXT') }}
                </h3>
                <div class="buttons">
                    <b-button
                        type="is-primary is-padding-small"
                        rounded
                        @click="setOrganizationsWithCheckedData"
                    >
                        {{ $i18n.t('ORGANIZATION_NOTIFICATION.ACTION_YES') }}
                    </b-button>
                    <b-button
                        type="is-danger is-padding-small"
                        inverted
                        rounded
                        @click="openFixDataModal"
                    >
                        {{ $i18n.t('ORGANIZATION_NOTIFICATION.ACTION_NO') }}
                    </b-button>
                </div>
            </div>

            <!-- Requested -->
            <div v-if="organization.data.state ==='validation_submitted' && !fixData">
                <h3 class="is-size-5">
                    {{ $i18n.t('ORGANIZATION_NOTIFICATION.BANNER_TEXT_SUBMITTED') }}
                </h3>
                <div class="buttons">
                    <b-button
                        type="is-primary is-padding-small"
                        rounded
                        @click="removeCheckedFlag"
                    >
                        {{ $i18n.t('ORGANIZATION_NOTIFICATION.ACTION_FIX') }}
                    </b-button>
                </div>
            </div>

            <!-- Rejected-->
            <div v-if="organization.data.state === 'validation_requested'">
                <h3 class="is-size-5">
                    {{ $i18n.t('ORGANIZATION_NOTIFICATION.BANNER_TEXT_PENDING') }}
                </h3>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import ModalUpdateOrganization from '@/components/Global/Modals/ModalUpdateOrganization/ModalUpdateOrganization.vue';
    import ModalUpdateOrganizationForm from '@/components/Global/Modals/ModalUpdateOrganizationForm/ModalUpdateOrganizationForm.vue';
    import ModalUpdateOrganizationConfirm from '@/components/Global/Modals/ModalUpdateOrganizationConfirm/ModalUpdateOrganizationConfirm.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';

    @Component({
        components: {}
    })
    export default class ImportedOrganizationsNotification extends Vue {
        @Prop() organization!: OrganizationService;
        fixData = false;

        created() {
            if (!this.$store.getters['applicationStore/hasOrganizationFirstTimeAlert'](this.organization.id)) {
                this.$store.commit('applicationStore/updateOrganizationsWithFirstTimeAlert', this.organization.id);
                this.$buefy.modal.open({
                    parent: this,
                    component: ModalUpdateOrganization,
                    hasModalCard: true,
                    trapFocus: true
                });
            }
        }

        async removeCheckedFlag() {
            this.fixData = true;
        }

        setOrganizationsWithCheckedData() {
            this.$buefy.modal.open({
                parent: this,
                canCancel: false,
                component: ModalUpdateOrganizationConfirm,
                hasModalCard: true,
                trapFocus: true,
                props: { organization: this.organization }
            });
        }

        openFixDataModal() {
            this.$buefy.modal.open({
                parent: this,
                canCancel: false,
                component: ModalUpdateOrganizationForm,
                hasModalCard: true,
                trapFocus: true,
                props: { organization: this.organization }
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .box {
        background: $color-red;

        .validation_requested & {
            background: $color-blue;
        }

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $color-gray-00;

            @include breakpoint-down(md) {
                flex-direction: column;
            }
        }
    }

    .buttons {
        @include breakpoint-down(md) {
            margin-top: 2 * $margin-default;
        }
    }
</style>
