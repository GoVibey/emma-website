import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Emma - You Don\'t Have to Navigate Cancer Alone',
  description: 'Join a community of survivors, fighters, and supporters who understand exactly what you\'re going through - led by someone who\'s dedicated her life to cancer prevention.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Emma - You Don\'t Have to Navigate Cancer Alone',
    description: 'A community of cancer survivors, fighters, and supporters.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
