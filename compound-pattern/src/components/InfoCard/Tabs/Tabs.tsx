import React, { ReactElement, useState } from "react";
import { ReactNode } from "react"
import { TabProps } from "./components/Tab";

export type TabsProps = {

    children: ReactNode;
}

export const Tabs = ({ children }: TabsProps) => {
    
    const [activeIndex, setActiveindex] = useState<number>(0);

    const handleClick = (index: number) => {

        setActiveindex(index);
    }

    return <>
        <div>
            <ul>
                {React.Children.map(children, (tab, index) => 
                    <li onClick={() => handleClick(index)}>{ (tab as ReactElement<TabProps>).props.label }</li>
                )}
            </ul>
            {
                React.Children.map(children, (tab, index) => React.cloneElement(tab as ReactElement, {

                active: activeIndex === index
                }))
            }
        </div>
    </>
}