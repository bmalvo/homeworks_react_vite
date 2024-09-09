import { useRouteError } from "react-router-dom"

export const ErrorElement = () => {

    const error = useRouteError() as string;

    return <div>
        <h1>Error!</h1>
        <p>something went wrong... { error}</p>
    </div>
}