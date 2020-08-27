export default {
    path: '/user-details',
    component: () => import(/* webpackChunkName: "user-details" */ '../views/Global/UserAccountView.vue'),
    name: 'user-detail',
    meta: {
        private: true,
        title: 'USER_DETAILS'
    },
    children: [
        {
            path: ':slug',
            name: 'user-details',
            component: () => import(/* webpackChunkName: "user-account" */ '@/components/UserAccount/UserAccount.vue')
        },
        {
            path: '/user-details',
            redirect: { path: '/user-details/my-account' }
        }
    ]
};
