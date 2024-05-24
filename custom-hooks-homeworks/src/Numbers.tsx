import { useNumbers } from "./hooks/useNumbers";

export const Numbers = () => {

    const {numbers, generateNumber, deleteNumber } = useNumbers();
    
    return <>
        <button onClick={generateNumber}>add number</button>
        <ul>
            {numbers.map((number, index) => <li key={index}> <p>{number}</p>
            <button onClick={() => deleteNumber(index)}>delete</button>            
            </li>)}
        </ul>
    </>
}
