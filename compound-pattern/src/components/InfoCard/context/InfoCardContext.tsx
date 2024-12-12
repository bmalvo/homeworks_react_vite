import { createContext } from "react";
import { InfoData } from "../../../types";

export type InfoCardContext = {

    item: InfoData
}

export const InfoCardContext = createContext<InfoCardContext>({

    item: {

        title: '',
        description: '',
        label: ''
    }
})