import { Metadata } from 'next';

const metadata: Metadata = {
  metadataBase: new URL('https://newstart.vercel.app'),

  title: {
    default: 'NewStart',
    template: 'NewStart — %s',
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    'NewStart is a NextJS 13 starter template for me to bootstrap new projects.',
  keywords: ['NextJS', 'React', 'TypeScript', 'TailwindCSS'],
  twitter: {
    title: 'NewStart',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  themeColor: 'rgb(0 0 0)',
  authors: [
    {
      name: 'Wan Saleh',
      url: 'https://wansaleh.com',
    },
  ],
};

export default metadata;
