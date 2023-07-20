import { Inter as Sans } from 'next/font/google';

import globalMetadata from './metadata';
import Providers from './providers';

import './globals.css';

import { cn } from '@/lib/utils';
import Footer from '@/components/footer';

export const metadata = globalMetadata;

const fontSans = Sans({
  preload: true,
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(fontSans.variable)} suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
