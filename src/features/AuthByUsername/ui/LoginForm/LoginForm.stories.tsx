import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'feature/AuthByUsername/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: 'name',
        password: 'password',
    },
})];

export const Secondary = Template.bind({});
Secondary.decorators = [
    ThemeDecorator(Theme.DARK),
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
