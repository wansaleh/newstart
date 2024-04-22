import { Metadata } from 'next';

import { baseUrl } from '@/lib/config';

export const siteTitle = 'NewStart';
export const siteDescription =
	'NewStart is a Next.js starter kit with TypeScript, TailwindCSS, and more.';

const metadata: Metadata = {
	metadataBase: new URL(baseUrl),

	title: {
		default: siteTitle,
		template: `${siteTitle} — %s`,
	},
	robots: {
		index: true,
		follow: true,
	},
	description: siteDescription,
	keywords: ['NextJS', 'React', 'TypeScript', 'TailwindCSS'],
	icons: [
		{ media: '(prefers-color-scheme: light)', url: '/icon-dark.svg' },
		{ media: '(prefers-color-scheme: dark)', url: '/icon-light.svg' },
	],
	authors: [
		{
			name: 'Wan Saleh',
			url: 'https://wansaleh.com',
		},
	],
};

export default metadata;
