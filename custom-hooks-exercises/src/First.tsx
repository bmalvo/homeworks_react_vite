import { useCounter } from "./hooks/useCounter";

export const First = () => {
    const counter = useCounter(10, 1000);

  return <h1>{counter}</h1>
}
