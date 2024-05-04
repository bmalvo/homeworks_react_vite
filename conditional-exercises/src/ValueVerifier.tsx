import { useEffect, useState } from "react"

export const ValueVerifier = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevcounter => prevcounter + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, []);
 
    const evenOrOdd = counter % 2 === 0 ? 'even' : 'odd';

    const greatestDivisor = () => {
        if (counter === 0) {
     return 1
    } else if (counter % 2 === 0 ) {
    return counter / 2
    } else {
        const half = Math.floor(counter / 2)
        for (let i = half; i >= 1; i--) {
            if (counter % i === 0) {
                return i
            }
        }
 }
    }
    
    const isDivisible = () => {
        //check if counter is divisible by 2, 3 or 5
        const two = counter % 2 === 0 ? '2, ' : null;
        const three = counter % 3 === 0 ? '3, ' : null;
        const five = counter % 5 === 0 ? '5' : null;
        return <>
            <span>{two}</span><span>{three}</span><span>{ five}</span>
        </>
    }

    return <>
        <h1>{counter}</h1>
        <p>Counter is: {evenOrOdd}</p>
        <p>Counter greatest divisor is: {greatestDivisor()}</p>
        <p>Counter is divisible by: { isDivisible() }</p>
    </>
}
