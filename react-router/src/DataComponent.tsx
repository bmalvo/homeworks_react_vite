import { useLoaderData } from "react-router-dom"

export const DataComponent = () => {

    const data = useLoaderData() as string;
    console.log('render', data)

    return null
}
