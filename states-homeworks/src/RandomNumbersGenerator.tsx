import { useState } from "react"

const RandomNumbersGenerator = () => {
    const [ numbers, setNumbers ] = useState<number[]>([]);

    const addNumber = () => {
        const newNumber = Math.round(Math.random() * 100);

        setNumbers(prevNumbers => [...prevNumbers, newNumber])
    }

    return (
        <>
            <h2>Your lucky numbers are:</h2>
            <ul>
                {numbers.map((number, index) => <li key={index}>{ number}</li>)}
            </ul>
            <button onClick={addNumber}>add number</button>
        </>
    )
}

export { RandomNumbersGenerator }
