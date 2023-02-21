import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCouter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
