/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';

import { useCounterValue } from '../model/selectors/getCouterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui/Button';

interface CounterProps {
}

export const Counter: FC<CounterProps> = (props) => {
    const counterValue = useCounterValue();
    const { decrement, increment, add } = useCounterActions();

    const onAdd = () => {
        add(5);
    };

    const onIncrement = () => {
        increment();
    };

    const onDecrement = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid='value-title'>
                value =
                {' '}
                {counterValue}
            </h1>
            <Button
                onClick={onAdd}
                // data-testid='increment-btn'
            >
                Add 5
            </Button>
            <Button
                onClick={onIncrement}
                data-testid='increment-btn'
            >
                increment
            </Button>
            <Button
                onClick={onDecrement}
                data-testid='decrement-btn'
            >
                decrement
            </Button>
        </div>
    );
};
