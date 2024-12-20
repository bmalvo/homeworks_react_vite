import { useShallow } from "zustand/shallow";
import { useFooStore } from "./store/useFooStore"

export const Result = () => {

    const [ result, calculateResult ] = useFooStore(useShallow(state => [state.result, state.calculateResult]));

    const handleResult = () => {

        calculateResult(Math.round(Math.random() * 100));
    }

    return <>
        <div>{result}</div>
        <button onClick={handleResult}>Calculate result</button>
    </>
}