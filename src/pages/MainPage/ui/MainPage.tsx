import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page data-testid='MainPage'>
            {t('Главная страница')}
            <Counter />
        </Page>
    );
});

export default MainPage;
