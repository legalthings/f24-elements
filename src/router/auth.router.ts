export default {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Global/AuthView.vue'),
    children: [
        {
            path: 'resetPassword',
            name: 'reset-password',
            component: () => import(/* webpackChunkName: "reset-password" */ '@/components/Auth/ResetPassword/ResetPassword.vue')
        },
        {
            path: 'forgot-password',
            name: 'forgot-password',
            component: () => import(/* webpackChunkName: "forgot-password" */ '@/components/Auth/ForgotPassword/ForgotPassword.vue')
        },
        {
            path: 'register',
            name: 'register',
            component: () => import(/* webpackChunkName: "register-user" */ '@/components/Auth/RegisterUser/RegisterUser.vue')
        },
        {
            path: 'invitation',
            name: 'invitation',
            component: () => import(/* webpackChunkName: "user-invitation" */ '@/components/Auth/UserInvitation/UserInvitation.vue')
        },
        {
            path: '*',
            redirect: { name: 'login' }
        }
    ]
};
