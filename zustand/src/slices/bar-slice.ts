export type BarSlice = {
    
    b: number;
    setB: (newValue: number) => void
}

export const BarSlice = (set: (params: BarSlice | Partial<BarSlice>) => void) => ({

    b: 0,
    setB: (newValue: number) => set({

        b: newValue
    }) 
        
})