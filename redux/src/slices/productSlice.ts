import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductState = {

    name: string;
    price: number;
}

const initialState: ProductState = {

    name: '',
    price: 0,
}

export const productSlice = createSlice({

    name: 'product',
    initialState,
    reducers: {

        setName: (state, action: PayloadAction<string>) => {

            state.name = action.payload;
        },
        setPrice: (state, action: PayloadAction<number>) => {

            state.price = action.payload;
        }
    }
})

export const { setName, setPrice } = productSlice.actions;
export const productReducer = productSlice.reducer;