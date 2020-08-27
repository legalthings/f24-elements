import Vue, { VueConstructor } from 'vue';
import router from '@/router';
import EditorUi from '@/plugins/i18nEditor/EditorUi.vue';

export type editorPlugin = {
    install(vue: VueConstructor<Vue>): void;
};

const instance: editorPlugin = {
    install() {
        if (router) {
            router.addRoutes([
                {
                    path: '/editor',
                    name: 'editor',
                    component: EditorUi
                }
            ]);
        }
    }
};

export default instance;
