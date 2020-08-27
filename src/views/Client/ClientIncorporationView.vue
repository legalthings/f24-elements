<template>
    <PageFrame
        :is-valid="isValid"
        :is-loading="isLoading"
        :organization="organization"
    />
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import PageFrame from '@/components/Global/Page/PageFrame/PageFrame.vue';
    import apiService from '@/services/api.service';
    import IncorporationService from '@/components/Incorporation/services/incorporation.service';

    @Component({
        components: { PageFrame }
    })
    export default class ClientIncorporationView extends Vue {
        organization: any = {};
        isLoading = true;
        isValid = false;

        hasNoIncorporation() {
            this.$router.push({ name: 'dashboard' });
            this.$buefy.toast.open({
                message: 'Incorporation was not founded',
                type: 'is-danger'
            });
        }

        async created() {
            this.isLoading = true;
            this.fetchOrganizationData();
            Vue.prototype.$eventService.$on('tickUpdate', this.fetchOrganizationData);
        }

        beforeDestroy() {
            Vue.prototype.$eventService.$off('tickUpdate', this.fetchOrganizationData);
        }

        async fetchOrganizationData() {
            const incorporationId = this.$route.params.incorporationId;

            try {
                const { data, status } = await apiService.get('proxy/processes/' + incorporationId);
                this.isValid = status === 200;
                if (this.isValid) {
                    this.organization = new IncorporationService(data);
                } else {
                    this.hasNoIncorporation();
                }
            } catch (e) {
                console.warn(e);
                this.hasNoIncorporation();
            }

            this.isLoading = false;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
</style>
