import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to='/'
                    theme='secondary'
                    className={cls.mainLink}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to='/about'
                    theme='secondary'
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
