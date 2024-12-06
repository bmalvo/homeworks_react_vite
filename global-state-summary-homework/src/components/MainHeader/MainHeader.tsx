import { ReactNode } from "@tanstack/react-router";
import styles from './styles.module.scss'

export type MainHeaderProps = {

    children: ReactNode;
}

export const MainHeader = ({children}: MainHeaderProps) => {

    return <>
        <h1 className={styles.header}>{children}</h1>
    </>
}