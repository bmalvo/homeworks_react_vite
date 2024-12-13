import { ReactNode } from "react"
import { useLightBulbContext } from "../Switch/hooks/seLightBulbContext";

export type ContentOnProps = {

    children: ReactNode;
}

export const ContentOn = ({children}: ContentOnProps) => {

    const { isOn} = useLightBulbContext();

    if (!isOn) return;

    return <>
        <div>
            {children}
        </div>
    </>
}