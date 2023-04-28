import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    decorators: [
        StoreDecorator({
            user: {
                authData: undefined,
            },
        }),
    ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});

export const Light = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
