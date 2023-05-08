import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import cls from './NotificationList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

interface NotificationListProps {
    className?: string;
}

export const NotificationList: FC<NotificationListProps> = memo(
    (props: NotificationListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const { data, isLoading } = useGetNotifications(undefined, {
            pollingInterval: 10000,
        });

        if (isLoading) {
            return (
                <VStack
                    gap='16'
                    fullWidth
                    className={classNames(cls.NotificationList, {}, [
                        className,
                    ])}
                >
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
                    <NotificationItem key={item.id} item={item} />
                ))}
            </VStack>
        );
    }
);
