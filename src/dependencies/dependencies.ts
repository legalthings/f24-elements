import Vue from 'vue';
import Buefy from 'buefy';
import UiIcon from '@/components/Global/UiIcon/UiIcon.vue';
import VueMediaQuery from 'vue-media-q';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '@/helpers/validators';
import Rollbar from 'vue-rollbar';
import VueBreadcrumbs from 'vue-2-breadcrumbs';
import VueCountryCode from 'vue-country-code';

if (process.env.NODE_ENV === 'production') {
    Vue.use(Rollbar, {
        accessToken: 'f4a8c3b5eed844d98e7fe7174fcd6be5',
        captureUncaught: true,
        captureUnhandledRejections: true,
        enabled: true,
        environment: 'production',
        payload: {
            client: {
                javascript: {
                    code_version: process.env.VUE_APP_BUILD_VERSION,
                    source_map_enabled: true,
                    guess_uncaught_frames: true
                }
            }
        }
    });
}

Vue.component('UiIcon', UiIcon);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VueCountryCode);
Vue.use(VueBreadcrumbs);

const breakpoints = {
    xs: 425,
    sm: 769,
    md: 1024,
    lg: Infinity
};

Vue.use(VueMediaQuery, breakpoints);
Vue.use(Buefy, { defaultIconPack: 'fa' });

if (process.env.NODE_ENV !== 'production') {
    Vue.use(i18nEditor);
}

/*
    EVENT SERVICE
    $f24.eventService;

    Event service should be use to emit subscribe to custom events

    this.$eventService.emit('myCustomEventName', data) // Emit the event 'myCustomEventName' with some data
    this.$eventService.on('myCustomEventName', handler) // Subscribe to that event name
    this.$eventService.off('myCustomEventName', handler) // Remove the listener

    Don't never forget to unregister from the event
 */

// Here we set of a global services that will be available inside templates using $ or this.$ inside the template script.

Vue.prototype.$f24 = {
    dashboardService: dashboardService,
    isFalseAndNotUndefined: isFalseAndNotUndefined,
    convertToLocaleString: convertToLocaleString,
    formatDate: formatDate,
    eventService: new Vue()
};

export const $f24 = Vue.prototype.$f24;
