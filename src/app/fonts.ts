import {
	DM_Serif_Display as Heading,
	Inter as Sans,
	// Geist as Sans,
	Fraunces as Serif,
} from 'next/font/google';

import { cn } from '@/lib/utils';

const fontSans = Sans({
	preload: true,
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans',
	fallback: ['system-ui'],
	weight: 'variable',
});
const fontHeading = Heading({
	preload: true,
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
	style: ['normal', 'italic'],
	variable: '--font-heading',
	fallback: ['serif'],
});
const fontSerif = Serif({
	preload: true,
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
	style: ['normal'],
	variable: '--font-serif',
	fallback: ['serif'],
});

const fontClassNames = cn(
	fontSans.variable,
	fontHeading.variable,
	fontSerif.variable
);

export default fontClassNames;
