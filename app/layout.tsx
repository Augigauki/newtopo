import type { Metadata } from 'next';
import './reset.css';
import './globals.css';
import Head from 'next/head';
import Nav from './components/Nav';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'New Topographics',
	description: 'An online museum for New Topographics photography',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<Nav />
				{children}
			</body>
		</html>
	);
}
