import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Sidebar } from './Sidebar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const Light = Template.bind({});
Light.decorators = [
    StoreDecorator({ user: { authData: { id: '1', username: 'test ' } } }),
];

export const Dark = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: { id: '1', username: 'test ' } } }),
];

export const NoAuth = Template.bind({});
NoAuth.decorators = [StoreDecorator({})];
