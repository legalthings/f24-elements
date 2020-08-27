export default {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Global/LoginView.vue'),
    meta: {
        title: 'LOGIN'
    }
};
