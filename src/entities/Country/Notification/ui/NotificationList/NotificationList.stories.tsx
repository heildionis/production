import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Вам пришло уведомление',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Вам пришло уведомление',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'Вам пришло уведомление',
                },
            ],
        },
    ],
};
