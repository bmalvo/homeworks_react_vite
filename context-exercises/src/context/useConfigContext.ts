import { useContext } from "react"
import { ConfigContext } from "./ConfigContext"

export const useConfigContext = () => {

    const context = useContext(ConfigContext);

    if(!context) throw new Error('useConfigContext needs to be used with ConfigContext.Provider!')

    return context;
}