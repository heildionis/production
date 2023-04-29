import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ProfilePage from './ProfilePage';

import { mockedProfileData } from '@/entities/Profile';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            ...mockedProfileData,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
    profile: {
        form: {
            ...mockedProfileData,
        },
    },
})];
