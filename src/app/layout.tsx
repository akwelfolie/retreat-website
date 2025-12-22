import type { Metadata } from 'next'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Unleashed — Women’s Empowerment Retreat',
  description:
    "Unleashed is a women’s empowerment retreat focused on embodiment, confidence, sensuality, and self-expression through workshops, speakers, and immersive experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx('font-sans', inter.variable)}>
        <Navbar />
        <main className="bg-void-900">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
