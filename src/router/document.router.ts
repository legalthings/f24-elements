export default {
    path: '/document/:organizationId',
    component: () => import(/* webpackChunkName: "document-create" */ '../views/Client/ClientDocumentCreateView.vue'),
    meta: {
        private: true
    },
    children: [
        {
            path: 'create/:documentId',
            name: 'document-create'
        }
    ]
};
