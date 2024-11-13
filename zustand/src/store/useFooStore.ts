import { create } from "zustand";

type FooStore = {

    value: number;
    setValue: (newValue: number) => void;
}

export const useFooStore = create<FooStore>(set => ({

    value: 0,
    setValue: (newValue: number) => set(
        {
            value: newValue
        }
    )
    
}))