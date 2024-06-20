import { memo, useMemo } from "react";

type ChildProps = {
    value: number[];
    counter: number; 
}

const heavyCalculation = (numbers: number[]) => {
    console.log('rendering stop')
    let result = numbers.length ** 2;
    // eslint-disable-next-line no-empty
    for (let i; i < 100000; i++) {
        result += (result * 2) % 255; 
    }
    console.log('rendering stop')
    return result
}

export const Child = memo(({value, counter}: ChildProps) => {

    const calculatedValue = useMemo(() => heavyCalculation(value), [value]);

    return <h1>Hello, World! {value.join()}{ counter }{ calculatedValue }</h1>
})
