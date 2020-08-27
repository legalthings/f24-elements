<template>
    <PageBlock
        :back-button="{name: 'incorporation', params: { incorporationId:organization.id}, label: $t('NAVIGATION.OVERVIEW')}"
    >
        <template #content>
            <PageSection>
                <div slot="header">
                    {{ organization.data.current.title }}
                </div>
                <div slot="content">
                    <component
                        :is="component"
                        :organization="organization"
                    />
                </div>
            </PageSection>
        </template>
    </PageBlock>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageBlock from '@/components/Global/Page/PageBlock/PageBlock.vue';
    import pageMetadataService from '@/services/page-metadata.service';
    import IncorporationService from '@/components/Incorporation/services/incorporation.service';
    import PageSection from '@/components/Global/Page/PageSection/PageSection.vue';

    @Component({
        components: {
            PageSection,
            PageBlock
        }
    })
    export default class IncorporationStep extends Vue {
        @Prop() organization!: IncorporationService;

        created() {
            pageMetadataService.setPageTitle(this.$route, this.organization.data.name);
        }

        componentMap = {
            wait_for_submission: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue'),
            view_onfido_documents_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue'),
            appointment_notary_options_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue'),
            upload_volmacht_pdc_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue'),
            upload_conceptaktes_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue'),
            select_sign_method_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue'),
            prepare_sr_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue'),
            waiting_for_signers_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationSigning.vue'),
            accept_concept_documents_lawyer_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationAcceptConceptDocuments.vue'),
            bespreek_conceptakte_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue'),
            upload_final_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue'),
            fill_in_kvk_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue'),
            enter_sbi_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue'),
            upload_kvk_step: () => import(/* webpackChunkName: "IncorporationIdentification" */ '@/components/Incorporation/components/IncorporationIdentification.vue')
        };

        get component() {
            return this.componentMap[this.organization.data.current.key];
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
</style>
