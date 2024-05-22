import { useEffect, useState } from "react";

export const useCounter = (initialValue: number, delay: number) => {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, delay)

        return () => {
            clearInterval(interval);
        }
    }, [])
    
    return counter
};
