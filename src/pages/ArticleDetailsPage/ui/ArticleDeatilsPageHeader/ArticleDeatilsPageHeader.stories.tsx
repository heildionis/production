import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDeatilsPageHeader } from './ArticleDeatilsPageHeader';

export default {
    title: 'shared/ArticleDeatilsPageHeader',
    component: ArticleDeatilsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDeatilsPageHeader>;

const Template: ComponentStory<typeof ArticleDeatilsPageHeader> = (args) => <ArticleDeatilsPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
