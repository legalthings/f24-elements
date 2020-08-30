import {
    DialogProgrammatic,
    LoadingProgrammatic,
    ModalProgrammatic, NotificationProgrammatic,
    SnackbarProgrammatic, ToastProgrammatic
} from 'buefy/types/components';

export {
    UiInputText,
    UiInputCheckbox,
    UiInputDatepicker,
    UiInputRadio,
    UiInputSelectbox,
    UiInputUpload,
    UiInputAddress,
    UiLanguageSelector,
    UiHeader,
    UiIcon
} from '../components';

declare const f24Elements: {
    install(vue: any, options: any): void;
};

export default f24Elements;

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
        $buefy: any
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        $buefy?: BuefyNamespace;
    }
}
