import { ReactNode } from 'react';
import styles from './PageWrapper.module.css';

const PageWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.outerWrapper}>
			<div className={styles.innerWrapper}>{children}</div>
		</div>
	);
};

export default PageWrapper;
