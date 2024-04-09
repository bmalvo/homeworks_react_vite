import { useState } from "react";
import { StateWithArray } from "./StateWithAray";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }
    
  const reset = () => {
      setCounter(0);
  }

  return (<>
    <h1>{ counter}</h1>
    <button onClick={increment}>+1</button>
    <button onClick={reset}>Reset</button>
    <StateWithArray />
  </>)
}

export { App }
