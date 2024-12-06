import { useShallow } from "zustand/shallow"
import { useOrderStore } from "../store/useOrderStore"
import { useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"

export const useOrderRedirect = () => {

    const { order, shipping } = useOrderStore(useShallow(state => ({ order: state.order, shipping: state.shipping })))
    
    const navigate = useNavigate();

    const isOrderStepFullyFilled = () => {

        return !!order.configuration && !!order.title
    }

    const isOrderStepPartiallyFilled = () => {

        return !!order.configuration || !!order.title
    }

    const isOrderShippingFullyFilled = () => {

        return !!shipping.city && !!shipping.postCode && !!shipping.street
    }

    const isOrderShippingPartiallyFilled = () => {

        return !!shipping.city || !!shipping.postCode || !!shipping.street
    }

    useEffect(() => {

        if(isOrderShippingFullyFilled()) {
            
            navigate({ to: '/summary' })
            return;
        }
        if(isOrderShippingPartiallyFilled()) {
            
            navigate({ to: '/shipping' })
            return;
        }
        if(isOrderStepFullyFilled()) {
            
            navigate({to: '/shipping'})
        }
        if (isOrderStepPartiallyFilled()) {
            
            navigate({to: '/order'})
        }
    })
}