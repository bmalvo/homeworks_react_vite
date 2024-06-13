import { useRef } from "react";
import { Exercise1 } from "./Exercise1";

export const App = () => {

  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.focus();
  }

  return <>
  <button onClick={handleClick}>click for focus</button>
  <Exercise1 ref={inputRef}/>
  </>
}
