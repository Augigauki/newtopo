'use client';
import Link from 'next/link';
import styles from '../ExhibitionsList.module.css';
import BgImage from './BgImage';
import { getPhotosForExhibition } from '@/app/data/getPhotos';
import { motion } from 'framer-motion';
import { exhibItemVariants } from '@/util/framermotion/variants';

const CountryItem = ({ country }: { country: any }) => {
	
	return (
		<div
			className={styles.exhibLink}
			style={{ borderRight: '2px solid var(--darksand)', paddingRight: '1rem' }}
		>
			<motion.div
				variants={exhibItemVariants}
				initial='static'
				whileHover={'hover'}
			>
				<Link
					href={`/exhibitions/country/${country.slug}`}
					className={styles.exhibItem}
				>
					{/* <div className={styles.bgImgWrapper}>
							<BgImage photos={photos} />
							<div className={styles.bgOverlay} />
							<h3 className={styles.title}>{country.title}</h3>
						</div> */}
					<h3 className={styles.title}>{country.title}</h3>
				</Link>
			</motion.div>
		</div>
	);
};

export default CountryItem;
