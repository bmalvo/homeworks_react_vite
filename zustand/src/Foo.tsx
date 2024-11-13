import { useFooStore } from "./store/useFooStore"

export const Foo = () => {

    const { value, setValue } = useFooStore();
    
    const setRandomValue = () => {

        setValue(Math.round(Math.random() * 1000));
    }

    return <>
        <div>{value}</div>
        <button onClick={setRandomValue}>set new Value</button>
    </>
}