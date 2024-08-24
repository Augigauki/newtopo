import PageWrapper from '@/app/components/PageWrapper/PageWrapper';
import styles from './ExhibitionsPage.module.css';
import { getExhibitions } from '@/app/data/getExhibitions';
import Link from 'next/link';
import { getPhotographers } from '@/app/data/getPhotographers';
import ExhibitionsList from '@/app/components/ExhibitionsList/ExhibitionsList';
import PhotographersList from '@/app/components/ExhibitionsList/PhotographersList';

const ExhibitionsPage = async ({}) => {
	const exhibFetch = await getExhibitions();
	const exhibitions = await exhibFetch.docs;
	const photographersFetch = await getPhotographers();
	const photographers = await photographersFetch.docs;

	return (
		<PageWrapper>
			<h1>Exhibitions</h1>
			<div className={styles.exhibitionsWrapper}>
				<div className={styles.listWrapper}>
					<h2>Countries</h2>
					<ExhibitionsList items={exhibitions} />
				</div>
				<div className={styles.divider} />
				<div className={styles.listWrapper}>
					<h2 style={{paddingLeft: '1rem'}}>Photographers</h2>
					<PhotographersList items={photographers} />
				</div>
			</div>
			
		</PageWrapper>
	);
};

export default ExhibitionsPage;
