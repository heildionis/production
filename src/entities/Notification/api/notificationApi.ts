import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notifications';

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
