import { Exhibition } from '@/types/payload-types';
import CountryItem from './ExhibitionsListItem/CountryItem';

const ExhibitionsList = async ({ items }: { items: Exhibition[] }) => {
	return items.map((exhib: Exhibition, i: number) => {
		return (
			<CountryItem key={i} country={exhib} />
		);
	});
};

export default ExhibitionsList;
