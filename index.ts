import {
    UiInputAddress,
    UiInputCheckbox,
    UiInputDatepicker,
    UiInputRadio,
    UiInputSelectbox,
    UiInputText,
    UiInputUpload
} from './src/components/UiFormInputs';
import Vue, { VueConstructor } from 'vue';

export type f24Elements = {
    install(vue: VueConstructor<Vue>): void;
};

export {
    UiInputText,
    UiInputAddress,
    UiInputCheckbox,
    UiInputDatepicker,
    UiInputRadio,
    UiInputSelectbox,
    UiInputUpload
};

const instance: f24Elements = {
    install(vue: VueConstructor<Vue>) {
        class F24Elements {
            constructor() {
                console.log('loaded');
            }
        }

        const reno = new F24Elements();
        console.log(reno);
    }
};

export default instance;
