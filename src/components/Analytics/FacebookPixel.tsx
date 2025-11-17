'use client'

import { useEffect } from 'react'
import { useCookieConsent } from '@/hooks/useCookieConsent'

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    _fbq?: any
  }
}

interface FacebookPixelProps {
  pixelId?: string
}

export const FacebookPixel: React.FC<FacebookPixelProps> = ({ 
  pixelId = '1234567890123456'
}) => {
  const { preferences, isConsentGiven } = useCookieConsent()

  useEffect(() => {
    if (!isConsentGiven || !preferences.marketing) {
      return
    }

    if (window.fbq) {
      return
    }

    const initFBPixel = () => {
      const f = window as any
      const b = document
      const e = 'script'
      const v = 'https://connect.facebook.net/en_US/fbevents.js'
      
      if (f.fbq) return
      
      const n: any = f.fbq = function(...args: any[]) {
        if (n && n.callMethod) {
          n.callMethod(...args)
        } else if (n && n.queue) {
          n.queue.push(args)
        }
      }
      
      if (!f._fbq) f._fbq = n
      
      if (n) {
        n.push = n
        n.loaded = true
        n.version = '2.0'
        n.queue = []
      }
      
      const t = b.createElement(e) as HTMLScriptElement
      t.async = true
      t.src = v
      
      const s = b.getElementsByTagName(e)[0]
      if (s && s.parentNode) {
        s.parentNode.insertBefore(t, s)
      }
    }
    
    initFBPixel()

    if (window.fbq) {
      const fbq = window.fbq as any
      fbq('init', pixelId)
      fbq('consent', 'grant')
      fbq('track', 'PageView')
      fbq('trackCustom', 'CookieConsentGiven', {
        consent_type: 'marketing',
        platform: 'vibra_foods'
      })
    }

  }, [isConsentGiven, preferences.marketing, pixelId])

  useEffect(() => {
    if (isConsentGiven && !preferences.marketing && window.fbq) {
      window.fbq('consent', 'revoke')
    }
  }, [isConsentGiven, preferences.marketing])

  return null
}

export default FacebookPixel