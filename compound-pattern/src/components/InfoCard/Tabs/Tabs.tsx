import {useState} from "react";
import { ReactNode } from "react"
import { Tab} from "./components/Tab";

export type TabsProps = {

    tabs: {

        label: string;
        content: ReactNode;
    }[]
}

export const Tabs = ({ tabs }: TabsProps) => {
    
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleClick = (index: number) => {

        setActiveIndex(index);
    }

    return <>
        <div>
            <ul>
                {tabs.map((tab, index) => 
                    <li key={index} onClick={() => handleClick(index)}>{ tab.label }</li>
                )}
            </ul>
            {
                tabs.map((tab, index) => <Tab key={ index} active={activeIndex === index} label={tab.label} >
                    {tab.content}
                </Tab>)
            }
        </div>
    </>
}