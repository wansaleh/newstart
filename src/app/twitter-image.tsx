import generateOpenGraph from '@/lib/generate-opengraph';

import { siteDescription, siteTitle } from './metadata';

export const runtime = 'edge';

export const alt = `${siteTitle} / ${siteDescription}`;
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function OG() {
	return generateOpenGraph({
		title: siteTitle,
		description: siteDescription,
	});
}
