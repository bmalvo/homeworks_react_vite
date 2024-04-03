import { Exercise2Child } from "./Exercise2_Child"

const Exercise2Parent = () => {
    const handleClick = (fromWho: string) => {
        console.log(`Hello from ${fromWho}`)
    }

    return <>
    <button onClick={() => handleClick('Parent!')}>Click from Parent</button>
    <Exercise2Child callback= {handleClick} />
    </>
}

export { Exercise2Parent }
