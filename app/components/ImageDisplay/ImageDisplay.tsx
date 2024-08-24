import styles from './ImageDisplay.module.css';
import Image from 'next/image';
import Card from '../Card/Card';
import CardInfo from './CardInfo/CardInfo';
import Link from 'next/link';

const ImageDisplay = ({ index, image, path, length }: { index: number; image: any; path: string; length: number }) => {
	return (
		<div
			className={styles.imageContainer}
			
		>
			<div className={`${styles.card} ${styles.index}`}>
				<Card>{index + 1}</Card>
			</div>
			<div className={styles.imgwrapper}>
				<Image
					src={image.url}
					alt={image.alt ? image.alt : `${path} image ${index}`}
					width={image.width}
					height={image.height}
					className={styles.image}
					id={(index + 1).toString()}
				/>
			</div>
			<div className={styles.endwrapper}>
				<div className={`${styles.card} ${styles.info}`}>
					<Card>
						<div style={{ display: 'flex', flexDirection: 'column', gap: '1.25em' }}>
							{image.photographer && (
								<CardInfo title='Photographer'>
									<p>{image.photographer.name}</p>
								</CardInfo>
							)}

							<CardInfo title='Location'>
								<p>{image.location}</p>
							</CardInfo>
							<CardInfo title='Year'>
								<p>{image.year}</p>
							</CardInfo>
							{image.streetview && (
								<CardInfo title='Visit'>
									<Link href={image.streetview}>Explore location</Link>
								</CardInfo>
							)}
						</div>
					</Card>
				</div>
				{index + 1 < length ? (
					<div className={styles.jumpLinkWrapper}>
						<div className={styles.nail}/>
						
						<Link
							href={`#${index + 2}`}
							onClick={(e) => {
								e.preventDefault();
								document.getElementById(`${index + 2}`)?.scrollIntoView({ behavior: 'smooth' });
							}}
							className={styles.jumpLink}
						>
							Next Image
						</Link>
						<div className={styles.nail}/>
					</div>
				) : (
					<Link
						href={`#${index + 2}`}
						onClick={(e) => {
							e.preventDefault();
							document.getElementById('start')?.scrollIntoView({ block: 'start' ,behavior: 'smooth' });
						}}
						className={styles.jumpLink}
					>
						Back to start
					</Link>
				)}
			</div>
		</div>
	);
};

export default ImageDisplay;
