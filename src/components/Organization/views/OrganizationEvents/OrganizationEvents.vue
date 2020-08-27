<template>
    <div class="shareholders-details">
        <PageBlock
            :back-button="{name: 'organization', label: $t('NAVIGATION.OVERVIEW'), params: {organizationId: $route.params.organizationId}}"
        >
            <template #content>
                <PageSection>
                    <div slot="header">
                        {{ $t('SIDEBAR_MENU.EVENTS') }}
                    </div>
                    <UiDropdownRequestChange slot="options" />
                    <div slot="content">
                        <OrganizationDetailsEvents
                            :organization="organization"
                            :events="organization.eventsData.events"
                        />
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
    import OrganizationDetailsEvents from '@/components/Organization/components/OrganizationDetailsEvents.vue';
    import UiDropdownRequestChange from '@/components/Global/UiDropdownRequestChange/UiDropdownRequestChange.vue';
    import OrganizationService from '../../services/organization.service';

    @Component({
        components: {
            UiDropdownRequestChange,
            OrganizationDetailsEvents,
            PageSection,
            PageBlock
        }
    })

    export default class OrganizationEvents extends Vue {
        @Prop() organization!: OrganizationService;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
</style>
