import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OrderState = {
    
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
}


const initialState: OrderState = {

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
}

type SetOrderDataAction = {

    title: string;
    configuration: string;
}

type SetShippingDataAction = {

    city: string;
    street: string;
    postCode: string;
}

type SetSummaryDataAction = {

    comment: string;
}

export const orderSlice = createSlice({

    name: 'order',
    initialState,
    reducers: {

        setOrderData: (state, action: PayloadAction<SetOrderDataAction>) => {

            state.order = action.payload
        },
        setShippingData: (state, action: PayloadAction<SetShippingDataAction>) => {

            state.shipping = action.payload
        },
        setSummaryData: (state, action: PayloadAction<SetSummaryDataAction>) => {

            state.summary = action.payload
        },
        placeOrder: () => {

            return initialState;
        }
    }
})

export const { setOrderData, setShippingData, setSummaryData, placeOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;