import { ReactNode } from "react";
import styles from "./marquee.module.css";

const Marquee = ({ children }: { children?: ReactNode}) => {
  
  return (
    <div className={styles.marquee}>
      <div className={`${styles.marqueeContent} ${styles.marquee1}`}>
        {children}
      </div>
      <div className={`${styles.marqueeContent} ${styles.marquee2}`} aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

export default Marquee;
