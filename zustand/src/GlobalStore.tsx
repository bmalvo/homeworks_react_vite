import { useShallow } from "zustand/shallow";
import { useGlobalStroe } from "./store/useGlobalStore"

export const GlobaStore = () => {

    const [a, b, setA, setB] = useGlobalStroe(useShallow(state => [state.a, state.b, state.setA, state.setB]));
    
    return <>
        <div>
            <h1>{a} | {b}</h1>
            <button onClick={() => setA(Math.round(Math.random() * 100))}>Set a</button>
            <button onClick={() => setB(Math.round(Math.random() * 100))}>Set b</button> 
        </div>
    </>
}