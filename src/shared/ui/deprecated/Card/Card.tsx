import { FC, HTMLAttributes, ReactNode } from 'react';

import cls from './Card.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    fullWidth?: boolean;
}

/**
 * Устарел, используем новые из папки redesigned
 * @deprecated
 */
export const Card: FC<CardProps> = (props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        fullWidth = false,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, { [cls.fullWidth]: fullWidth }, [
                className,
                cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
