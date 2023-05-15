import { Notification } from '../model/types/notifications';

import { rtkApi } from '@/shared/api/rtkApi';

const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNofications: build.query<Notification[], void>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useGetNotifications = notificationsApi.useGetNoficationsQuery;
