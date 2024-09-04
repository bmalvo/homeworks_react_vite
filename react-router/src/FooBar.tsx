import { useLocation } from "react-router-dom"

export const FooBar = () => {

    const location = useLocation()

    console.log('Location: ', location)

    return <h1>FooBar</h1>
}