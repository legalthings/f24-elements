export default {
    path: '/start',
    component: () => import(/* webpackChunkName: "start-view" */ '../views/Global/StartView.vue'),
    meta: {
        title: 'STARTING_COMPANY',
        roles: ['support']
    },
    children: [
        {
            path: '',
            name: 'start',
            component: () => import(/* webpackChunkName: "start-main" */ '@/components/Start/views/StartMain.vue')
        },
        {
            path: 'incorporation/:product?/:type?/:package?/:urgency?',
            name: 'start-incorporation',
            component: () => import(/* webpackChunkName: "start-incorporation" */ '@/components/Start/views/StartIncorporation.vue')
        },
        {
            path: 'eenmanszaak/:product?/:type?/:package?/:urgency?',
            name: 'start-eenmanszaak',
            component: () => import(/* webpackChunkName: "start-incorporation" */ '@/components/Start/views/StartIncorporation.vue')
        },
        {
            path: 'liquidation/:product?/:type?/:package?/:urgency?',
            name: 'start-liquidation',
            component: () => import(/* webpackChunkName: "start-incorporation" */ '@/components/Start/views/StartIncorporation.vue')
        }
    ]
};
