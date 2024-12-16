import { useState, useTransition } from "react"

const getValues = (): Promise<number[]> => {

  const elements: number[] = []; 

  for (let i = 0; i < 10000; i++) {
    
    elements.push(Math.round(Math.random() * 10000))
  }

  return new Promise<number[]>(resolve => resolve(elements));
}

export const Transition = () => {

  const [elements, setElements] = useState<number[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [pending, startTransition] = useTransition();

  const generate = () => {

    setCounter(prev => prev + 1);
    startTransition(async() => {
      const response = await getValues();

      startTransition(() => {

        setElements(response);
      })
    })
  }

  return <>
    <div>
      <button onClick={generate}>set elements</button>
      <h2>Clicks: { counter}</h2>
      <ul>
        {pending ? <p>Loading... Please wait...</p> : elements.map((el, index) => <li key={index}>
          <div>
            <h2>{el}</h2>
            <p>this is {index + 1} value: { el}</p>
          </div>
        </li>)}
      </ul>
    </div>
  </>
}