import Link from 'next/link';
import styles from './ExhibitionsList.module.css';
import PhotographerItem from './ExhibitionsListItem/PhotographerItem';
import { Photographer } from '@/types/payload-types';

const PhotographersList = ({ items }: { items: Photographer[] }) => {
	return items.map((exhib: Photographer, i: number) => (
		<PhotographerItem key={i} photographer={exhib} />
	));
};

export default PhotographersList;
