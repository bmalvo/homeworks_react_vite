import { useFooStore } from "./store/useFooStore"

export const Foo = () => {

    const value = useFooStore(state => state.value);
    const setValue = useFooStore(state => state.setValue);
    
    const setRandomValue = () => {

        setValue(Math.round(Math.random() * 1000));
    }

    return <>
        <div>{value}</div>
        <button onClick={setRandomValue}>set new Value</button>
    </>
}