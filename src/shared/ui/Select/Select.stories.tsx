import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    args: {
        label: 'Укажите значение',
        options: [
            { value: '1', content: 'First' },
            { value: '2', content: 'Second' },
            { value: '3', content: 'Third' },
        ],
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

export const Readonly = Template.bind({});
Readonly.args = {
    readonly: true,
};
