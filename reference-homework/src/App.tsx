import { useRef } from "react";
import { Homework1 } from "./Homework1"
// import { Homework2, PartialHTMLFormElement } from "./Homework2"
import { Homework2v2 } from "./Homework2v2";

export const App = () => {

  const formRef = useRef<HTMLFormElement>(null);
  
  const handleClick = () => {
    formRef.current?.requestSubmit();
  }

  return <>
    <Homework1 />
    <hr></hr>
    <button onClick={handleClick}>Send form</button>
    {/* <Homework2 ref={formRef} /> */}
    <Homework2v2 formRef={formRef}/>
  </>
}
