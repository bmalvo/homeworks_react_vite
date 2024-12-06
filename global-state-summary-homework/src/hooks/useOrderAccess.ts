import { useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"
import { useSelector } from "react-redux"
import { RootState } from '../store'


export const useOrderAccess = (step: 'order' | 'shipping' | 'summary' | 'success') => {

    const { order, shipping } = useSelector((state: RootState) => state.order);
    
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