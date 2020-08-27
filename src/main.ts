import './hooks';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/assets/scss/styles.scss';

// Here goes all external dependencies
import '@/dependencies/dependencies';
import i18n from '@/dependencies/i18n';
import applicationService from '@/services/application.service';
import languageService from '@/services/language-service';
import VueTagManager from 'vue-tag-manager';

if (process.env.NODE_ENV === 'production') {
    Vue.use(VueTagManager, {
        gtmId: process.env.VUE_APP_GTM
    });
}

Vue.config.productionTip = false;

async function createVue() {
    await applicationService.startSession();

    // Set language
    languageService.setUserLanguage();

    new Vue({
        router,
        store,
        i18n,
        created: () => applicationService.init(),
        render: h => h(App)
    }).$mount('#app');
}

createVue();
