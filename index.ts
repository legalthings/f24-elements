import Vue, { VueConstructor } from 'vue';
import Buefy from 'buefy';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import {
    UiIcon,
    UiInputAddress,
    UiInputCheckbox,
    UiInputDatepicker,
    UiInputRadio,
    UiInputSelectbox,
    UiInputText,
    UiInputUpload
} from './src/components';
import '@/assets/scss/styles.scss';
import '@/helpers/validators';

export {
    UiInputText,
    UiInputAddress,
    UiInputCheckbox,
    UiInputDatepicker,
    UiInputRadio,
    UiInputSelectbox,
    UiInputUpload,
    UiIcon
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
