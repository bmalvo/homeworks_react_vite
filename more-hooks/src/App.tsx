// import { useDeferredValue, useState } from "react";
// import { Foo } from "./Foo"
// import { Bar } from "./Bar";
// import { Slow } from "./Slow";
// import { useActive } from "./hooks/useActive";
// import { Baz } from "./Baz";
// import { Counter } from "./Counter";
// import { Store } from "./Store";
// import { SecondStore } from "./SecondStore";
import { Effects } from "./effects";


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

  // const [value, setValue] = useState('');
  // const deferredValue = useDeferredValue(value);

  // return <>
  //   <div>
  //     <input type="text" value={value} onChange={e => setValue(e.target.value)} />
  //     <Bar value={ deferredValue} />
  //   </div>
  // </>
  // return <>
// <Slow />
  // </>

  // const value = useActive();

  // return <>
  //   <h1>{ value ? 'Yes' : 'No'}</h1>
  // </>

  // return <>

  // return <>
  //   <Counter />
  // </>

  // return <>
  //   <Store />
  //   <SecondStore />
  // </>

  return <Effects />
}