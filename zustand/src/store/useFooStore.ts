import { create } from "zustand";

type FooStore = {

    value: number;
    otherValue: number;
    setValue: (newValue: number) => void;
    increaseOtherValue: () => void;
}

export const useFooStore = create<FooStore>(set => ({

    value: 0,
    otherValue: 0,
    setValue: (newValue: number) => set(
        {
            value: newValue
        }
    ),
    increaseOtherValue: () => set(state => ({

        otherValue: state.otherValue + 1
    }))
    
}))