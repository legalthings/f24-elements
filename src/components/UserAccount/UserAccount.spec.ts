import { shallowMount } from '@vue/test-utils';
import UserAccount from '@/components/UserAccount/UserAccount.vue';

let wrapper: any;

const $route = {
    name: 'user-details',
    params: {
        slug: 'wrong-slug'
    }
};
const $router = {
    replace: jest.fn()
};

describe('User Profile - Details Block', () => {
    beforeEach(() => {
        wrapper = shallowMount(UserAccount, {
            stubs: ['router-link', 'UiIcon', 'UiGridA'],
            mocks: {
                $vmq: jest.fn(),
                $t: jest.fn(),
                $route,
                $router
            }
        });
    });

    it('Render component', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Should evaluate the router and fall back to the default config', async () => {
        expect(wrapper.vm.current.slug).toBe('my-account');
        expect(wrapper.vm.$router.replace).toBeCalledWith({
            name: 'user-details',
            params: { slug: 'my-account' }
        });
    });

    it('Should evaluate the router and return the correct config', async () => {
        wrapper.vm.$route.params.slug = 'security';
        expect(wrapper.vm.current.slug).toBe('security');
    });
});
