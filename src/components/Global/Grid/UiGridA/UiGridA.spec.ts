import { shallowMount } from '@vue/test-utils';
import UiGridA from '@/components/Global/Grid/UiGridA/UiGridA.vue';

let wrapper: any;

describe('Ui Grid A', () => {
    beforeEach(() => {
        wrapper = shallowMount(UiGridA, {
            slots: {
                content: '<div class="content"></div>',
                menu: '<div class="menu"></div>'
            }
        });
    });

    it('Render component', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Render component content', async () => {
        const content = wrapper.findAll('.content');
        expect(content.length).toBe(1);
    });

    it('Render component menu', async () => {
        const menu = wrapper.findAll('.menu');
        expect(menu.length).toBe(1);
    });
});
