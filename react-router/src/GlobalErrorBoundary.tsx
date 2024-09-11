import { useRouteError } from "react-router-dom"

export const GlobalErrorBoundary = () => {

    const error = useRouteError();

    console.log(error);

    return <div>
        <h1>Error!</h1>
        <p>I have no idea what went wrong...</p>
    </div>
}