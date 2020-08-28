import Vue, { VueConstructor } from 'vue';
import Buefy from 'buefy';
import UiInputText from './src/components/UiFormInputs/UiInputText/UiInputText.vue';
import UiInputCheckbox from './src/components/UiFormInputs/UiInputCheckbox/UiInputCheckbox.vue';
import UiInputDatepicker from './src/components/UiFormInputs/UiInputDatepicker/UiInputDatepicker.vue';
import UiInputRadio from './src/components/UiFormInputs/UiInputRadio/UiInputRadio.vue';
import UiInputSelectbox from './src/components/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';
import UiInputUpload from './src/components/UiFormInputs/UiInputUpload/UiInputUpload.vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import UiIcon from '@/components/UiIcon/UiIcon.vue';
import '@/assets/scss/styles.scss';
import '@/helpers/validators';

export {
    UiInputText,
    UiInputCheckbox,
    UiInputDatepicker,
    UiInputRadio,
    UiInputSelectbox,
    UiInputUpload
};

export type F24Elements = {
    install(Vue: VueConstructor<Vue>): void;
};

const f24Elements: F24Elements = {
    install(Vue) {
        Vue.use(Buefy, { defaultIconPack: 'fa' });
        Vue.component('ValidationObserver', ValidationObserver);
        Vue.component('ValidationProvider', ValidationProvider);
        Vue.component('UiIcon', UiIcon);

        class F24Elements {
            constructor() {
                console.log('loaded');
            }
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const reno = new F24Elements();
    }
};

export default f24Elements;
