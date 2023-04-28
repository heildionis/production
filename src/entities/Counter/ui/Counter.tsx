/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui';
import { getCounterValue } from '../model/selectors/getCouterValue/getCounterValue';
import { counterAtions } from '../model/slice/counterSlice';

interface CounterProps {
}

export const Counter: FC<CounterProps> = (props) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterAtions.increment());
    };

    const decrement = () => {
        dispatch(counterAtions.decrement());
    };

    return (
        <div>
            <h1 data-testid='value-title'>
                value =
                {' '}
                {counterValue}
            </h1>
            <Button
                onClick={increment}
                data-testid='increment-btn'
            >
                increment
            </Button>
            <Button
                onClick={decrement}
                data-testid='decrement-btn'
            >
                decrement
            </Button>
        </div>
    );
};
