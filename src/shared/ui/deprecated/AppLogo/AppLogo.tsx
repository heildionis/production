import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { HStack } from '../Stack';

import cls from './AppLogo.module.scss';

import AppSvg from '@/shared/assets/icons/app_avatar.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
}

/**
 * Устарел, используем новые из папки redesigned
 * @deprecated
 */
export const AppLogo: FC<AppLogoProps> = memo((props: AppLogoProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <HStack
            fullWidth
            justify='center'
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg className={cls.appLogo} />
        </HStack>
    );
});
