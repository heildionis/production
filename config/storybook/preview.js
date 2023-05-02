import { addDecorator } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { Theme } from '../../src/shared/constants/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app', Theme.LIGHT], color: '#e8e8ea' },
            { name: 'dark', class: ['app', Theme.DARK], color: '#0452ff' },
        ],
    },
};

addDecorator(RouterDecorator);
addDecorator(StyleDecorator);
addDecorator(SuspenseDecorator);
