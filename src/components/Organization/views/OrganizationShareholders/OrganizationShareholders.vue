<template>
    <div class="shareholders-details">
        <PageBlock
            :back-button="{name: 'organization', label: $t('NAVIGATION.OVERVIEW'), params: {organizationId: $route.params.organizationId}}"
        >
            <template #content>
                <PageSection>
                    <div slot="header">
                        {{ $t('SIDEBAR_MENU.SHAREHOLDERS') }}
                    </div>
                    <b-button
                        slot="options"
                        type="is-primary is-padding-small has-icon"
                        href="https://www.firm24.com/wijzigen-onderneming/"
                        tag="a"
                        target="_blank"
                        rounded
                    >
                        <i class="fas fa-people-arrows" />
                        {{ $t('ORGANIZATION.UPDATE_SHAREHOLDERS') }}
                    </b-button>
                    <div slot="content">
                        <OrganizationDetailsShareholders :organization="organization" />
                    </div>
                </PageSection>
            </template>
        </PageBlock>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageBlock from '@/components/Global/Page/PageBlock/PageBlock.vue';
    import PageSection from '@/components/Global/Page/PageSection/PageSection.vue';
    import OrganizationDetailsShareholders
        from '@/components/Organization/views/OrganizationDetails/components/OrganizationDetailsShareholders.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';

    @Component({
        components: {
            OrganizationDetailsShareholders,
            PageSection,
            PageBlock
        }
    })

    export default class OrganizationShareholders extends Vue {
        @Prop() organization!: OrganizationService;
    }
</script>
