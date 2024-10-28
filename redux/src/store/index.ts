import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../slices/productSlice";

export const store = configureStore({

    reducer: {

        product: productReducer
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