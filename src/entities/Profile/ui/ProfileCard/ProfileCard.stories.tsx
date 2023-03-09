import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { mockedProfileData } from 'entities/Profile/lib/tests/mockedProfile';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'feature/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: { ...mockedProfileData },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
