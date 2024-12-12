import { ReactNode } from "react"

export type TabProps = {

    children: ReactNode;
    label: string;
    active?: boolean;
}

export const Tab = ({children, active}: TabProps) => {

    if (!active) return;



    return <>
        <div>
            {children}
        </div>
    </>
}