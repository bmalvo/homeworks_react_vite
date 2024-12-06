import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "../slices/order.slice";
import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {

    key: 'order',
    storage
}

const persistedReducer = persistReducer(persistConfig, orderReducer);

export const store = configureStore({

    reducer: {

        order: persistedReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store);