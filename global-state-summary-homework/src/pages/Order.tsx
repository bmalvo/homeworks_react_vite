import { FormEvent, useEffect } from "react";
import { PageHeader } from "../components/PageHeader"
import { useInput } from "../hooks/useInput"
import { useNavigate } from "@tanstack/react-router";
import { Stepper } from "../components/Stepper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setOrderData } from "../slices/order.slice";

export const Order = () => {

    const dispatch = useDispatch();
    const { order } = useSelector((state: RootState) => state.order);
    const navigate = useNavigate();

    const titleInput = useInput(order.title);
    const descriptionInput = useInput(order.configuration);


    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();

        dispatch(setOrderData({

            title: titleInput.value,
            configuration: descriptionInput.value
        }));

        navigate({to: '/shipping'})
    }

    useEffect(() => {

        setOrderData({

            title: titleInput.value,
            configuration: descriptionInput.value
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[titleInput.value, descriptionInput.value, setOrderData])

    return <>
        <Stepper step="order" />
        <PageHeader>Order</PageHeader>
        <p>Please fill out Your order configuration.</p>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="title" placeholder="title" { ...titleInput } />
            </div>
            <div>
            <textarea name="" id="" placeholder="configuration" { ...descriptionInput }></textarea>
            </div>
            <button type="submit" disabled={ !titleInput.value || !descriptionInput.value}>Procced to next step</button>
        </form>
    </>
}