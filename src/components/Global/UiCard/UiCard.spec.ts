import { shallowMount } from '@vue/test-utils';
import UiCard from '@/components/Global/UiCard/UiCard.vue';

let wrapper: any;

describe('UiCard component', () => {
    beforeEach(() => {
        wrapper = shallowMount(UiCard, {
            propsData: {
                bestSeller: true,
                hasAction: true
            }
        });
    });

    it('Render component', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Should render is-best-seller class', () => {
        const parentWrapper = wrapper.find('.is-best-seller').exists();
        expect(parentWrapper).toBe(true);
    });

    it('Should render BestSeller component', () => {
        const child = wrapper.findComponent({ name: 'BestSeller' }).exists();
        expect(child).toBe(true);
    });

    it('Should render has-action class', () => {
        const child = wrapper.find('.has-action').exists();
        expect(child).toBe(true);
    });
});
