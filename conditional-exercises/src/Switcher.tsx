import { useState } from "react";
import { Light } from "./Light";
import { Dark } from "./Dark";

export const Switcher = () => {
    const [isTurnedOn, setTurnedOn] = useState(false);

    const toggleLight = () => {
        setTurnedOn(prevTurnedOn => !prevTurnedOn)
    }

    return <div>
        <button onClick={toggleLight}>{isTurnedOn ? 'Turn off' : 'Turn on'}</button>
        {isTurnedOn? <Light /> : <Dark />}
    </div> 
}
