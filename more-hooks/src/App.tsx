import { useDeferredValue, useState } from "react";
import { Foo } from "./Foo"
import { Bar } from "./Bar";

export const App = () => {

  // const [visible, setVisible] = useState(false);

  // const toggle = () => {

  //   setVisible(prev => !prev);
  // }

  // return <>
  //   <div>
  //     <button onClick={toggle}>Toggle</button>
  //   {visible ? <Foo /> : null}
  //   </div>
  // </>

  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  return <>
    <div>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <Bar value={ deferredValue} />
    </div>
  </>
}