import { Link } from "@tanstack/react-router"
import { PageHeader } from "../components/PageHeader"
import { useEffect } from "react";
import { useOrderAccess } from "../hooks/useOrderAccess";
import { useDispatch } from "react-redux";
import { placeOrder } from "../slices/order.slice";

export const Success = () => {

    useOrderAccess('success');

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(placeOrder());
    });

    return <>
        <PageHeader>Transaction succesfull!</PageHeader>
        <p>Your order is processing...</p>
        <Link to="/">Go back to homepage</Link>
        
    </>
}