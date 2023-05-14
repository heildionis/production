import { CSSProperties, FC, memo, useMemo } from 'react';

import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import cls from './Avatar.module.scss';

import AvatarIcon from '@/shared/assets/icons/avatar.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean;
}

/**
 * Устарел, используем новые из папки redesigned
 * @deprecated
 */
export const Avatar: FC<AvatarProps> = memo((props: AvatarProps) => {
    const { className, src, alt, size, fallbackInverted } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size]
    );

    const fallback = <Skeleton width={size} height={size} border='50%' />;

    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={AvatarIcon}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
            src={src}
            alt={alt}
        />
    );
});
