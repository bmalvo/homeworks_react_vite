import { useEffect, useState } from "react"

export const FirstCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return <span>{ counter }</span>
}
