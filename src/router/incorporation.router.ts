export default {
    path: '/incorporation/:incorporationId',
    component: () => import(/* webpackChunkName: "incorporation-view" */ '../views/Client/ClientIncorporationView.vue'),
    meta: {
        private: true
    },
    children: [
        {
            path: '/',
            name: 'incorporation',
            component: () => import(/* webpackChunkName: "incorporation" */ '@/components/Incorporation/Incorporation.vue')
        },
        {
            path: 'step-details',
            name: 'incorporation-step-details',
            component: () => import(/* webpackChunkName: "incorporation-step-details" */ '@/components/Incorporation/views/IncorporationStep.vue')
        }
    ]
};
