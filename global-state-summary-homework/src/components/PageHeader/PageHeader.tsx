import { ReactNode } from "@tanstack/react-router"
import styles from './styles.module.scss'

export type PageHeaderProps = {

    children: ReactNode;
}

export const PageHeader = ({children}: PageHeaderProps) => {

    return <>
        <h2 className={styles.header}>{ children }</h2>
    </>
}