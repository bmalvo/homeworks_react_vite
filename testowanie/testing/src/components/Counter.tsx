import { useState } from "react";

export type CounterProps = {

    initialValue?: number;
}

export const Counter = ({initialValue}: CounterProps) => {

    const [counter, setCounter] = useState(initialValue || 0);

    const increment = () => {

        setCounter(prev => prev + 1)
    };

    const decrement = () => {

        setCounter(prev => prev - 1)
    };

    return <>
        <h1 data-testid='counter-value'>{counter}</h1>
        <button data-testid='counter-increment' onClick={increment}>+1</button>
        <button data-testid='counter-decrement' onClick={decrement}>-1</button>
    </>
};
