export default {
    path: '/incorporation-funnel',
    name: 'incorporation-funnel',
    component: () => import(/* webpackChunkName: "incorporation-funnel" */ '@/views/Global/IncorporationFunnel.vue'),
    meta: {
        roles: ['support']
    },
    children: [
        {
            path: 'shareholders/:step?',
            name: 'incorporation-shareholders',
            component: () => import(/* webpackChunkName: "incorporation-funnel-shareholder" */ '@/components/Funnel/IncorporationFunnel/Shareholders.vue')
        },
        {
            path: 'details',
            name: 'incorporation-details',
            component: () => import(/* webpackChunkName: "incorporation-funnel-details" */ '@/components/Funnel/IncorporationFunnel/Details.vue')
        },
        {
            path: 'documents',
            name: 'incorporation-documents',
            component: () => import(/* webpackChunkName: "incorporation-funnel-documents" */ '@/components/Funnel/IncorporationFunnel/Documents.vue')
        },
        {
            path: 'overview',
            name: 'incorporation-overview',
            component: () => import(/* webpackChunkName: "incorporation-funnel-overview" */ '@/components/Funnel/IncorporationFunnel/Overview.vue')
        },
        {
            path: 'thank-you',
            name: 'incorporation-thank-you',
            component: () => import(/* webpackChunkName: "incorporation-funnel-thank-you" */ '@/components/Funnel/IncorporationFunnel/ThankYou.vue')
        },
        {
            path: '*',
            redirect: { name: 'incorporation-funnel' }
        }
    ]
};
