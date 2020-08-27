import store from '@/store';

export default {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "global-dashboard" */ '../views/Global/DashboardView.vue'),
    redirect: () => {
        let redirect = { name: 'client-dashboard' };

        if (store.getters['userStore/isSupport']) {
            redirect = { name: 'support-dashboard' };
        }
        if (store.getters['userStore/isNotary']) {
            redirect = { name: 'notary-dashboard' };
        }
        if (store.getters['userStore/isAdvisor']) {
            // TODO For now the flag is called advisor, this may will change
            redirect = { name: 'advisor-dashboard' };
        }
        return redirect;
    },
    meta: {
        private: true,
        title: 'DASHBOARD',
        breadcrumb: 'Dashboard'
    },
    children: [
        {
            path: 'client',
            name: 'client-dashboard',
            component: () => import(/* webpackChunkName: "client-dashboard" */ '../views/Client/ClientDashboardView.vue')
        },
        {
            path: 'support',
            component: () => import(/* webpackChunkName: "support-dashboard" */ '../views/Admin/AdminDashboardView.vue'),
            meta: {
                roles: ['support']
            },
            children: [
                {
                    path: '/',
                    name: 'support-dashboard',
                    component: () => import(/* webpackChunkName: "support-dashboard" */ '@/components/Admin/views/AdminProcesses.vue')
                },
                {
                    path: 'processes',
                    name: 'support-organizations',
                    component: () => import(/* webpackChunkName: "support-processes" */ '@/components/Admin/views/AdminOrganizations.vue')
                },
                {
                    path: 'organizations/add',
                    name: 'add-organization',
                    component: () => import(/* webpackChunkName: "support-add-organization" */ '@/components/Admin/views/AdminAddOrganization.vue')
                }
            ]
        },
        {
            path: 'notary',
            component: () => import(/* webpackChunkName: "notary-dashboard" */ '../views/Admin/AdminDashboardView.vue'),
            meta: {
                roles: ['notary', 'support']
            },
            children: [
                {
                    path: '/',
                    name: 'notary-dashboard',
                    component: () => import(/* webpackChunkName: "notary-organizations" */ '@/components/Admin/views/AdminOrganizations.vue')
                },
                {
                    path: 'processes',
                    name: 'notary-processes',
                    component: () => import(/* webpackChunkName: "notary-processes" */ '@/components/Admin/views/AdminProcesses.vue')
                }
            ]
        },
        {
            path: 'advisor',
            component: () => import(/* webpackChunkName: "advisor-dashboard" */ '../views/Advisor/AdvisorDashboardView.vue'),
            meta: {
                roles: ['bookkeeper', 'support']
            },
            children: [
                {
                    path: '/',
                    name: 'advisor-dashboard',
                    component: () => import(/* webpackChunkName: "advisor-organizations" */ '@/components/Advisor/views/AdvisorDashboard.vue')
                },
                {
                    path: 'processes',
                    name: 'advisor-processes',
                    component: () => import(/* webpackChunkName: "advisor-processes" */ '@/components/Advisor/views/AdvisorProcesses.vue'),
                    meta: {
                        breadcrumb: 'Processes'
                    }
                },
                {
                    path: 'organizations',
                    name: 'advisor-organizations',
                    component: () => import(/* webpackChunkName: "advisor-processes" */ '@/components/Admin/views/AdminOrganizations.vue'),
                    meta: {
                        breadcrumb: 'Organizations'
                    }
                },
                {
                    path: 'leads',
                    name: 'advisor-leads',
                    component: () => import(/* webpackChunkName: "advisor-processes" */ '@/components/Advisor/views/AdvisorLeads.vue'),
                    meta: {
                        breadcrumb: 'Leads'
                    }
                }
            ]
        }
    ]
};
