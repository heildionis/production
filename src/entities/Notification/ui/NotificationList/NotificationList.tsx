import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui';
import { useGetNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList: FC<NotificationListProps> = memo((props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data, isLoading } = useGetNotifications(undefined, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack gap='16' fullWidth className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width='100%' border='8px' height={80} />
                <Skeleton width='100%' border='8px' height={80} />
                <Skeleton width='100%' border='8px' height={80} />
            </VStack>
        );
    }

    return (
        <VStack
            gap='16'
            fullWidth
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem
                    key={item.id}
                    item={item}
                />
            ))}
        </VStack>
    );
});
