import { useCallback, useEffect, useState } from "react"
// import { ChildWithFunction } from "./ChildFithFunction"
import { Parent } from "./Parent"

export const App = () => {

  const [id, setId] = useState(1000)

  const randomizeId = () => {

    setId(Math.round(Math.random() * 10000));
  }

  return <div>
    <button onClick={randomizeId}>Randomize id</button>
    <Parent id={id} />
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