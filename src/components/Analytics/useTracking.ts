'use client'

import { useCallback } from 'react'
import { useCookieConsent } from '@/hooks/useCookieConsent'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
    fbq?: (...args: any[]) => void
    _fbq?: any
  }
}

interface TrackingEvent {
  action: string
  category?: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

interface EcommerceEvent {
  currency?: string
  value?: number
  items?: Array<{
    item_id: string
    item_name: string
    category?: string
    quantity?: number
    price?: number
  }>
}

export const useTracking = () => {
  const { isConsentGiven, preferences } = useCookieConsent()

  // Google Analytics Event Tracking
  const trackEvent = useCallback((event: TrackingEvent) => {
    if (!isConsentGiven || !preferences.analytics || !window.gtag) {

      return
    }

    window.gtag?.('event', event.action, {
      event_category: event.category || 'general',
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters
    })


  }, [isConsentGiven, preferences.analytics])

  // Facebook Pixel Event Tracking
  const trackFacebookEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
    if (!isConsentGiven || !preferences.marketing || !window.fbq) {

      return
    }

    if (parameters) {
      window.fbq?.('track', eventName, parameters)
    } else {
      window.fbq?.('track', eventName)
    }


  }, [isConsentGiven, preferences.marketing])

  // E-commerce Tracking (GA4)
  const trackPurchase = useCallback((transactionData: EcommerceEvent & {
    transaction_id: string
  }) => {
    if (!isConsentGiven || !preferences.analytics || !window.gtag) {

      return
    }

    window.gtag?.('event', 'purchase', {
      transaction_id: transactionData.transaction_id,
      currency: transactionData.currency || 'BRL',
      value: transactionData.value,
      items: transactionData.items
    })

    // Também tracka no Facebook se houver consentimento de marketing
    if (preferences.marketing && window.fbq) {
      window.fbq?.('track', 'Purchase', {
        currency: transactionData.currency || 'BRL',
        value: transactionData.value
      })
    }


  }, [isConsentGiven, preferences.analytics, preferences.marketing])

  // View Item Event
  const trackViewItem = useCallback((itemData: {
    item_id: string
    item_name: string
    category?: string
    price?: number
  }) => {
    // GA4
    trackEvent({
      action: 'view_item',
      category: 'ecommerce',
      custom_parameters: {
        currency: 'BRL',
        value: itemData.price,
        items: [itemData]
      }
    })

    // Facebook Pixel
    trackFacebookEvent('ViewContent', {
      content_type: 'product',
      content_ids: [itemData.item_id],
      content_name: itemData.item_name,
      value: itemData.price,
      currency: 'BRL'
    })
  }, [trackEvent, trackFacebookEvent])

  // Add to Cart Event
  const trackAddToCart = useCallback((itemData: {
    item_id: string
    item_name: string
    category?: string
    price?: number
    quantity?: number
  }) => {
    // GA4
    trackEvent({
      action: 'add_to_cart',
      category: 'ecommerce',
      custom_parameters: {
        currency: 'BRL',
        value: (itemData.price || 0) * (itemData.quantity || 1),
        items: [itemData]
      }
    })

    // Facebook Pixel
    trackFacebookEvent('AddToCart', {
      content_type: 'product',
      content_ids: [itemData.item_id],
      content_name: itemData.item_name,
      value: itemData.price,
      currency: 'BRL'
    })
  }, [trackEvent, trackFacebookEvent])

  // Page View (customizado)
  const trackPageView = useCallback((pagePath: string, pageTitle?: string) => {
    if (!isConsentGiven || !preferences.analytics || !window.gtag) {
      return
    }

    window.gtag?.('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle || document.title
    })

    // Facebook Pixel PageView
    if (preferences.marketing && window.fbq) {
      window.fbq?.('track', 'PageView')
    }


  }, [isConsentGiven, preferences.analytics, preferences.marketing])

  // Conversão/Lead
  const trackConversion = useCallback((conversionData: {
    type: 'newsletter' | 'contact' | 'download' | 'custom'
    value?: number
    custom_parameters?: Record<string, any>
  }) => {
    // GA4
    trackEvent({
      action: 'conversion',
      category: 'lead_generation',
      label: conversionData.type,
      value: conversionData.value,
      custom_parameters: conversionData.custom_parameters
    })

    // Facebook Pixel
    trackFacebookEvent('Lead', {
      content_category: conversionData.type,
      value: conversionData.value || 0,
      currency: 'BRL'
    })
  }, [trackEvent, trackFacebookEvent])

  return {
    trackEvent,
    trackFacebookEvent,
    trackPurchase,
    trackViewItem,
    trackAddToCart,
    trackPageView,
    trackConversion,
    isTrackingEnabled: isConsentGiven && (preferences.analytics || preferences.marketing),
    hasAnalyticsConsent: isConsentGiven && preferences.analytics,
    hasMarketingConsent: isConsentGiven && preferences.marketing
  }
}

export default useTracking