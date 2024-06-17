import { useRef } from "react";
import { Homework1 } from "./Homework1"
import { Homework2, PartialHTMLFormElement } from "./Homework2"

export const App = () => {

  const formRef = useRef<PartialHTMLFormElement>(null);
  
  const handleClick = () => {
    formRef.current?.submit();
  }

  return <>
    <Homework1 />
    <hr></hr>
    <button onClick={handleClick}>Send form</button>
    <Homework2 ref={ formRef} />
  </>
}
