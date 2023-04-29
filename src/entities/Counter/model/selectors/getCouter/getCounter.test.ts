import { getCounter } from './getCounter';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getCounter.test', () => {
    test('getCounter to be equal', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
