import { useEffect, useState } from "react"

let counter2 = 0;

export const IncorrectCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        counter2 = 0;
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, 1000)

        const interval2 = setInterval(() => {
            counter2++;
        }, 2000)

        return () => {
            clearInterval(interval);
            clearInterval(interval2);
        }
    }, [])

    return <h1>{counter} | { counter2 }</h1>
}
