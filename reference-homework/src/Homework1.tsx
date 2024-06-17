import { useEffect, useRef, useState } from "react";

export const Homework1 = () => {

    const [counter, setCounter] = useState(0);
    const intervalHandle = useRef<number | null>(null);

    const handleStart = () => {

        if (intervalHandle.current) return; 

        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000)
        intervalHandle.current = interval;
    }
    const handleStop = () => {

        if (!intervalHandle.current) return;

        clearInterval(intervalHandle.current);
        intervalHandle.current = null;

    }

    const handleReset = () => {

        setCounter(0);
        handleStop();
        handleStart();
     }
    
    useEffect(() => {

        return () => {
            intervalHandle.current ? clearInterval(intervalHandle.current) : null;
        }
    }, [])

    return <>
        <h1>{counter}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </>
}
