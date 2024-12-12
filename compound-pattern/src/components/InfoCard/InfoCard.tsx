import { ReactNode } from 'react';
// import { Description } from './components/Description/Description';
import styles from './styles.module.scss'
import { InfoCardContext } from './context/InfoCardContext';
import { InfoData } from '../../types';
import { Actions } from './components/Actions';
import { Description } from './components/Description';
import { Title } from './components/Title';

export type InfoCardProps = {

    children: ReactNode;
    item: InfoData;
}

export const InfoCard = ({children, item }: InfoCardProps) => {


    return <>
        <div className={styles['info-box']}>
            <InfoCardContext.Provider value={{item}}>
            {children}
            </InfoCardContext.Provider>
        </div>
    </>
}

InfoCard.Actions = Actions;
InfoCard.Description = Description;
InfoCard.Title = Title;