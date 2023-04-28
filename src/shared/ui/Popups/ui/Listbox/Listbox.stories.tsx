import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Listbox } from './Listbox';

export default {
    title: 'shared/Popups/Listbox',
    component: Listbox,
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: 'value',
    items: [
        { content: 'content', value: '123' },
        { content: 'content', value: '1232' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    value: 'value',
    items: [
        { content: 'content', value: '123' },
        { content: 'content', value: '1232' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    value: 'value',
    items: [
        { content: 'content', value: '123' },
        { content: 'content', value: '1232' },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    value: 'value',
    items: [
        { content: 'content', value: '123' },
        { content: 'content', value: '1232' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    value: 'value',
    items: [
        { content: 'content', value: '123' },
        { content: 'content', value: '1232' },
    ],
};
