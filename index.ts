import formInputs from './src/components/UiFormInputs';
import Vue, { VueConstructor } from 'vue';

export type f24Elements = {
    install(vue: VueConstructor<Vue>): void;
};

export {
    formInputs
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
