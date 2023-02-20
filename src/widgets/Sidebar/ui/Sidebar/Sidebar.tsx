import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    AppLink,
    Button,
    LangSwitcher,
    ThemeSwitcher,
} from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import AboutIcon from 'shared/assets/icons/list.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid='sidebar-toggle'
                type='button'
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    theme='secondary'
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme='secondary'
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
};
