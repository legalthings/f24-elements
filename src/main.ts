import Vue from 'vue';
import App from './App.vue';
import router from './router';

import f24Elements, { i18n } from '../index';

Vue.use(f24Elements);

Vue.config.productionTip = false;

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
