import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ArticlePageGreeting } from './ArticlePageGreeting';

export default {
    title: 'features/ArticlePageGreeting',
    component: ArticlePageGreeting,
} as ComponentMeta<typeof ArticlePageGreeting>;

const Template: ComponentStory<typeof ArticlePageGreeting> = (args) => (
    <ArticlePageGreeting />
);

export const Normal = Template.bind({});
Normal.args = {};
