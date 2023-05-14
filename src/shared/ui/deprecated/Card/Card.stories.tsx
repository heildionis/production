import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card, CardTheme } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <>Some text about card</>,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: <>Some text about card</>,
    theme: CardTheme.OUTLINED,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    children: <>Some text about card</>,
};
