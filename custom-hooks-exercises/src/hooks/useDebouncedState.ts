import { useEffect, useState } from "react"

export const useDebouncedState = <T>(value: T, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState<T | null>(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        },delay)

        return () => {
            clearTimeout(timeout);
        }
    }, [value, delay])

    return debouncedValue; 
};
