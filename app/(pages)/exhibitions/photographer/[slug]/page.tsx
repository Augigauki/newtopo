import { getPhotographerBasedOnSlug } from '@/app/data/getPhotographers';
import styles from '../../Exhibition.module.css'
import { getPhotosForPhotographer } from '@/app/data/getPhotos';
import ImageScroller from '@/app/components/ImageScroller/ImageScroller';
import Card from '@/app/components/Card/Card';

const PhotographerPage = async({params}: {params: {slug: string}}) => {

    const phographerFetch = await getPhotographerBasedOnSlug(params.slug);
    const phographer = await phographerFetch.docs[0];
    const photosfetch = await getPhotosForPhotographer(phographer.id);
    const photos = await photosfetch.docs;

    return(
        <div className={styles.scrollerWrapper}>
		    <ImageScroller images={photos}>
    			<div className={styles.exhibwrapper}>
    				<div className={styles.introwrapper} id='start'>
    					<h1 style={{textWrap: 'wrap'}}>{phographer.name}</h1>
    					{phographer.about && (
                            <Card>
    						<h2>Introduction</h2>
                            <p>{phographer.about}</p>
    						
    					</Card>
                        )}
    				</div>
    			</div>
    		</ImageScroller>
		</div>
    )
};

export default PhotographerPage;