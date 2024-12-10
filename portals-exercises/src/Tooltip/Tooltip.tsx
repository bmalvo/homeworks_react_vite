import { ReactElement, useState } from "react";
import styles from './styles.module.scss';
import { createPortal } from "react-dom";

export type TooltipProps = {

    text: string;
    children: ReactElement; 
}

export const Tooltip = ({ text, children }: TooltipProps) => {
    
    const [isTooltip, setIsTooltip] = useState(false);

    const handleEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
        const target = e.target as HTMLDivElement; 
        setIsTooltip(true)
    }

    const handleLeave = (e:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsTooltip(false)
    } 
    return <>
        <div>
            <div onMouseEnter={ handleEnter} onMouseLeave={handleLeave}>{children}</div>
            {isTooltip ? createPortal(<div className={styles.tooltip}>
                {text}
            </div>, document.getElementById('tooltip')!) : null}
        </div>
    </>
}