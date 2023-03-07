import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';
import AvatarImg from './storybook.jpg';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '1', content: 'First' },
        { value: '2', content: 'Second' },
        { value: '3', content: 'Third' },
    ],
};
