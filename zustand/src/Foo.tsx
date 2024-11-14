import { useShallow } from "zustand/shallow";
import { useFooStore } from "./store/useFooStore"


export const Foo = () => {

    const { value, setValue } = useFooStore(useShallow(state => ({
        
        value: state.value,
        setValue: state.setValue
    })))
    
    const setRandomValue = () => {

        setValue(Math.round(Math.random() * 1000));
    }

    return <>
        <div>{value}</div>
        <button onClick={setRandomValue}>set new Value</button>
    </>
}