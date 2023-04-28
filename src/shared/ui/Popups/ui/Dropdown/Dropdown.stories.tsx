import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
    title: 'shared/Popups/Dropdown',
    component: Dropdown,
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
            {
                content: 'third',
            },
        ],
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
};
