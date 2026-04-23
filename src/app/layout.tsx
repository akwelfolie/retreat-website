import type { Metadata } from 'next'
import clsx from 'clsx'
import Script from 'next/script'
import '@/styles/tailwind.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { montserrat } from './fonts'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'UNLEASHED — Women’s Empowerment Retreat',
  description:
    "UNLEASHED is a women’s empowerment retreat focused on embodiment, confidence, sensuality, and self-expression through workshops, speakers, and immersive experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
            aria-hidden="true"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>

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
