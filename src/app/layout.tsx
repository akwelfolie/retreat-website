import type { Metadata } from 'next'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { montserrat } from './fonts'
import { Analytics } from '@vercel/analytics/next';



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
    <html lang="en" className={montserrat.variable}>
      <body className={clsx('font-sans')}>
        <Navbar />
          <main className="bg-void-900">
            {children}
            <Analytics />
          </main>
        <Footer />
      </body>
    </html>
  )
}
