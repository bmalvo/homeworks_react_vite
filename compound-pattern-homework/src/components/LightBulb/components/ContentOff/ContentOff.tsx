import { ReactNode } from "react"
import { useLightBulbContext } from "../Switch/hooks/seLightBulbContext";

export type ContentOffProps = {

    children: ReactNode;
}

export const ContentOff = ({children}: ContentOffProps) => {

    const { isOn} = useLightBulbContext();

    if (isOn) return;

    return <>
        <div>
            {children }
        </div>
    </>
}