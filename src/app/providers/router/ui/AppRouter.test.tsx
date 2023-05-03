import { screen } from '@testing-library/react';

import { AppRouter } from './AppRouter';

import { UserRole } from '@/entities/User';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/constants/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('app/router/AppRouter', () => {
    test('Страница должна отрендериться', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, {
            route: '/someroute',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Редирект неавторизованного пользователя на главную', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ к закрытой странице для авторизованного пользователя', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _initied: true,
                    authData: { id: '', username: '' },
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ к закрытой запрещен (отсутствует роль)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _initied: true,
                    authData: { id: '', username: '' },
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ к закрытой разрешен (есть роль)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _initied: true,
                    authData: { id: '', username: '', roles: [UserRole.ADMIN] },
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
