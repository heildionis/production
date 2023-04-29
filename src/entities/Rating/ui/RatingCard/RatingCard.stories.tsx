import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    title: 'Оставьте оценку о качестве нашей работы',
};

export const Rated = Template.bind({});
Rated.args = {
    rate: 3,
};

export const WithFeedbackAfterSubmit = Template.bind({});
WithFeedbackAfterSubmit.args = {
    title: 'Оставьте оценку о качестве нашей работы',
    hasFeedback: true,
    feedbackTitle: 'Оценка поставлена!!!',
};
