import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import React from 'react'
import Footer from '../../components/footer/footer'
import { Navbar } from '../../components/nav'
import './global.css'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'ekonuma',
    template: '%s | ekonuma',
  },
  icons: {
    // icon: './'
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {

  const messages = await getMessages();
  return (
    <html
      lang={locale}
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-6xl mx-4 mt-8 lg:mx-24">
        <AntdRegistry>
          <NextIntlClientProvider messages={messages}>
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <Navbar />
              {children}
              <Footer />
              <Analytics />
              <SpeedInsights />
            </main>
          </NextIntlClientProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
