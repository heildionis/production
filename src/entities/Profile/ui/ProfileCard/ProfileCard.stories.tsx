import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Denis',
        lastname: 'Sarzhan',
        age: 18,
        city: 'Donetsk',
        username: 'neospectrum',
        country: Country.Ukraine,
        currency: Currency.RUB,
        id: '1',
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
