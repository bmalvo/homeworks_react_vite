import { useRef } from "react";
import { Input } from "./Input";
import { ForwarderRefInput } from "./ForwardedRefInput";

export const App = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const inputSecondRef = useRef<HTMLInputElement>(null);
  const inputThirdRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {

    inputRef.current?.focus();

  }

  return <>
    <button onClick={handleClick}>Focus</button>
    <input type="text" ref={inputRef} />
    <Input passedRef={inputSecondRef} value="Lorem Ipsum" />
    <ForwarderRefInput value="Lorem Polem" ref={ inputThirdRef} />
  </>
}
