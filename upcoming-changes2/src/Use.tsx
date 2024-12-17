import { use } from "react"
import { ThemeContext } from "./context/ThemeContext";


    
export type UseProps = {

    dataPromise: Promise<number[]>;
    visible: boolean;
}

export const Use = ({dataPromise, visible}: UseProps) => {
    
    if (!visible) return <p>i am hidden...</p>
    
    const theme = use(ThemeContext)
    const data = use(dataPromise);

    return <>
        <p>{ theme.mode}</p>
        <ul>
            {data.map((el, index) => <li key={index}>{ el}</li>)}
        </ul>
    </>
}