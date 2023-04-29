import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { LoginModal } from './LoginModal';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'feature/AuthByUsername/LoginModal',
    component: LoginModal,
    args: {
        isOpen: true,
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});

Primary.decorators = [ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        loginForm: {
            username: 'name',
            password: 'password',
        },
    }),
];

export const Secondary = Template.bind({});

Secondary.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'name',
            password: 'password',
        },
    }),
];

export const withError = Template.bind({});
withError.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'name',
            password: 'password',
            error: 'message',
        },
    }),
];

export const withErrorDark = Template.bind({});
withErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'name',
            password: 'password',
            error: 'message',
        },
    }),
];

export const Loading = Template.bind({});
Loading.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'name',
            password: 'password',
            isLoading: true,
        },
    }),
];

export const LoadingDark = Template.bind({});
LoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'name',
            password: 'password',
            isLoading: true,
        },
    }),
];
