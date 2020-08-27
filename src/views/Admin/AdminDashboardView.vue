<template>
    <div class="dashboard">
        <HeaderDashboardAdmin :items="mainMenu" />
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HeaderDashboardAdmin from '@/components/Global/Header/HeaderDashboardAdmin/HeaderDashboardAdmin.vue';
    import i18n from '@/dependencies/i18n';

    @Component({
        components: {
            HeaderDashboardAdmin
        }
    })
    export default class AdminDashboardView extends Vue {
        get mainMenu() {
            return [
                {
                    name: i18n.t('NAVIGATION.PROCESSES'),
                    to: { name: 'support-dashboard' }
                },
                {
                    name: i18n.t('NAVIGATION.ORGANIZATIONS'),
                    to: { name: 'support-organizations' }
                },
                {
                    name: 'Add organization',
                    to: { name: 'add-organization' }
                }
            ];
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .header-buttons {
        display: flex;

        .button {
            margin-right: 2 * $margin-default;
        }
    }
</style>
