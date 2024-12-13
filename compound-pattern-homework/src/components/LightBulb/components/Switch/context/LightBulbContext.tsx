import { createContext } from "react";

export type LightbulbContextType = {

    isOn: boolean;
    setOn: (isOn: boolean) => void;
}

export const LightBulbContext = createContext<LightbulbContextType>({

    isOn: false,
    setOn: () => {}
})