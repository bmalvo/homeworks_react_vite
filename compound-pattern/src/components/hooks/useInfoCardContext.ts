import { useContext } from "react"
import { InfoCardContext } from "../InfoCard/context/InfoCardContext"

export const useInfoCardContext = () => {

    return useContext(InfoCardContext);
}