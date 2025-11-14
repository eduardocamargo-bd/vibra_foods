'use client'

import React from 'react'
import GoogleAnalytics from './GoogleAnalytics'
import FacebookPixel from './FacebookPixel'
import { useCookieConsent } from '@/hooks/useCookieConsent'

interface AnalyticsProviderProps {
  googleAnalyticsId?: string
  facebookPixelId?: string
  children?: React.ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
  facebookPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '1234567890123456',
  children
}) => {
  const { isConsentGiven, preferences } = useCookieConsent()

  return (
    <>
      {children}
      
      {isConsentGiven && preferences.analytics && (
        <GoogleAnalytics trackingId={googleAnalyticsId} />
      )}
      
      {isConsentGiven && preferences.marketing && (
        <FacebookPixel pixelId={facebookPixelId} />
      )}
      {isConsentGiven && preferences.marketing && (
        <FacebookPixel pixelId={facebookPixelId} />
      )}
    </>
  )
}

export default AnalyticsProvider