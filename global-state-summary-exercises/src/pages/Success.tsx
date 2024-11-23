import { Link } from "@tanstack/react-router"
import { PageHeader } from "../components/PageHeader"

export const Success = () => {

    return <>
        <PageHeader>Transaction succesfull!</PageHeader>
        <p>Your order is processing...</p>
        <Link to="/">Go back to homepage</Link>
        
    </>
}