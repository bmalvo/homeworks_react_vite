import { ReactNode, useState } from "react"
import styles from './ModuleSecondaryWrapper.module.scss'
import clsx from "clsx"

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
            <div className={clsx(styles.wrapper, {
                [styles.active]: isActive,
                [styles.primary]: isPrimary
            })}
                onClick={toggleActive} role="button">
                {children}
        </div>
        </>
    )
}