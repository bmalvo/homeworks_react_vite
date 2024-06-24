import { useEffect, useState } from "react"
import { Child } from "./Child";

export const Parent = () => {

    const [counter, setCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

    useEffect(() => {

        const Interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, 1000)

        const secondInterval = setInterval(() => {
            setSecondCounter(prevCounter => prevCounter + 1)
        }, 5000)
        
        return () => {
            clearInterval(Interval);
            clearInterval(secondInterval);
        }
    }, [])

    console.log('rendering Parent');
    
    return <>
        <h1>{counter}</h1>
        <Child second={ secondCounter} />
    </>
}

