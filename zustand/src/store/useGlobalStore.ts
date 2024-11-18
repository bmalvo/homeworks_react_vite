import { create } from "zustand";
import { FooSlice } from "../slices/foo-slice";
import { BarSlice } from "../slices/bar-slice";

type GlobalStore = FooSlice & BarSlice

export const useGlobalStroe = create<GlobalStore>(set => ({

    ...FooSlice(set),
    ...BarSlice(set)
}))