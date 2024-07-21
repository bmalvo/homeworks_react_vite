import { ReactNode } from "react"
import styles from './ModuleSecondaryWrapper.module.scss'

type ModuleSecondaryWrapperProps = {

    children: ReactNode
}

export const ModuleSecondaryWrapper = ({children}: ModuleSecondaryWrapperProps) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}