import { useState, useTransition } from "react"

const getValues = () => {

  const elements: number[] = []; 

  for (let i = 0; i < 10000; i++) {
    
    elements.push(Math.round(Math.random() * 10000))
  }

  return elements;
}

export const App = () => {

  const [elements, setElements] = useState<number[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [pending, startTransition] = useTransition();

  const generate = () => {

    setCounter(prev => prev + 1);
    startTransition(() => {
      setElements(getValues());
    })
  }

  return <>
    <div>
      <button onClick={generate}>set elements</button>
      <h2>Clicks: { counter}</h2>
      <ul>
        {elements.map((el, index) => <li key={index}>
          <div>
            <h2>{el}</h2>
            <p>this is {index + 1} value: { el}</p>
          </div>
        </li>)}
      </ul>
    </div>
  </>
}