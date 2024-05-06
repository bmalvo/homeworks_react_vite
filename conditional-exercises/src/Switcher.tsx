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

    // const [btnText, setBtnText] = useState('Turn on');
    
    // const switchText = () => {
    //     return btnText === 'Turn off' ? setBtnText('Turn on') : setBtnText('Turn off');
    // }
    
    // const switchBtn = <button id="switchButton" onClick={switchText}>{btnText}</button>
    
    // if (btnText === 'Turn on') {
    //     return <>
    //         {switchBtn}
    //         <Dark />
    //     </>
    // } 
    
    // return <>
    //         {switchBtn}
    //         <Light />
    //     </>
   
}
