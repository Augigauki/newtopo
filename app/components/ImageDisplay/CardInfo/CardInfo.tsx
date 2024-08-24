import { ReactNode } from 'react';
import styles from './CardInfo.module.css'

const CardInfo = ({title, children}: {title: string, children: ReactNode}) => {
    return(
        <div>
            <h3>{title}</h3>
            {children}
        </div>
    )
};

export default CardInfo;