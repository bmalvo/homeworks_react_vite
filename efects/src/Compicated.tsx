import { useState } from "react";

const complicatedCalculation = (val: number) => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
        result += val * i
    }

    return result;
}

export const Complicated = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const increment1 = () => {
        setCounter1(prevCounter => prevCounter + 1)
    }

    const increment2= () => {
        setCounter2(prevCounter => prevCounter + 1)
    }

    const computedValue = complicatedCalculation(counter1);

    return (
        <>
            <h3>{computedValue}</h3>
            <button onClick={increment1}>{counter1}</button>
            <button onClick={increment2}>{counter2}</button>
        </>
    )
}
