'use client';

import { useEffect, useState } from 'react';
import styles from './component.module.css';
import Image from 'next/image';
import { Exhibition, Photograph, Photographer } from '@/types/payload-types';

const FrontpageImage = ({ photos }: { photos: any[] }) => {
	const [heroImg, setHeroImg] = useState<Photograph | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const photographer: Photographer = heroImg?.photographer as Photographer;
	const exhibition: Exhibition = heroImg?.exhibition as Exhibition;
	useEffect(() => {
		setHeroImg(photos[Math.floor(Math.random() * photos.length)]);
		setLoading(false);
	}, [photos])
	
	if(loading){
		return(
			<div style={{ position: 'relative', height: '100%', width: '100%' }}>
				Loading...
			</div>
		)
	} 
	
	if(heroImg){
		return (
			<div style={{ position: 'relative', height: '100%', width: '100%' }}>
				<Image
					src={heroImg.url ? heroImg.url : ''}
					alt={`${heroImg.exhibition ? heroImg.exhibition : 'Hero image'}`}
					fill={true}
					style={{ objectFit: 'cover' }}
				/>
				<div className={styles.imginfobar}>
					{heroImg.photographer && (
						<div className={styles.infowrapper}>
							<p className={styles.label}>Photographer</p>
							<p className={styles.info}>{photographer.name}</p>
						</div>
					)}
					{heroImg.exhibition && (
						<div className={styles.infowrapper}>
							<p className={styles.label}>Exhibition</p>
							<p className={styles.info}>{exhibition.title}</p>
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
	}
	
};

export default FrontpageImage;
