import { FC, memo } from 'react';

import { HStack } from '../../deprecated/Stack';

import cls from './AppLogo.module.scss';

import AppSvg from '@/shared/assets/icons/app_avatar.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo: FC<AppLogoProps> = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;

    return (
        <HStack
            fullWidth
            justify='center'
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg
                width={size}
                height={size}
                color='black'
                className={cls.appLogo}
            />
        </HStack>
    );
});
