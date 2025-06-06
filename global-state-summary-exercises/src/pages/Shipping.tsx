import { FormEvent, useEffect } from "react";
import { PageHeader } from "../components/PageHeader"
import { useInput } from "../hooks/useInput"
import { useOrderStore } from "../store/useOrderStore";
import { useShallow } from "zustand/shallow";
import { useNavigate } from "@tanstack/react-router";
import { useOrderAccess } from "../hooks/useOrderAccess";
import { Stepper } from "../components/Stepper";

export const Shipping = () => {

    useOrderAccess('shipping');

    const { shipping, setShippingData } = useOrderStore(useShallow(state => ({
        
        shipping: state.shipping, setShippingData: state.setShippingData
    })));
    const navigate = useNavigate();

    const cityInput = useInput(shipping.city);
    const streetInput = useInput(shipping.street);
    const postCodeInput = useInput(shipping.postCode);

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();

        setShippingData({

            city: cityInput.value,
            street: streetInput.value,
            postCode: postCodeInput.value
        })
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