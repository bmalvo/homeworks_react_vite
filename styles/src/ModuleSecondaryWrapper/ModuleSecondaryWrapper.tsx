import { ReactNode, useState } from "react"
import styles from './ModuleSecondaryWrapper.module.scss'

type ModuleSecondaryWrapperProps = {

    children: ReactNode
}

export const ModuleSecondaryWrapper = ({ children }: ModuleSecondaryWrapperProps) => {
    
    const [isActive, setIsActiv] = useState(false);

    const toggleActive = () => {

        setIsActiv(prevActiv => !prevActiv)
    }

    return (
        <div className={`${styles.wrapper} ${isActive? styles.active : null}`} onClick={toggleActive} role="button">
            {children}
        </div>
    )
}