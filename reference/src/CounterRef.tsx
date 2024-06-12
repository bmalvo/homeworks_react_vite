import { useEffect, useRef } from "react";

type Props = {
    value: number;
}

export const CounterRef = ({ value }: Props) => {

    const counter = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            counter.current++;
        }, 1000)

        return () => clearInterval(interval);
    })

    return <h1>{ value} | { counter.current}</h1>
}