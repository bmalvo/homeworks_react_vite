import { create } from "zustand";

type FooStore = {

    value: number;
    otherValue: number;
    result: number;
    ip: string;
    setValue: (newValue: number) => void;
    increaseOtherValue: () => void;
    calculateResult: (param: number) => void;
    fetchMyIp: () => Promise<void>;
}

export const useFooStore = create<FooStore>((set, get) => ({

    value: 0,
    otherValue: 0,
    result: 0,
    ip: '',
    setValue: (newValue: number) => set(
        {
            value: newValue
        }
    ),
    increaseOtherValue: () => set(state => ({

        otherValue: state.otherValue + 1
    })),
    calculateResult: (param: number) => {

        const { value, otherValue } = get();

        const result = Math.round(param > 50 ? (value * param * otherValue) / Math.sqrt(param) : (value / param) * 25);
        
        set({

            result
        })
    },
    fetchMyIp: async () => {
        
        const response = await fetch('https://api.ipify.org?format=json');
        const data: { ip: string } = await response.json();
        
        set ({
            ip: data.ip
        })
    }
    
}))