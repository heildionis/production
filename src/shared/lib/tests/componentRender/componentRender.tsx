import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { FC, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider/testing';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { Theme } from '@/shared/constants/theme';
// eslint-disable-next-line heildionis-plugin/layer-imports
import '@/app/styles/index.scss';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

export interface TestProviderProps {
    children: ReactNode;
    options?: ComponentRenderOptions;
}

export const TestProvider: FC<TestProviderProps> = ({
    children,
    options = {},
}) => {
    const { route = '/', initialState, asyncReducers, theme } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialState}
            >
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme}>
                        {children}
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};
export function componentRender(
    component: ReactNode,
    options: ComponentRenderOptions = {}
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
