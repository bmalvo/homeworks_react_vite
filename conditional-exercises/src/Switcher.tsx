import { useState } from "react";
import { Light } from "./Light";
import { Dark } from "./Dark";

export const Switcher = () => {

    const [btnText, setBtnText] = useState('Turn on');
    
    const switchText = () => {
        return btnText === 'Turn off' ? setBtnText('Turn on') : setBtnText('Turn off');
    }
    
    const switchBtn = <button id="switchButton" onClick={switchText}>{btnText}</button>
    
    if (btnText === 'Turn on') {
        return <>
            {switchBtn}
            <Dark />
        </>
    } 
    
    return <>
            {switchBtn}
            <Light />
        </>
   
}
