import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}></div>
            <AppLink
                to={'/'}
                theme={'secondary'}
                className={cls.mainLink}
            >
                Главная
            </AppLink>
            <AppLink
                to={'/about'}
                theme={'secondary'}
            >
                О нас
            </AppLink>
        </div>
    );
};
