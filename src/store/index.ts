import Vue from 'vue';
import Vuex from 'vuex';
import { userStore } from '@/store/modules/user.store';
import { applicationStore } from '@/store/modules/application.store';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userStore,
        applicationStore
    },
    plugins: [createPersistedState(
        {
            key: 'FIRM24',
            paths: ['applicationStore']
        }
    )]
});
