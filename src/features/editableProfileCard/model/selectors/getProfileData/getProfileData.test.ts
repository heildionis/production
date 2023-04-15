import { StateSchema } from 'app/providers/StoreProvider';
import { mockedProfileJest } from 'entities/Profile';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should work with filled state', () => {
        const data = { ...mockedProfileJest };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
