import Link from 'next/link';
import styles from './ExhibitionsList.module.css';
import PhotographerItem from './ExhibitionsListItem/PhotographerItem';

const PhotographersList = ({ items }: { items: any[] }) => {
	return items.map((exhib: any, i: number) => (
		<PhotographerItem key={i} photographer={exhib} />
	));
};

export default PhotographersList;
