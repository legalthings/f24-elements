import Vue from 'vue';
import VueRouter from 'vue-router';
import authService from '@/services/auth.service';
import pageMetadataService from '@/services/page-metadata.service';
import store from '@/store';

// This is a work around to enable mock the route when doing unit tests
if (!process || process.env.NODE_ENV !== 'test') {
    Vue.use(VueRouter);
}

const routes = [
    {
        path: '/',
        name: 'home'
    },
    {
        path: '*',
        name: 'home',
        component: () => import(/* webpackChunkName: "page404" */ '../views/Global/Page404View.vue')
    }
];

function organizationHasRole(organization: any, to: any): boolean {
    if (!to.meta.roles && !to.matched.some(route => route.meta.roles)) return true;
    if (!organization) return false;
    return organization.types.some(o => to.meta.roles?.includes(o) || to.matched.some(route => route.meta.roles?.includes(o)));
}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes
});

router.beforeEach(async (to, from, next) => {
    const isPrivate = to.meta.private || to.matched.some(route => route.meta.private);
    const roleHasAccess = organizationHasRole(store.state.userStore.session.organization, to);
    const hasLocalSession = !!await authService.hasLocalSession();

    if (!roleHasAccess) {
        return router.replace({ name: 'dashboard' });
    }

    pageMetadataService.setDefaultPageTitle(to);

    if (to.name === 'login' && hasLocalSession) {
        return next({ name: 'dashboard' });
    }

    if (!isPrivate) {
        return next();
    }

    if (to.name !== 'login' && !hasLocalSession && isPrivate) {
        store.commit('applicationStore/updateDeepLink', to);
        return next({ name: 'home' });
    } else {
        if (store.state.applicationStore.deepLink && store.state.applicationStore.deepLink.name) {
            next(store.state.applicationStore.deepLink);
            return store.commit('applicationStore/updateDeepLink', {});
        }
        return next();
    }
});

export default router;
