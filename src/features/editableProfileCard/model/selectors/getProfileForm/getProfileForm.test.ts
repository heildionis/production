import { StateSchema } from '@/app/providers/StoreProvider';
import { mockedProfileJest } from '@/entities/Profile';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should work with filled state', () => {
        const form = { ...mockedProfileJest };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
