import { useInfoCardContext } from '../../../hooks/useinfoCardContext'
import styles from './styles.module.scss'


export const Actions = () => {

    const { item: {label}} = useInfoCardContext();

    return <>
        <div><button className={styles.button}>{label}</button>button</div>
    </>
}