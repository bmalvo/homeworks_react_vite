import { FormEvent } from "react";
import { PageHeader } from "../components/PageHeader"
import { useInput } from "../hooks/useInput"
import { useOrderStore } from "../store/useOrderStore";
import { useShallow } from "zustand/shallow";
import { useNavigate } from "@tanstack/react-router";
import { useOrderAccess } from "../hooks/useOrderAccess";
import { Stepper } from "../components/Stepper";

export const Summary = () => {

    useOrderAccess('summary');

    const { summary, order, shipping, setSummaryData } = useOrderStore(useShallow(state => ({
        
        order: state.order,
        shipping: state.shipping,
        summary: state.summary,
        setSummaryData: state.setSummaryData
    })));
    const navigate = useNavigate();

    const commentInput = useInput(summary.comment);


    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();

        setSummaryData({

            comment: commentInput.value
        });

        navigate({to: '/success'})
    }

    return <>
        <Stepper step="summary" />
        <PageHeader>Summary</PageHeader>
        <p>Please review Your order and add comment.</p>
        <div>
            <h3>Order</h3>
            <p>{order.title}</p>
            <p>{order.configuration}</p>
            
            <h3>Shipping address</h3>
            <p>{ shipping.street } { shipping.postCode } { shipping.city }</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
            <textarea placeholder="Comment" { ...commentInput }></textarea>
            </div>
            <button type="submit" >Place Your order.</button>
        </form>
    </>
}