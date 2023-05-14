import { FC, HTMLAttributes, memo } from 'react';

import cls from './Overlay.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    onClick?: () => void;
}

/**
 * Устарел, используем новые из папки redesigned
 * @deprecated
 */
export const Overlay: FC<OverlayProps> = memo((props: OverlayProps) => {
    const { className, onClick, ...otherProps } = props;

    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
            {...otherProps}
        />
    );
});
