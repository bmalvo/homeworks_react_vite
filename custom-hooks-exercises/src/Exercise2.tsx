import { useEffect, useState } from "react"
import { useDebouncedState } from "./hooks/useDebouncedState";

export const Exercise2 = () => {
    const [counter, setCounter] = useState(0);
    const debouncedCounter = useDebouncedState(counter, 300);

    const onClick = () => {
        setCounter(prevCounter => prevCounter + 1); 
    }

    

    useEffect(() => {
        if (debouncedCounter === 0) return;

        console.log('Starting procedure to lanch nukes') 
    }, [debouncedCounter])

    return <>
        <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </>

}