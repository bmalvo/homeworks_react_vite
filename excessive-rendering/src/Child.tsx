import { memo } from "react";

type ChildProps = {
    value: number[];
}

const heavyCalculation = () => {
    console.log('rendering start')
    for (let i; i < 10000000; i++) {}
    console.log('rendering stop')
    return 100
}

export const Child = memo(({value}: ChildProps) => {

    const calculatedValue = heavyCalculation();

    return <h1>Hello, World! {value.join() }{ calculatedValue }</h1>
})
