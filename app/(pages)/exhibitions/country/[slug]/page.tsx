import { getExhibitionBasedOnSlug } from '@/app/data/getExhibitions';
import styles from '../../Exhibition.module.css';
import Card from '@/app/components/Card/Card';
import ImageScroller from '@/app/components/ImageScroller/ImageScroller';
import { getPhotosForExhibition } from '@/app/data/getPhotos';
import Link from 'next/link';

const Exhibition = async ({ params }: { params: { slug: string } }) => {
	const exhibFetch = await getExhibitionBasedOnSlug(params.slug);
	const exhib = await exhibFetch.docs[0];

	const exhibPhotosFetch = await getPhotosForExhibition(exhib.id);
	const exhibPhotos = await exhibPhotosFetch.docs;

	return (
		<div className={styles.scrollerWrapper}>
		    <ImageScroller images={exhibPhotos}>
    			<div className={styles.exhibwrapper}>
    				<div className={styles.introwrapper} id='start'>
    					<h1>{exhib.title}</h1>
    					<Card>
    						<h2>Introduction</h2>
    						<p>{exhib.introText}</p>
    					</Card>
    				</div>
    			</div>
    		</ImageScroller>
		</div>
	);
};

export default Exhibition;
