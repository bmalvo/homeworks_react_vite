import { useState } from "react"
import { Child } from "./Child";

export const App = () => {

  const [counter, setCounter] = useState(0);
  const [arr, setArr] = useState([5]);

  const inc = () => {

    setCounter(prevCounter => prevCounter + 1);
  }

  // const arr = useMemo(() => [5], []);

  const addToArray = () => {
    setArr(prevArr => [...prevArr, Math.round(Math.random() * 10)])
  }

  return <div>
    <button onClick={inc}>+1</button>
    <button onClick={addToArray}>add to array</button>
    <Child value={arr} counter={counter} />
  </div>
}