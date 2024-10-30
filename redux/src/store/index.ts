import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../slices/productSlice";
import { productsReducers } from "../slices/productsSlice";

export const store = configureStore({

    devTools: import.meta.env.DEV,
    reducer: {

        product: productReducer,
        products: productsReducers
    }
})

export type RootState = ReturnType<typeof store.getState>;
// {
//     product: {
//         price: number,
//         name: string,
//     },
//     products: {
//         list: string[],
//         count: number,
//     }
// }