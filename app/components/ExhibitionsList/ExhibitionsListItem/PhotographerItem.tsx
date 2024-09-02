'use client';

import Link from 'next/link';
import styles from '../ExhibitionsList.module.css';
import { getPhotosForPhotographer } from '@/app/data/getPhotos';
import BgImage from './BgImage';
import { motion } from 'framer-motion';
import { exhibItemVariants } from '@/util/framermotion/variants';
import { Photographer } from '@/types/payload-types';

const PhotographerItem = ({ photographer }: { photographer: Photographer }) => {
	return (
		<motion.div
			className={styles.exhibLink}
			style={{ paddingLeft: '1rem' }}
		>
			<Link href={`/exhibitions/photographer/${photographer.slug}`} className={styles.linkwrapper}>
				<motion.div
					variants={exhibItemVariants}
					className={styles.exhibItem}
					initial='static'
					whileHover={'hover'}
				>
					{/* <div className={styles.bgImgWrapper}>
						<BgImage photos={photos} />
	                    <div className={styles.bgOverlay} />
						<h3 className={styles.title}>{photographer.name}</h3>
					</div> */}
					<h3 className={styles.title}>{photographer.name}</h3>
				</motion.div>
			</Link>
		</motion.div>
	);
};

export default PhotographerItem;
