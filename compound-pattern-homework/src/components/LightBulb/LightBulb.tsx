import { ReactNode, useState } from "react";
import styles from './styles.module.scss'
import { Switch } from "./components/Switch";
import { LightBulbContext } from "./components/Switch/context/LightBulbContext";
import { ContentOn } from "./components/ContentOn";
import { ContentOff } from "./components/ContentOff/ContentOff";

export type LightBulbProps = {

    children: ReactNode;
}

export const LigthBulb = ({children}: LightBulbProps) => {

    const [isOn, setOn] = useState(false);

    return <>
        <div className={styles.lightBulb}>
            <LightBulbContext.Provider value={{isOn, setOn}}>
                {children}
            </LightBulbContext.Provider>
        </div>
    </>
}

LigthBulb.switch = Switch;
LigthBulb.on = ContentOn;
LigthBulb.off = ContentOff;