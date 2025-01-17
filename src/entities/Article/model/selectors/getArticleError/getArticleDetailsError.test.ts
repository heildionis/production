import { getArticleDetailsError } from './getArticleDetailsError';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleDetailsError.test', () => {
    test('To have error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toBe('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toBe(undefined);
    });
});
