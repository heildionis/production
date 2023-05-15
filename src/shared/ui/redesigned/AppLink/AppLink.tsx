import { memo, ReactNode, type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import cls from './AppLink.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export type AppLinkVariant = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: ReactNode;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        variant = 'primary',
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
