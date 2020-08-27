export default {
    path: '/organization/:organizationId',
    component: () => import(/* webpackChunkName: "organization-view" */ '../views/Client/ClientOrganizationView.vue'),
    meta: {
        private: true
    },
    children: [
        {
            path: '/',
            name: 'organization',
            component: () => import(/* webpackChunkName: "organization" */ '@/components/Organization/Organization.vue')
        },
        {
            path: 'shareholder/:shareholderId',
            name: 'organization-shareholder',
            component: () => import(/* webpackChunkName: "organization-detail-shareholder" */ '@/components/Organization/views/ShareholderDetail/ShareholderDetail.vue')
        },
        {
            path: 'organization-details',
            name: 'organization-details',
            component: () => import(/* webpackChunkName: "organization-details" */ '@/components/Organization/views/OrganizationDetails/OrganizationDetails.vue')
        },
        {
            path: 'organization-shareholders',
            name: 'organization-shareholders',
            component: () => import(/* webpackChunkName: "organization-shareholders" */ '@/components/Organization/views/OrganizationShareholders/OrganizationShareholders.vue')
        },
        {
            path: 'organization-events',
            name: 'organization-events',
            component: () => import(/* webpackChunkName: "organization-events" */ '@/components/Organization/views/OrganizationEvents/OrganizationEvents.vue')
        },
        {
            path: 'organization-directors',
            name: 'organization-directors',
            component: () => import(/* webpackChunkName: "organization-directors" */ '@/components/Organization/views/OrganizationDirectors/OrganizationDirectors.vue')
        },
        {
            path: 'organization-documents',
            name: 'organization-documents',
            component: () => import(/* webpackChunkName: "organization-documents" */ '@/components/Organization/views/OrganizationDocuments/OrganizationDocuments.vue')
        },
        {
            path: 'organization-bookkeeping',
            name: 'organization-bookkeeping',
            component: () => import(/* webpackChunkName: "organization-bookkeeping" */ '@/components/Organization/views/OrganizationBookkeeping/OrganizationBookkeeping.vue')
        },
        {
            path: 'organization-contracts',
            name: 'organization-contracts',
            component: () => import(/* webpackChunkName: "organization-contracts" */ '@/components/Organization/views/OrganizationContracts/OrganizationContracts.vue')
        },
        {
            path: 'organization-notary',
            name: 'organization-notary',
            component: () => import(/* webpackChunkName: "organization-notary" */ '@/components/Organization/views/OrganizationNotary/OrganizationNotary.vue'),
            meta: {
                roles: ['notary', 'support']
            }
        }
    ]
};
