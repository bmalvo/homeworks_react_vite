import { useContext } from "react"
import { CounterContext } from "./CounterContext"

export const useCounterContext = () => {

    const context = useContext(CounterContext);

    return context;
}