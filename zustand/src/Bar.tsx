import { useFooStore } from "./store/useFooStore"

export const Bar = () => {

    const otherValue = useFooStore(state => state.otherValue)
    const increaseOtherValue = useFooStore(state => state.increaseOtherValue)

    const increase = () => {

        increaseOtherValue();
    }

    return <>
        <div>{ otherValue}</div>
        <button onClick={increase}>increase</button>
    </>
}