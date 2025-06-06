import type { Metadata } from 'next'
import { Suspense } from 'react'
import localFont from 'next/font/local'
import { Inter, Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils'

import Providers from '@/app/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

import './globals.css'
import './prosemirror.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'pocketsurance',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='scroll-smooth' suppressHydrationWarning>
      <body
        className={cn(
          'flex h-screen flex-col',
          geistSans.variable,
          geistMono.variable,
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <Suspense>
            <main className='grow'>{children}</main>
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
