import { useCallback, useEffect, useState } from "react"
import { ChildWithFunction } from "./ChildFithFunction"

export const App = () => {

  const [counter, setCounter] = useState(0);

 

  const foo = useCallback((value: number) => {
    console.log('adding', value)
    setCounter(prevCounter => prevCounter + value)
  },[])

  return <div>
    <p>{counter}</p>
    <ChildWithFunction callback={foo} />
    </div>
}

// import { useState } from "react"
// import { Child } from "./Child";

// export const App = () => {

//   const [counter, setCounter] = useState(0);
//   const [arr, setArr] = useState([5]);

//   const inc = () => {

//     setCounter(prevCounter => prevCounter + 1);
//   }

//   // const arr = useMemo(() => [5], []);

//   const addToArray = () => {
//     setArr(prevArr => [...prevArr, Math.round(Math.random() * 10)])
//   }

//   return <div>
//     <button onClick={inc}>+1</button>
//     <button onClick={addToArray}>add to array</button>
//     <Child value={arr} counter={counter} />
//   </div>
// }