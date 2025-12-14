import type { Metadata } from 'next'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Crator - The best digital agency on the internet',
  description:
    "Crator is a digital agency with a focus on creative, interactive and innovative design and development. Our team of designers, developers and strategists work together to create customized solutions that are unique to each client's needs.",
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
        <main className="bg-dark-900">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
