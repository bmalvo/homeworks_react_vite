import { useEffect, useState } from "react";
import { useOneTimeRef } from "./hooks/UseOneTimeRef";

const getRandomValue = () => {

    let random = Math.round(Math.random() * 1000)
    console.log('generating...', random)
    
    for (let i = 0; i < 10000000; i++) {
        random += ((random +i) ** 2) % 10000 
    }

    return random;
}

export const OneTimeRef = () => {

    const value = useOneTimeRef(getRandomValue);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter +1)
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return <h1> {counter} | {value.current}</h1>
}
