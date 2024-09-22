import { Link } from "react-router-dom"

export const AccessDenied = () => {

    return <>
        <div>
            <h1>Sorry, permission denied.</h1>
            <Link to='/'>Go home</Link>
        </div>
    </>
}