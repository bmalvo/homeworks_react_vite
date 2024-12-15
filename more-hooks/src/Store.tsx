import { useSyncExternalStore } from "react"
import { dataStore } from "./store/data";

export const Store = () => {

    const elements = useSyncExternalStore(dataStore.subscribe, dataStore.getElements);

    const handleNewElement = () => {

        dataStore.addNewElement(Math.round(Math.random() * 100).toString())
    }

    return <>
        <button onClick={handleNewElement}>Add new element</button>
        <ul>
            {
                elements.map((el, index) => <li key={index}>{ el}</li>)
            }
        </ul>
    </> 
}