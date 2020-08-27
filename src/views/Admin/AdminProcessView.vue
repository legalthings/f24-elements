<template>
    <div>
        <HeaderDashboardAdmin />
        <div class="container section">
            <router-view
                v-if="!isLoading"
                :organization="organization"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HeaderDashboard from '@/components/Global/Header/HeaderDashboard/HeaderDashboard.vue';
    import apiService from '@/services/api.service';
    import IncorporationService from '@/components/Incorporation/services/incorporation.service';
    import HeaderDashboardAdmin from '@/components/Global/Header/HeaderDashboardAdmin/HeaderDashboardAdmin.vue';
    import alertService from '@/services/alert.service';
    import UiBreadcrumbs from '@/components/Global/UiBreadcrumbs/UiBreadcrumbs.vue';

    @Component({
        components: {
            UiBreadcrumbs,
            HeaderDashboardAdmin,
            HeaderDashboard
        }
    })
    export default class AdminProcessView extends Vue {
        organization: any = {};
        isLoading = true;
        isValid = false;
        loadingModal = this.$buefy.loading.open({});

        created() {
            this.fetchOrganizationData();
        }

        async fetchOrganizationData() {
            const processId = this.$route.params.processId;

            try {
                const { data, status } = await apiService.get('proxy/processes/' + processId);
                this.isValid = status === 200;
                if (this.isValid) {
                    this.organization = new IncorporationService(data);
                } else {
                    alertService.dangerMessage('Fail to load process');
                }
            } catch (e) {
                console.warn(e);
                alertService.dangerMessage('Fail to load process');
            } finally {
                this.isLoading = false;
                this.loadingModal.close();
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .load-processes {
        padding: 5 * $margin-default 2 * $margin-default;
        position: relative;
        border-radius: $border-radius;
        margin-bottom: 3 * $margin-default;
        overflow: hidden;
    }
</style>
