import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueI18n from 'vue-i18n';
import f24Elements from './plugins';
// import Buefy from 'buefy';

// Vue.use(Buefy, { defaultIconPack: 'fa' });
Vue.use(VueI18n);

const messages = {
    en: {},
    nl: {}
};
const i18n = new VueI18n({
    messages,
    silentTranslationWarn: true,
    fallbackLocale: 'nl',
    locale: 'en'
});

Vue.use(f24Elements, i18n);

Vue.config.productionTip = false;

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
