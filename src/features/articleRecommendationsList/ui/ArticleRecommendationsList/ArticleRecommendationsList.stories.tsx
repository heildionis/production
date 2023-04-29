import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
// @ts-ignore
import withMock from 'storybook-addon-mock';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

import { Article, ArticleType } from '@/entities/Article';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

const article: Article = {
    id: '',
    img: '',
    type: [ArticleType.IT],
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    title: '123',
    subtitle: 'asdadas',
};

export const Normal = Template.bind({});
Normal.args = {

};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};
