import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, Drawer, Icon } from 'shared/ui';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useDevice();

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);
    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    if (isMobile) {
        return (
            <>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </>
        );
    }

    return (
        <Popover
            className={classNames('', {}, [className])}
            trigger={trigger}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
