import { getCounterValue } from './getCounterValue';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getCounterValue.test', () => {
    test('getCounter to be equal', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue).toEqual(10);
    });
});
