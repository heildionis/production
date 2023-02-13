import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Button',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Button',
    theme: 'clear',
};
export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Button',
    theme: 'clear',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: 'outline',
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
