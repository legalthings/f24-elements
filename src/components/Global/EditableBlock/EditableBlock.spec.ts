import { mount } from '@vue/test-utils';
import EditableBlock from '@/components/Global/EditableBlock/EditableBlock.vue';
import { Vue } from 'vue-property-decorator';

let wrapper: any;

describe('Editable Block component', () => {
    beforeEach(() => {
        wrapper = mount(EditableBlock, {
            stubs: ['UiIcon', 'b-button'],
            propsData: {
                saveEventName: 'testEvent',
                isValid: true
            },
            mocks: {
                $t: jest.fn()
            },
            data() {
                return { isEdit: false };
            }
        });
    });

    it('Render component', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Should emit event when button save is clicked', async () => {
        const editButton = wrapper.find('.link');
        editButton.vm.$emit('click');
        await Vue.nextTick();
        const saveButton = wrapper.findAll('b-button-stub').at(1);
        expect(saveButton).toBeTruthy();
        saveButton.vm.$emit('click');
        await Vue.nextTick();
        expect(wrapper.emitted().testEvent).toBeTruthy();
    });
});
