export type FooSlice = {
    
    a: number;
    setA: (newValue: number) => void
}

export const FooSlice = (set: (params: FooSlice | Partial<FooSlice>) => void) => ({

    a: 0,
    setA: (newValue: number) => set({

        a: newValue
    }) 
        
})