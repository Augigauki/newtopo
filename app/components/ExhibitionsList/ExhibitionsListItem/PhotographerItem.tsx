import Link from 'next/link';
import styles from '../ExhibitionsList.module.css';
import { getPhotosForPhotographer } from '@/app/data/getPhotos';
import BgImage from './BgImage';

const PhotographerItem = async ({ photographer }: { photographer: any }) => {
	const photosFetch = await getPhotosForPhotographer(photographer.id);
	const photos = await photosFetch.docs;
	return (
		<div
			className={styles.exhibLink}
			style={{ paddingLeft: '1rem' }}
		>
			<Link
				href={`/exhibitions/photographer/${photographer.slug}`}
				className={styles.exhibItem}
			>
				{/* <div className={styles.bgImgWrapper}>
					<BgImage photos={photos} />
                    <div className={styles.bgOverlay} />
					<h3 className={styles.title}>{photographer.name}</h3>
				</div> */}
                <h3 className={styles.title}>{photographer.name}</h3>
			</Link>
		</div>
	);
};

export default PhotographerItem;
