'use client';

import { Exhibition, Photographer } from '@/types/payload-types';
import styles from './ExhibBlock.module.css';

interface ExhibBlock {
	exhibitions: Exhibition[];
	photographers: Photographer[];
}

type Combined = Exhibition | Photographer;

const ExhibBlock = ({ exhibitions, photographers }: ExhibBlock) => {
	// Step 1: Combine the arrays
	const combinedArray: Combined[] = [...exhibitions, ...photographers];

	// Step 2: Shuffle the combined array
	function shuffleArray<T>(array: T[]): T[] {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const shuffledArray: Combined[] = shuffleArray(combinedArray);

	return (
		<div className={styles.wrapper}>
			<div className={styles.block}>

            </div>
		</div>
	);
};

export default ExhibBlock;
