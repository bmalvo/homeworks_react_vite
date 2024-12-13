import { useState } from "react";
import { Foo } from "./Foo"

export const App = () => {

  const [visible, setVisible] = useState(false);

  const toggle = () => {

    setVisible(prev => !prev);
  }

  return <>
    <div>
      <button onClick={toggle}>Toggle</button>
    {visible ? <Foo /> : null}
    </div>
  </>
}