import { shallowMount } from '@vue/test-utils';
import UiHeight from '@/components/Global/UiHeight/UiHeight.vue';

let wrapper: any;

describe('UiHeight', () => {
    beforeEach(() => {
        wrapper = shallowMount(UiHeight);
    });

    it('Render component', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Should emit content height when mounted', () => {
        expect(wrapper.emitted().height).toBeTruthy();
    });
});
