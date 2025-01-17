import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
    <ArticleTypeTabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
