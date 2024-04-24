import { useEffect } from "react"

let counter2 = 0;

export const SecondCounter = () => {

    useEffect(() => {
        counter2 = 0;

        const interval = setInterval(() => {
            counter2++;
        }, 2000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return <span>{ counter2 }</span>
}
