import { useState, useTransition } from "react"

const randomize = () => {

    const elements: { label: string, id: number }[] = [];
    const random = Math.round(Math.random() * 1000);
    

    for (let i = 0; i < 20000; i++) {

        elements.push({label: `element-${random}-${i}`, id: i})
    }

    return elements;
}

export const Slow = () => {

    const [elements, setElements] = useState<{ label: string, id: number }[]>([]);
    const [counter, setCounter] = useState(0);
    const [isPending, startTransition] = useTransition();

    const getData = () => {

        setCounter(prev => prev + 1)
        startTransition(() => {

            setElements(randomize());
        })
    }

    return <>
        <h1>{counter}</h1>
        <div>
            <button onClick={getData}>generate</button>
            {isPending ? <p>Loading...</p> : <ul>
                {elements.map((el) => <li key={el.id}>{el.label}</li>)}
            </ul>}
        </div>
    </>
}