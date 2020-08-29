import {
    DialogProgrammatic,
    LoadingProgrammatic,
    ModalProgrammatic,
    NotificationProgrammatic,
    SnackbarProgrammatic,
    ToastProgrammatic
} from 'buefy/types/components';
import * as components from 'buefy/src/components';

import {
    UiInputAddress,
    UiInputCheckbox,
    UiInputDatepicker,
    UiInputRadio,
    UiInputSelectbox,
    UiInputText,
    UiInputUpload
} from './src/components';

export {
    UiInputText,
    UiInputCheckbox,
    UiInputDatepicker,
    UiInputRadio,
    UiInputSelectbox,
    UiInputUpload,
    UiInputAddress,
    components
};

declare const f24Elements: {
    install(vue: any, options: any): void;
};

export declare type BuefyNamespace = {
    dialog: typeof DialogProgrammatic,
    loading: typeof LoadingProgrammatic,
    modal: typeof ModalProgrammatic,
    snackbar: typeof SnackbarProgrammatic,
    toast: typeof ToastProgrammatic,
    notification: typeof NotificationProgrammatic

}

declare module 'vue/types/vue' {
    interface Vue {
        $buefy: BuefyNamespace
    }

    interface VueConstructor {
        $buefy: BuefyNamespace;
    }
}

export default f24Elements;
