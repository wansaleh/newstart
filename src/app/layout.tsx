import type { Viewport } from 'next'
import Footer from '@/components/footer'

import { TailwindIndicator } from '@/components/tailwind-indicator'

import fontClassNames from './fonts'

import globalMetadata from './metadata'
import Providers from './providers'

import './globals.css'

export const metadata = globalMetadata
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontClassNames} suppressHydrationWarning>
      <body>
        <Providers>
          <main>{children}</main>
          <Footer />
        </Providers>
        <TailwindIndicator />
      </body>
    </html>
  )
}
