import { CounterSchema } from '../types/counterSchema';

import { counterReducer, counterAtions } from './counterSlice';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state as CounterSchema, counterAtions.increment())
        ).toEqual({ value: 11 });
    });

    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state as CounterSchema, counterAtions.decrement())
        ).toEqual({ value: 9 });
    });

    test('should work with empty', () => {
        expect(counterReducer(undefined, counterAtions.increment())).toEqual({
            value: 1,
        });
    });

    test('should work with empty', () => {
        expect(counterReducer(undefined, counterAtions.decrement())).toEqual({
            value: -1,
        });
    });
});
