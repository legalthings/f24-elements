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
    UiInputAddress
};

declare const f24Elements: {
    install(vue: any, options: any): void;
};

declare module 'vue/types/vue' {
    interface Vue {
        $buefy: any
    }

    interface VueConstructor {
        $buefy: any;
    }
}

export default f24Elements;
