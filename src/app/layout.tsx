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
  title: 'Emma — Empowering Education',
  description: 'Join Emma\'s community of learners. Online courses, live workshops, and a thriving Skool community to help you grow.',
  openGraph: {
    title: 'Emma — Empowering Education',
    description: 'Online courses, live workshops, and a thriving community.',
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
