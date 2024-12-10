import { ReactElement } from "react";
import styles from './styles.module.scss';

export type TooltipProps = {

    text: string;
    children: ReactElement; 
}

export const Tooltip = ({text, children}: TooltipProps) => {

    return <>
        <div>
            {children}
            <div className={styles.Tooltip}>
                {text}
            </div>
        </div>
    </>
}