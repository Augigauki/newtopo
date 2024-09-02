import Marquee from '@/app/components/Marquee/Marquee';
import styles from './About.module.css';
import { getHeroPhotos } from '@/app/data/getPhotos';
import Image from 'next/image';

const About = async ({}) => {
    const heroImgFetch = await getHeroPhotos();
	const heroImgs = await heroImgFetch.docs;
	return (
		<div className={styles.marquee}>
			<div className={styles.marqueeOverlay} />
			<Marquee>
				{heroImgs.map((img: any) => {
					return (
						<div
							className={styles.marqueeImgWrapper}
							key={img.id}
						>
							<Image
								src={img.url}
								alt={img.altText}
								fill={true}
								className={styles.marqueeImg}
							/>
						</div>
					);
				})}
			</Marquee>
		</div>
	);
};

export default About;
