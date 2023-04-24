import { FC, HTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    onClick?: () => void;
}

export const Overlay: FC<OverlayProps> = memo((props: OverlayProps) => {
    const { className, onClick, ...otherProps } = props;

    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, { }, [className])}
            {...otherProps}
        />
    );
});
