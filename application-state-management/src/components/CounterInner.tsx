import { useCounterContext } from "../context/useCounterContext"

export const CounterInner = () => {

    const {counter, resetCounter} = useCounterContext();

    return <div>
        <h1>{counter}</h1>
        <button onClick={resetCounter}>reset</button>
        </div>
}