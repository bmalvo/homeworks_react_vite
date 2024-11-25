import { Link } from "@tanstack/react-router"
import { PageHeader } from "../components/PageHeader"
import { useOrderStore } from "../store/useOrderStore";
import { useEffect } from "react";
import { useOrderAccess } from "../hooks/useOrderAccess";

export const Success = () => {

    useOrderAccess('success');

    const placeOrder = useOrderStore(state => state.placeOrder);

    useEffect(() => {

        placeOrder();
    }, []);

    return <>
        <PageHeader>Transaction succesfull!</PageHeader>
        <p>Your order is processing...</p>
        <Link to="/">Go back to homepage</Link>
        
    </>
}