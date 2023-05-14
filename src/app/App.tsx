import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AppRouter } from './providers/router';

import { getUserInited, initAuthData } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

export const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            off={
                <div className={classNames('app', {})}>
                    <Suspense fallback=''>
                        <Navbar />
                        <div className='content-page'>
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div className={classNames('app_redesigned', {})}>
                    <Suspense fallback=''>
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                        />
                    </Suspense>
                </div>
            }
        />
    );
};
