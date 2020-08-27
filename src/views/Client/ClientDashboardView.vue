<template>
    <div class="dashboard">
        <HeaderDashboard />
        <div class="container">
            <section class="section">
                <DashboardHeader v-model="selectedFilter" />

                <b-loading
                    :is-full-page="true"
                    :active.sync="isLoading"
                />

                <component
                    :is="listComponent"
                    v-if="!isLoading"
                    :all-organizations="filteredAllOrganizations"
                    :processes-loading="processesLoading"
                    class="mg-top-40"
                />
            </section>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import DashboardHeader from '@/components/Dashboard/components/DashboardHeader/DashboardHeader.vue';
    import HeaderDashboard from '@/components/Global/Header/HeaderDashboard/HeaderDashboard.vue';
    import GalleryView from '@/components/Dashboard/views/GalleryView/GalleryView.vue';
    import ListView from '@/components/Dashboard/views/ListView/ListView.vue';
    import apiService from '@/services/api.service';
    import alertService from '@/services/alert.service';
    import { OrganisationListTypes } from '@/types/organisation.types';
    import incorporationService from '@/services/incorporation.service';

    @Component({
        components: {
            GalleryView,
            HeaderDashboard,
            DashboardHeader
        }
    })
    export default class ClientDashboardView extends Vue {
        processes: Array<any> = [];
        organizations: Array<OrganisationListTypes> = [];
        isLoading = true;
        processesLoading = true;
        selectedFilter = 'ALL';

        async created() {
            this.fetchOrganizationsAndProcesses();
        }

        async fetchOrganizationsAndProcesses() {
            try {
                const { data, status } = await this.getOrganizations();
                if (status === 200) {
                    this.organizations = data
                        .map((d: any) => {
                            return {
                                ...d,
                                statusLabel: incorporationService.statusLabel(d).toUpperCase(),
                                url: incorporationService.link(d)
                            };
                        });
                    this.getProcesses();
                }
            } catch (e) {
                alertService.dangerMessage('Something went wrong, please try again in a few minutes');
                throw new Error(e);
            } finally {
                this.isLoading = false;
            }
        }

        get filteredAllOrganizations() {
            return this.selectedFilter === 'ALL' ? this.allOrganizations : this.allOrganizations.filter(o => o.statusLabel.toUpperCase() === this.selectedFilter);
        }

        get allOrganizations() {
            return [...this.organizations, ...this.processes];
        }

        get listComponent() {
            return this.$vmq.xs || this.$vmq.sm || this.$store.state.applicationStore.dashboardView === 'button-list' ? ListView : GalleryView;
        }

        async getProcesses() {
            try {
                this.processes = await incorporationService.getProcesses();
            } catch (e) {
                alertService.dangerMessage('Something went wrong, please try again in a few minutes');
            } finally {
                this.processesLoading = false;
            }
        }

        async getOrganizations() {
            const config = [
                {
                    key: 'limit',
                    value: '100'
                }
            ];
            return apiService.get('organizations', config, { cache: true });
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    /deep/ .load-processes {
        padding: 5 * $margin-default 2 * $margin-default;
        position: relative;
        border-radius: $border-radius;
        margin-bottom: 3 * $margin-default;
        overflow: hidden;
    }
</style>
