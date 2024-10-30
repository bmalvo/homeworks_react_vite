import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../slices/productSlice";
import { productsReducers } from "../slices/productsSlice";
import { ipReducer } from "../slices/ipSlice";

export const store = configureStore({

    devTools: import.meta.env.DEV,
    reducer: {

        product: productReducer,
        products: productsReducers,
        ip: ipReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


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