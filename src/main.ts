import Vue from 'vue';
import App from './App.vue';
import router from './router';

import f24Elements from '../index';

Vue.use(f24Elements);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
