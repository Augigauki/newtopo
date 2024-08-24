import { ReactNode } from 'react';
import styles from './Card.module.css'

const Card = ({ children, hug = true }: { children: ReactNode, hug?: boolean }) => {
    return (
        <div className={styles.card}>
            <div className={styles.nail}></div>
            <div className={styles.nail}></div>
            <div className={styles.nail}></div>
            <div className={styles.nail}></div>
            <div className={styles.content}>{children}</div>
        </div>
    )
};

export default Card;