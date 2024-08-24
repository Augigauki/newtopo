import CountryItem from './ExhibitionsListItem/CountryItem';

const ExhibitionsList = async ({ items }: { items: any }) => {
	return items.map(async (exhib: any, i: number) => {
		return (
			<CountryItem key={i} country={exhib} />
		);
	});
};

export default ExhibitionsList;
