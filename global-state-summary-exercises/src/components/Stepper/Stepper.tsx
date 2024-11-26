import styles from './styles.module.scss'

export type StepperProps = {

    step: 'order' | 'shipping' | 'summary';
}

export const Stepper = ({step}: StepperProps) => {

    return <>
        <div className={styles.stepper}>
            <div className={`${styles.step} ${step === 'order'? styles.active : ''}`}>Order</div>
            <div className={`${styles.step} ${step === 'shipping'? styles.active: ''}`}>Shipping</div>
            <div className={`${styles.step} ${step === 'summary'? styles.active: ''}`}>Summary</div>
        </div>
    </>
}