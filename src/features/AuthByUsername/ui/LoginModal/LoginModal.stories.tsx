import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';

export default {
    title: 'feature/AuthByUsername/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        isOpen: true,
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Secondary = Template.bind({});
Secondary.args = {
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];
