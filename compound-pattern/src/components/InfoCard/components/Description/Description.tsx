import { useInfoCardContext } from '../../../hooks/useinfoCardContext'
import styles from './styles.module.scss'


export const Description = () => {

    const { item: {description}} = useInfoCardContext();

    return <>
        <div>
            <p className={styles.description}>{description}</p>
        </div>
    </>
}