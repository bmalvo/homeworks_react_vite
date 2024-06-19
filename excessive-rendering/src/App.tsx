import { useRef, useState } from "react"
import { Child } from "./Child";

export const App = () => {

  const [counter, setCounter] = useState(0);
  const arr = useRef([5]);

  const inc = () => {

    setCounter(prevCounter => prevCounter + 1);
  }

  return <div>
    <button onClick={inc}>+1</button>
    <Child value={arr.current} />
  </div>
}