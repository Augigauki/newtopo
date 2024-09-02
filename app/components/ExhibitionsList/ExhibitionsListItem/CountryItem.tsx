'use client';
import Link from 'next/link';
import styles from '../ExhibitionsList.module.css';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { exhibItemVariants } from '@/util/framermotion/variants';
import { Exhibition, Photograph } from '@/types/payload-types';
import Image from 'next/image';
import { MouseEvent, useState } from 'react';

const CountryItem = ({ country }: { country: Exhibition }) => {
	const thumbnail: Photograph = country.thumbnail as Photograph;
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const translateX = useTransform(x, (value) => `${value}px`);
	const translateY = useTransform(y, (value) => `${value}px`);

	const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
		x.set(event.clientX);
		y.set(event.clientY);
	};

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	return (
		<motion.div
			className={styles.exhibLink}
			style={{ borderRight: '2px solid var(--darksand)', paddingRight: '1rem' }}
		>
			<Link
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				href={`/exhibitions/country/${country.slug}`}
				className={styles.linkwrapper}
			>
				<motion.div
					variants={exhibItemVariants}
					initial='static'
					animate={isHovered ? 'hover' : 'static'}
					className={styles.exhibItem}
				>
					{/* <div className={styles.bgImgWrapper}>
							<BgImage photos={photos} />
							<div className={styles.bgOverlay} />
							<h3 className={styles.title}>{country.title}</h3>
						</div> */}
					<h3 className={styles.title}>{country.title}</h3>
				</motion.div>
			</Link>
			{thumbnail !== null && isHovered && (
				<motion.div
					className={styles.hoverimgwrapper}
					style={{
						translateX,
						translateY,
						pointerEvents: 'none',
					}}
				>
					<Image
						src={thumbnail.url ? thumbnail.url : ''}
						alt={country.title}
						fill={true}
					/>
				</motion.div>
			)}
		</motion.div>
	);
};

export default CountryItem;
