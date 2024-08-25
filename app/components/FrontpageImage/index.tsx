'use client';

import { useState } from 'react';
import styles from './component.module.css';
import Image from 'next/image';

const FrontpageImage = ({ photos }: { photos: any[] }) => {
	const [heroImg, setHeroImg] = useState<any>(photos[Math.floor(Math.random() * photos.length)]);
	console.log(heroImg);
	return (
		<div style={{ position: 'relative', height: '100%', width: '100%' }}>
			<Image
				src={heroImg.url}
				alt={`${heroImg.alt ? heroImg.alt : 'Hero background image'}`}
				fill={true}
				style={{ objectFit: 'cover' }}
			/>
			<div className={styles.imginfobar}>
				{heroImg.photographer && (
					<div className={styles.infowrapper}>
						<p className={styles.label}>Photographer</p>
						<p className={styles.info}>{heroImg.photographer.name}</p>
					</div>
				)}
				{heroImg.exhibition && (
					<div className={styles.infowrapper}>
						<p className={styles.label}>Exhibition</p>
						<p className={styles.info}>{heroImg.exhibition.title}</p>
					</div>
				)}

				<div className={styles.infowrapper}>
					<p className={styles.label}>Location</p>
					<p className={styles.info}>{heroImg.location}</p>
				</div>
				<div className={styles.infowrapper}>
					<p className={styles.label}>Year</p>
					<p className={styles.info}>{heroImg.year}</p>
				</div>
			</div>
		</div>
	);
};

export default FrontpageImage;
