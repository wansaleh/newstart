import { Metadata } from 'next';

import { baseUrl } from '@/lib/config';

export const siteTitle = 'NewStart';
export const siteDescription =
	'NewStart is a Next.js starter kit with TypeScript, TailwindCSS, and more.';

const siteImage = `${baseUrl}/opengraph`;

export const openGraphMetadata = ({
	title = siteTitle,
	description = siteDescription,
	imageUrl = siteImage,
}: {
	title?: string;
	description?: string;
	imageUrl?: string;
} = {}) => ({
	title,
	description,
	type: 'website',
	url: baseUrl,
	images: [
		{
			url: imageUrl,
			width: 1200,
			height: 675,
			alt: siteTitle,
			type: 'image/png',
		},
	],
});
export const twitterMetadata = ({
	title = siteTitle,
	description = siteDescription,
	imageUrl = siteImage,
}: {
	title?: string;
	description?: string;
	imageUrl?: string;
} = {}) => ({
	card: 'summary_large_image',
	title,
	description,
	creator: '@wansaleh',
	images: [imageUrl],
});

const metadata: Metadata = {
	metadataBase: new URL(baseUrl),

	title: {
		default: siteTitle,
		template: 'QuranSaya — %s',
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
	// icons: [
	// 	{ media: '(prefers-color-scheme: light)', url: '/icon-dark.svg' },
	// 	{ media: '(prefers-color-scheme: dark)', url: '/icon-light.svg' },
	// ],
	authors: [
		{
			name: 'Wan Saleh',
			url: 'https://wansaleh.com',
		},
	],

	openGraph: openGraphMetadata(),
	twitter: twitterMetadata(),
};

export default metadata;
