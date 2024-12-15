import { useState } from "react";
import { Foo } from "./Foo";

export const App = () => {

  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const increment = () => {

    setCounter(prev => prev + 1)
  }

  const switchToggle = () => {

    setToggle(prev => !prev);
  }

  return <>
    <div>
      <Foo value={counter} toggle={ toggle} />
      <button onClick={increment}>+1</button>
      <button onClick={switchToggle}>toggle</button>

    </div>
  </>
}