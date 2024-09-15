import { useActionData } from "react-router-dom"

export const Create = () => {

    const data = useActionData();

    if(typeof data !== 'string') return <p>Not a data we expecting...</p>

    return <h1>Create- { data}</h1>
}