import './hooks';
import Vue from 'vue';
import App from './App.vue';
import '@/assets/scss/styles.scss';

// Here goes all external dependencies
import '@/dependencies/dependencies';
import i18n from '@/dependencies/i18n';

Vue.config.productionTip = false;

async function createVue() {
    new Vue({
        i18n,
        render: h => h(App)
    }).$mount('#app');
}

createVue();
