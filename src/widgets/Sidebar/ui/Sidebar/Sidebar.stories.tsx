import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

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
NoAuth.decorators = [
    StoreDecorator({ }),
];
