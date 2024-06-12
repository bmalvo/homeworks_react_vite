import { useRef } from "react";
import { Input } from "./Input";
import { ForwardedRefInput } from "./ForwardedRefInput";
import { LimitedForwardedRefInput, PartialHTMLInputElement } from "./LimitedForwardedRefInput";

export const App = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const inputSecondRef = useRef<HTMLInputElement>(null);
  const inputThirdRef = useRef<HTMLInputElement>(null);
  const inputFourthRef = useRef<PartialHTMLInputElement>(null);

  const handleClick = () => {

    inputRef.current?.focus();

  }

  return <>
    <button onClick={handleClick}>Focus</button>
    <input type="text" ref={inputRef} />
    <Input passedRef={inputSecondRef} value="Lorem Ipsum" />
    <ForwardedRefInput value="Lorem Polem" ref={ inputThirdRef} />
    <LimitedForwardedRefInput value="Lorem Polem" ref={ inputFourthRef} />
  </>
}
