import { create } from "zustand";
import { persist } from "zustand/middleware";

type OrderStore = {

    order: {

        title: string;
        configuration: string;
    },
    shipping: {

        city: string;
        street: string;
        postCode: string;
    },
    summary: {

        comment: string;
    },
    setOrderData: (payload: SetOrderDataAction) => void;
    
}

type SetOrderDataAction = {

    title: string;
    configuration: string;
}

export const useOrderStore = create<OrderStore>()(
    
    persist(

        set => ({
            
            order: {
                title: '',
                configuration: ''
            },
            shipping: {
                city: '',
                street: '',
                postCode: ''
            },
            summary: {
                comment: ''
            },
            setOrderData: (payload: SetOrderDataAction) => set({
                
                order: payload
            })
        }), {
            name: 'order',
            version: 1
        })
    )