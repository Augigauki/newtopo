import Image from 'next/image';
import styles from './page.module.css';
import { getHeroPhotos } from './data/getPhotos';
import FrontpageImage from './components/FrontpageImage';
import Marquee from './components/Marquee/Marquee';

const Home = async () => {
	const heroImgFetch = await getHeroPhotos();
	const heroImgs = await heroImgFetch.docs;
	return (
		<main className={styles.pageWrapper}>
			<div className={styles.heroWrapper}>
				<div className={styles.heroImageContainer}>
					<FrontpageImage
						photos={heroImgs}
					/>
				</div>
				<div className={styles.bgOverlay} />
				<div className={styles.heroContent}>
					<h1 className={styles.heroTitle}>New Topographics</h1>
					<div className={styles.subheadingsWrapper}>
						<p className={styles.subheading}>Man-made</p>
						<p className={styles.subheading}>Landscape</p>
						<p className={styles.subheading}>Photography</p>
					</div>
				</div>
			</div>
			<div className={styles.container}>
				<h2>A museum for New Topographics photography</h2>
				{/* <p>This is a museum focused on new topographics photography, a style focused on man-made landscape photography.</p> */}
				<div className={styles.columns}>
					<p>
						This is a museum focused on new topographics photography, a style focused on man-made landscape
						photography. It started out as a school project in a graphic design course in October 2019.
						Photographs are grouped into different exhibitions, based on which country the photograph is
						from. All photographs showcased have been submitted to the site by the photographers themselves.
						This is a passion project, and something I tinker with beside my job and other hobbies.
						Submissions to the museum are open, additions not guaranteed. Please do not redistribute or
						share any images from this website without getting permission from the photographer of the
						photograph you want to share. New Topographics is a photography movement which has its name from
						an exhibition curated by William Jenkins at the International Museum of Photography in New York
						City in 1975. The exhibition, named{' '}
						<em>New Topographics: Photographs of a Man-Altered Landscape</em>, featured landscape
						photography where the main subject of the photo is man-made scenery. This aesthetic has since
						been emulated by photographers around the world.
					</p>
				</div>
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
			</div>
		</main>
	);
};

export default Home;
