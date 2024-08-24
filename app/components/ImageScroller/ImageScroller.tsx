'use client';

import styles from './ImageScroller.module.css';
import { usePathname } from 'next/navigation';
import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageDisplay from '../ImageDisplay/ImageDisplay';
import Link from 'next/link';

const ImageScroller = ({ images, children }: { images: any[]; children: ReactNode }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [totalWidth, setTotalWidth] = useState(0);

	const { scrollYProgress } = useScroll();

	const fullpath = usePathname();
	const path = fullpath.split('/')[2];

	useEffect(() => {
		if (containerRef.current) {
			const container = containerRef.current;

			const totalWidth = Array.from(container.children).reduce((acc, child) => {
				return acc + (child as HTMLElement).offsetWidth;
			}, 0);

			setTotalWidth(totalWidth);
		} else {
			console.log('no container');
		}
	}, [images]);

	const x = useTransform(scrollYProgress, [0, 1], ['0%', -totalWidth]);
	useEffect(() => {
		const handleScroll = (event: WheelEvent) => {
			if (containerRef.current) {
				containerRef.current.scrollLeft += event.deltaY;
			}
		};

		window.addEventListener('wheel', handleScroll);

		return () => {
			window.removeEventListener('wheel', handleScroll);
		};
	}, []);
	return (
		<motion.div
			className={styles.scroller}
			ref={containerRef}
			style={{ x }}
		>
			{children}
			{images
				? images.map((image: any, index: number) => {
						image = image.photo ? image.photo : image;
						return (
							<ImageDisplay
								index={index}
								image={image}
								path={path}
								key={index}
								length={images.length}
							/>
						);
				  })
				: null}
		</motion.div>
	);
};

export default ImageScroller;
