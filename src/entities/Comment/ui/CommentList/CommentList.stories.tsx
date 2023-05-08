import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello',
            user: { id: '1', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'world',
            user: { id: '2', username: 'Petya' },
        },
    ],
};

Normal.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comments: [],
};
