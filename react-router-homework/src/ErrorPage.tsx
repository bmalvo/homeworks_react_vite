import { Link } from "react-router-dom"

export const ErrorPage = () => {

    return <>
        <div>
            <h1>An Error occur</h1>
            <Link to='/'>back to homepage</Link>
        </div>
    </>
}