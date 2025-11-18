import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import CookieBanner from '@/components/CookieBanner'
import CookieModal from '@/components/CookieModal'
// import CookieDebugger from '@/components/CookieDebugger'
import { AnalyticsProvider } from '@/components/Analytics'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="pt" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/assets/logo_page.svg" rel="icon" type="image/svg+xml" />
        <link href="/assets/logo_page.svg" rel="apple-touch-icon" />
      </head>
      <body>
        <Providers>
            <AdminBar
              adminBarProps={{
                preview: isEnabled,
              }}
            />

            <Header />
            <main className="grid grid-cols-1">
              {children}
            </main>
            <Footer />
            
        
            <CookieBanner />
            <CookieModal />
          
            
            <AnalyticsProvider />
          </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
