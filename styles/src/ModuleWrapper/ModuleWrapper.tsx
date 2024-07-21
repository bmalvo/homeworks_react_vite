import { ReactNode } from "react"
import styles from './ModuleWrapper.module.scss'

type ModuleWrapperProps = {

    children: ReactNode
}

export const ModuleWrapper = ({children}: ModuleWrapperProps) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}