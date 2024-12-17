'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from './styles.module.scss'

export const MainNavigation = () => {

    const pathname = usePathname();

    return <>
        <nav>
            <ul className={styles.navigation}>
                <li>
                    <Link className={pathname.startsWith('/panel') ? styles.active : ''}  href='/panel'>Panel</Link>
                </li>
                <li>
                    <Link className={pathname.startsWith('/admin') ? styles.active : ''}  href='/admin'>Admin</Link>
                </li>
                <li>
                    <Link className={pathname.startsWith('/about') ? styles.active : ''}  href='/about'>About</Link>
                </li>
                <li>
                    <Link className={pathname.startsWith('/users') ? styles.active : ''}  href='/users'>Users</Link>
                </li>
            </ul>
        </nav>
    </>
}