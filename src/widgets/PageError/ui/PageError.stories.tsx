import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { PageError } from './PageError';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'widget/PageError',
    component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Primary = Template.bind({});

export const Light = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
