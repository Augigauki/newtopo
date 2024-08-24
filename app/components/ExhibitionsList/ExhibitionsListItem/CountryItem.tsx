import Link from 'next/link';
import styles from '../ExhibitionsList.module.css';
import BgImage from './BgImage';
import { getPhotosForExhibition } from '@/app/data/getPhotos';

const CountryItem = async ({ country }: { country: any }) => {
	const photosFetch = await getPhotosForExhibition(country.id);
	const photos = await photosFetch.docs;
	return (
		<div
			
			className={styles.exhibLink}
			style={{ borderRight: '2px solid var(--darksand)', paddingRight: '1rem' }}
		>
			<Link href={`/exhibitions/country/${country.slug}`} className={styles.exhibItem}>
				{/* <div className={styles.bgImgWrapper}>
					<BgImage photos={photos} />
					<div className={styles.bgOverlay} />
					<h3 className={styles.title}>{country.title}</h3>
				</div> */}
				<h3 className={styles.title}>{country.title}</h3>
			</Link>
		</div>
	);
};

export default CountryItem;
