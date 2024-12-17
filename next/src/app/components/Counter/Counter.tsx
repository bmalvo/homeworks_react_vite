'use client';
import { useState } from 'react'
import styles from './style.module.scss'

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {

        setCounter(prev => prev + 1);
    }

    return <>
        <div className={styles.counter}>
            {counter}
            <button onClick={increment}>+1</button>
        </div>
    </>
}