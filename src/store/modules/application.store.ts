import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { dashboardKeys } from '@/helpers/contants';

export const state: any = {
    dashboardView: dashboardKeys.LIST_TYPE_DEFAULT,
    organizationsWithFirstTimeAlert: [],
    deepLink: undefined
};

const getters: GetterTree<any, any> = {
    dashboardView: state => state.dashboardView,
    hasOrganizationFirstTimeAlert: state => id => state.organizationsWithFirstTimeAlert.find(s => s === id)
};

const mutations: MutationTree<any> = {
    updateDashboardView(state, v) {
        state.dashboardView = v;
    },
    updateOrganizationsWithFirstTimeAlert(state, v) {
        state.organizationsWithFirstTimeAlert.push(v);
    },
    updateDeepLink(state, v) {
        state.deepLink = v;
    }
};

const actions: ActionTree<any, any> = {};

export const applicationStore: Module<any, any> = {
    state,
    actions,
    getters,
    mutations,
    namespaced: true
};
