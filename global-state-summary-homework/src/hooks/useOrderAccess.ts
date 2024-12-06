import { useShallow } from "zustand/shallow"
import { useOrderStore } from "../store/useOrderStore"
import { useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"

export const useOrderAccess = (step: 'order' | 'shipping' | 'summary' | 'success') => {

    const { order, shipping } = useOrderStore(useShallow(state => ({ order: state.order, shipping: state.shipping })))
    
    const navigate = useNavigate();

    const isOrderStepFilled = () => {

        return !!order.configuration && !!order.title
    }

    const isOrderShippingFilled = () => {

        return !!shipping.city && !!shipping.postCode && !!shipping.street
    }

    useEffect(() => {

        switch (step) {
        
            case 'shipping': {
                if (!isOrderStepFilled()) navigate({ to: '/' })
                break;
            }
            case 'summary': {
                if(!isOrderShippingFilled) navigate({to: '/'})
                break
            }
            case 'success': {
                if(!isOrderShippingFilled) navigate({to: '/'})
                break
            }
    }        
    })
}