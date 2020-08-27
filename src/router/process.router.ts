export default {
    path: '/process/:processId',
    component: () => import(/* webpackChunkName: "admin-process-view" */ '@/views/Admin/AdminProcessView.vue'),
    meta: {
        private: true,
        breadcrumb: 'Processes'

    },
    children: [
        {
            path: '/',
            name: 'process-details',
            component: () => import(/* webpackChunkName: "admin-process-details" */ '@/components/Admin/views/AdminProcess.vue'),
            meta: {
                roles: ['notary', 'support', 'bookkeeper']
            }
        }
    ]
};
