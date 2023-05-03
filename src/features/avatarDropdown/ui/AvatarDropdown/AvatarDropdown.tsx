import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './AvatarDropdown.module.scss';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction='bottom left'
            className={classNames(cls.AvatarDropdown, {}, [className])}
            items={[
                ...(isAdminPanelAvailable ? [{ content: t('Админка'), href: getRouteAdmin() }] : []),
                { content: t('Профиль'), href: getRouteProfile(authData.id) },
                { content: t('Выйти'), onClick: onLogout },
            ]}
            trigger={<Avatar fallbackInverted size={30} src={authData.avatar} />}
        />
    );
});
