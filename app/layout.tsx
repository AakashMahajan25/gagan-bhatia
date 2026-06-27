import type { Metadata } from 'next'
import { Syne, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Gagaan Bhatia — Digital Marketing Specialist',
  description:
    'Gagaan Bhatia — Digital Marketing Specialist. 4+ years running social media campaigns, Meta ad strategies, and content systems for brands across India.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  )
}
