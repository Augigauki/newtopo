'use client';

import Link from 'next/link';
import styles from './component.module.css';
import { usePathname } from 'next/navigation';

const Nav = ({}) => {
	const path = usePathname();
	
	const slugs = path.split('/').filter((item) => item !== '');
	
	const pages = [
		{ name: 'Reception', path: '/' },
		{ name: 'Exhibitions', path: '/exhibitions' },
	];
	return (
		<div className={styles.navWrapper}>
			{pages.map((page: any, i: number) => {
				if (typeof slugs[0] === 'undefined') {
					slugs[0] = '';
				}
				return (
					<Link
						key={i}
						className={`/${slugs[0]}` === page.path ? `${styles.navItem} ${styles.active}` : styles.navItem}
						href={page.path}
					>
						{page.name}
					</Link>
				);
			})}
		</div>
	);
};

export default Nav;
