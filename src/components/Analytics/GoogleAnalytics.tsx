'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { useCookieConsent } from '@/hooks/useCookieConsent'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

interface GoogleAnalyticsProps {
  trackingId?: string
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  trackingId = 'G-XXXXXXXXXX' 
}) => {
  const { preferences, isConsentGiven } = useCookieConsent()

  useEffect(() => {
    
    if (!isConsentGiven || !preferences.analytics) {
      return
    }


    if (!window.dataLayer) {
      window.dataLayer = []
    }


    window.gtag = function(...args: any[]) {
      if (window.dataLayer) {
        window.dataLayer.push(args)
      }
    }


    window.gtag?.('js', new Date())
    window.gtag?.('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
      anonymize_ip: true,
      allow_google_signals: preferences.marketing,
      allow_ad_personalization_signals: preferences.marketing
    })


    
    window.gtag?.('event', 'cookie_consent_given', {
      event_category: 'privacy',
      event_label: 'analytics_enabled',
      value: 1
    })

  }, [isConsentGiven, preferences.analytics, preferences.marketing, trackingId])

  if (!isConsentGiven || !preferences.analytics) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              allow_google_signals: ${preferences.marketing},
              allow_ad_personalization_signals: ${preferences.marketing}
            });
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics