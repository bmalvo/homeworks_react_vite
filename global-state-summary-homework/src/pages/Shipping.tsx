import { FormEvent, useEffect } from "react";
import { PageHeader } from "../components/PageHeader"
import { useInput } from "../hooks/useInput"
import { useNavigate } from "@tanstack/react-router";
import { useOrderAccess } from "../hooks/useOrderAccess";
import { Stepper } from "../components/Stepper";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setShippingData } from "../slices/order.slice";

export const Shipping = () => {

    useOrderAccess('shipping');

    const dispatch = useDispatch();

    const { shipping } = useSelector((state: RootState) => state.order);
    const navigate = useNavigate();

    const cityInput = useInput(shipping.city);
    const streetInput = useInput(shipping.street);
    const postCodeInput = useInput(shipping.postCode);

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();

        dispatch(setShippingData({

            city: cityInput.value,
            street: streetInput.value,
            postCode: postCodeInput.value
        }))

        navigate({to: '/summary'})
    }

    useEffect(() => {

        setShippingData({

            city: cityInput.value,
            street: streetInput.value,
            postCode: postCodeInput.value
        })
    },[cityInput.value, streetInput.value, postCodeInput.value])

    return <>
        <Stepper step='shipping' />
        <PageHeader>Shipping</PageHeader>
        <p>Please fill out Your delivery adress.</p>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="city" placeholder="City" { ...cityInput } />
            </div>
            <div>
                <input type="text" name="street" placeholder="Street" { ...streetInput } />
            </div>
            <div>
                <input type="text" name="postCode" placeholder="PostCode" { ...postCodeInput } />

            </div>
            <button type="submit" disabled={ !cityInput.value || !streetInput.value || !postCodeInput.value}>Procced to next step</button>
        </form>
    </>
}