import Vue, { VueConstructor } from 'vue';

import UiInputText from './src/components/UiFormInputs/UiInputText/UiInputText.vue';
import UiInputAddress from './src/components/UiFormInputs/UiInputAddress/UiInputAddress.vue';
import UiInputCheckbox from './src/components/UiFormInputs/UiInputCheckbox/UiInputCheckbox.vue';
import UiInputDatepicker from './src/components/UiFormInputs/UiInputDatepicker/UiInputDatepicker.vue';
import UiInputRadio from './src/components/UiFormInputs/UiInputRadio/UiInputRadio.vue';
import UiInputSelectbox from './src/components/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';
import UiInputUpload from './src/components/UiFormInputs/UiInputUpload/UiInputUpload.vue';

import f24Elements from './index';

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
