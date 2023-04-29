import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CurrencySelect } from './CurrencySelect';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect />;

export const Primary = Template.bind({});
Primary.args = {};
