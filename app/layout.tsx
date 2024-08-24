import type { Metadata } from 'next';
import './reset.css';
import './globals.css';
import Head from 'next/head';
import Nav from './components/Nav';

export const metadata: Metadata = {
	title: 'New Topographics',
	description: 'An online museum for New Topographics photography',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<Head>
				<link
					href='https://api.fontshare.com/v2/css?f[]=tanker@400&f[]=clash-grotesk@1&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<body>
				<Nav />
				{children}
			</body>
		</html>
	);
}
