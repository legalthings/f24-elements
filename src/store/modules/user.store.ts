import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { UserStoreTypes } from '@/types/user.types';
import apiService from '@/services/api.service';

export const state: UserStoreTypes = {
    session: {}
};

const getters: GetterTree<UserStoreTypes, any> = {
    user: state => state.session?.user,
    organization: state => state.session?.organization,
    type: state => state.session.organization?.types,
    isNotary: (state, getters) => getters.organization?.types.some(t => (t === 'notary')),
    isSupport: (state, getters) => getters.organization?.types.some(t => (t === 'support')),
    isClient: (state, getters) => getters.organization?.types.some(t => (t === 'client')),
    isAdvisor: (state, getters) => getters.organization?.types.some(t => (t === 'bookkeeper')),
    isAdmin: (state, getters) => getters.isNotary || getters.isSupport
};

const mutations: MutationTree<UserStoreTypes> = {
    updateSession(state, v) {
        state.session = v;
    },
    updateUser(state, v) {
        state.session.user = v;
    },
    cleanSession(state) {
        state.session = {};
    }
};

const actions: ActionTree<UserStoreTypes, any> = {
    async updateSessionFromApi({ commit, state }) {
        const id = state.session.user.id;
        try {
            const { status, data } = await apiService.get('users/' + id);
            if (status === 200) {
                commit('updateUser', data);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }
};

export const userStore: Module<UserStoreTypes, any> = {
    state,
    actions,
    getters,
    mutations,
    namespaced: true
};
