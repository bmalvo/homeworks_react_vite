import { useEffect } from "react";

type Props = {
    value: number;
}

export const CounterLet = ({value}: Props) => {

    let counter = 10;

    useEffect(() => {
        const interval = setInterval(() => {
            counter++;
        }, 1000)

        return () => clearInterval(interval);
    })

    return <h1>{ value } | { counter }</h1>
}