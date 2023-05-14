import { FC } from 'react';

import cls from './Loader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

/**
 * Устарел, используем новые из папки redesigned
 * @deprecated
 */
export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames(cls.Loader, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
