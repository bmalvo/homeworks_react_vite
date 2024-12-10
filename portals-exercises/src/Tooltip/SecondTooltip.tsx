import { ReactElement, useEffect, useRef, useState } from "react";
import styles from './styles.module.scss';
import { createPortal } from "react-dom";

export type SecondTooltipProps = {

    text: string;
    children: ReactElement; 
}

export const SecondTooltip = ({ text, children }: SecondTooltipProps) => {
    
    const [isTooltip, setIsTooltip] = useState<{visible: boolean, x: number, y: number}>({visible: false, x : 0, y : 0 });

    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!elementRef || !elementRef.current) return;

        const firstChild = elementRef.current.firstChild;

        if (!firstChild) return;

        firstChild.addEventListener('mouseenter', handleEnter)
        firstChild.addEventListener('mouseleave', handleLeave) 

        return () => {

            firstChild.removeEventListener('mouseenter', handleEnter);
            firstChild.removeEventListener('mouseleave', handleLeave);
            
        }
 
    }, [elementRef])

    const handleEnter = (e: Event) => {
        
        const target = e.target as HTMLDivElement; 
        const { y, x, height } = target.getBoundingClientRect();
        const tooltipY = window.scrollY + y + height;
        const tooltipX = x;
        setIsTooltip({visible: true, y: tooltipY, x: tooltipX}) 
    }

    const handleLeave = () => {
        setIsTooltip({ visible: false, x: 0, y: 0 });
    } 
    return <>
        <div ref={elementRef}>
            <div onMouseEnter={ handleEnter} onMouseLeave={handleLeave}>{children}</div>
            {isTooltip ? createPortal(<div className={styles.tooltip}>
                {text}
            </div>, document.getElementById('tooltip')!) : null}
        </div>
    </>
}