import { VueConstructor } from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        $eventService: any;
        $rollbar: any;
        $f24: any;
    }

    interface VueConstructor {
        $eventService: any;
        $rollbar: any;
        $f24: {
            dashboardService: void;
            isFalseAndNotUndefined: void;
        };
    }
}
