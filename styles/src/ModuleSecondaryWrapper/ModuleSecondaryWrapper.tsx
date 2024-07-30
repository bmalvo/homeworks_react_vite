import { ReactNode, useState } from "react"
import styles from './ModuleSecondaryWrapper.module.scss'

type ModuleSecondaryWrapperProps = {

    children: ReactNode
}

export const ModuleSecondaryWrapper = ({ children }: ModuleSecondaryWrapperProps) => {
    
    const [isActive, setIsActiv] = useState(false);
    const [isPrimary, setPrimary] = useState(false);

    const toggleActive = () => {

        setIsActiv(prevActiv => !prevActiv)
    }

    const togglePrimary = () => {

        setPrimary(prevPrimary => !prevPrimary)
    }

    return (
        <>
            <button onClick={togglePrimary}>toggle primary</button>
        <div className={`${styles.wrapper} ${isActive? styles.active : ''} ${isPrimary? styles.primary : ''}`} onClick={toggleActive} role="button">
            {children}
        </div>
        </>
    )
}