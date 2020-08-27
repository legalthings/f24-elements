import Vue, { VueConstructor } from 'vue';

import UiInputText from '@/components/UiFormInputs/UiInputText/UiInputText.vue';
import UiInputAddress from '@/components/UiFormInputs/UiInputAddress/UiInputAddress.vue';
import UiInputCheckbox from '@/components/UiFormInputs/UiInputCheckbox/UiInputCheckbox.vue';
import UiInputDatepicker from '@/components/UiFormInputs/UiInputDatepicker/UiInputDatepicker.vue';
import UiInputRadio from '@/components/UiFormInputs/UiInputRadio/UiInputRadio.vue';
import UiInputSelectbox from '@/components/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';
import UiInputUpload from '@/components/UiFormInputs/UiInputUpload/UiInputUpload.vue';

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
