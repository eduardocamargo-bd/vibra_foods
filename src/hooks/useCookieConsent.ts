'use client'

import { useState, useEffect, useCallback } from 'react'
import Cookies from 'js-cookie'

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export interface CookieConsentState {
  isConsentGiven: boolean
  preferences: CookiePreferences
  showBanner: boolean
  showModal: boolean
}

const COOKIE_CONSENT_KEY = 'vf_cookie_consent'
const COOKIE_PREFERENCES_KEY = 'vf_cookie_preferences'
const CONSENT_EXPIRY_DAYS = 365

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true, 
  analytics: false,
  marketing: false,
  functional: false,
}

export const useCookieConsent = () => {
  const [state, setState] = useState<CookieConsentState>({
    isConsentGiven: false,
    preferences: DEFAULT_PREFERENCES,
    showBanner: false,
    showModal: false,
  })

  // Initialize consent state from cookies
  useEffect(() => {
    const consentCookie = Cookies.get(COOKIE_CONSENT_KEY)
    const preferencesCookie = Cookies.get(COOKIE_PREFERENCES_KEY)
    
    const isConsentGiven = consentCookie === 'true'
    const preferences = preferencesCookie 
      ? JSON.parse(preferencesCookie) 
      : DEFAULT_PREFERENCES

    setState(prev => ({
      ...prev,
      isConsentGiven,
      preferences,
      showBanner: !isConsentGiven,
    }))
  }, [])

  // Accept all cookies
  const acceptAll = useCallback(() => {
    const allAcceptedPreferences: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }

    // Set cookies with proper configuration
    Cookies.set(COOKIE_CONSENT_KEY, 'true', { 
      expires: CONSENT_EXPIRY_DAYS,
      path: '/',
      secure: window.location.protocol === 'https:',
      sameSite: 'Lax'
    })
    
    Cookies.set(COOKIE_PREFERENCES_KEY, JSON.stringify(allAcceptedPreferences), { 
      expires: CONSENT_EXPIRY_DAYS,
      path: '/',
      secure: window.location.protocol === 'https:',
      sameSite: 'Lax'
    })

    // Set individual preference cookies for each category
    Cookies.set('vf_analytics_consent', 'true', { expires: CONSENT_EXPIRY_DAYS, path: '/' })
    Cookies.set('vf_marketing_consent', 'true', { expires: CONSENT_EXPIRY_DAYS, path: '/' })
    Cookies.set('vf_functional_consent', 'true', { expires: CONSENT_EXPIRY_DAYS, path: '/' })
    Cookies.set('vf_necessary_consent', 'true', { expires: CONSENT_EXPIRY_DAYS, path: '/' })

    setState(prev => ({
      ...prev,
      isConsentGiven: true,
      preferences: allAcceptedPreferences,
      showBanner: false,
      showModal: false,
    }))

    // Load analytics and marketing scripts
    loadConditionalScripts(allAcceptedPreferences)
  }, [])

  // Accept only necessary cookies
  const acceptNecessary = useCallback(() => {
    const necessaryOnlyPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }

    // Set main cookies
    Cookies.set(COOKIE_CONSENT_KEY, 'true', { 
      expires: CONSENT_EXPIRY_DAYS,
      path: '/',
      secure: window.location.protocol === 'https:',
      sameSite: 'Lax'
    })
    
    Cookies.set(COOKIE_PREFERENCES_KEY, JSON.stringify(necessaryOnlyPreferences), { 
      expires: CONSENT_EXPIRY_DAYS,
      path: '/',
      secure: window.location.protocol === 'https:',
      sameSite: 'Lax'
    })

    // Set individual preference cookies (only necessary)
    Cookies.set('vf_analytics_consent', 'false', { expires: CONSENT_EXPIRY_DAYS, path: '/' })
    Cookies.set('vf_marketing_consent', 'false', { expires: CONSENT_EXPIRY_DAYS, path: '/' })
    Cookies.set('vf_functional_consent', 'false', { expires: CONSENT_EXPIRY_DAYS, path: '/' })
    Cookies.set('vf_necessary_consent', 'true', { expires: CONSENT_EXPIRY_DAYS, path: '/' })

    setState(prev => ({
      ...prev,
      isConsentGiven: true,
      preferences: necessaryOnlyPreferences,
      showBanner: false,
      showModal: false,
    }))
  }, [])

  // Save custom preferences
  const savePreferences = useCallback((preferences: CookiePreferences) => {
    const finalPreferences = { ...preferences, necessary: true }

    // Set main cookies
    Cookies.set(COOKIE_CONSENT_KEY, 'true', { 
      expires: CONSENT_EXPIRY_DAYS,
      path: '/',
      secure: window.location.protocol === 'https:',
      sameSite: 'Lax'
    })
    
    Cookies.set(COOKIE_PREFERENCES_KEY, JSON.stringify(finalPreferences), { 
      expires: CONSENT_EXPIRY_DAYS,
      path: '/',
      secure: window.location.protocol === 'https:',
      sameSite: 'Lax'
    })

    // Set individual preference cookies based on user choices
    Cookies.set('vf_analytics_consent', finalPreferences.analytics ? 'true' : 'false', { expires: CONSENT_EXPIRY_DAYS, path: '/' })
    Cookies.set('vf_marketing_consent', finalPreferences.marketing ? 'true' : 'false', { expires: CONSENT_EXPIRY_DAYS, path: '/' })
    Cookies.set('vf_functional_consent', finalPreferences.functional ? 'true' : 'false', { expires: CONSENT_EXPIRY_DAYS, path: '/' })
    Cookies.set('vf_necessary_consent', 'true', { expires: CONSENT_EXPIRY_DAYS, path: '/' }) // Always true

    setState(prev => ({
      ...prev,
      isConsentGiven: true,
      preferences: finalPreferences,
      showBanner: false,
      showModal: false,
    }))

    // Load conditional scripts based on preferences
    loadConditionalScripts(finalPreferences)
  }, [])

  // Reset consent (for testing or user request)
  const resetConsent = useCallback(() => {
    // Remove all consent-related cookies
    Cookies.remove(COOKIE_CONSENT_KEY, { path: '/' })
    Cookies.remove(COOKIE_PREFERENCES_KEY, { path: '/' })
    Cookies.remove('vf_analytics_consent', { path: '/' })
    Cookies.remove('vf_marketing_consent', { path: '/' })
    Cookies.remove('vf_functional_consent', { path: '/' })
    Cookies.remove('vf_necessary_consent', { path: '/' })

    setState({
      isConsentGiven: false,
      preferences: DEFAULT_PREFERENCES,
      showBanner: true,
      showModal: false,
    })
  }, [])

  // Toggle modal visibility
  const toggleModal = useCallback(() => {
    setState(prev => ({
      ...prev,
      showModal: !prev.showModal,
    }))
  }, [])

  // Close banner
  const closeBanner = useCallback(() => {
    setState(prev => ({
      ...prev,
      showBanner: false,
    }))
  }, [])

  // Load conditional scripts based on preferences
  const loadConditionalScripts = useCallback((preferences: CookiePreferences) => {
    // Google Analytics
    if (preferences.analytics && typeof window !== 'undefined') {
      // Load GA4 script
      const script = document.createElement('script')
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
      script.async = true
      document.head.appendChild(script)

      // Initialize GA4
      ;(window as any).gtag = (window as any).gtag || function(...args: any[]) { 
        (((window as any).gtag).q = ((window as any).gtag).q || []).push(args) 
      }
      ;(window as any).gtag('js', new Date())
      ;(window as any).gtag('config', 'GA_MEASUREMENT_ID')
    }

    // Marketing pixels (Facebook, LinkedIn, etc.)
    if (preferences.marketing && typeof window !== 'undefined') {
      // Facebook Pixel
      // Add Facebook Pixel code here if needed
      console.log('Marketing cookies enabled - load Facebook Pixel, etc.')
    }

    // Functional cookies (chat widgets, etc.)
    if (preferences.functional && typeof window !== 'undefined') {
      // Load functional scripts
      console.log('Functional cookies enabled - load chat widgets, etc.')
    }
  }, [])

  // Debug function to check cookies
  const debugCookies = useCallback(() => {
    console.log('=== COOKIE DEBUG ===')
    console.log('Consent Cookie:', Cookies.get(COOKIE_CONSENT_KEY))
    console.log('Preferences Cookie:', Cookies.get(COOKIE_PREFERENCES_KEY))
    console.log('Analytics Consent:', Cookies.get('vf_analytics_consent'))
    console.log('Marketing Consent:', Cookies.get('vf_marketing_consent'))
    console.log('Functional Consent:', Cookies.get('vf_functional_consent'))
    console.log('Necessary Consent:', Cookies.get('vf_necessary_consent'))
    console.log('All Cookies:', document.cookie)
    console.log('Current State:', state)
    console.log('===================')
  }, [state])

  return {
    ...state,
    acceptAll,
    acceptNecessary,
    savePreferences,
    resetConsent,
    toggleModal,
    closeBanner,
    debugCookies,
  }
}

// Cookie utility functions
export const getCookiePreference = (type: keyof CookiePreferences): boolean => {
  if (typeof window === 'undefined') return false
  
  const preferencesCookie = Cookies.get(COOKIE_PREFERENCES_KEY)
  if (!preferencesCookie) return false
  
  try {
    const preferences = JSON.parse(preferencesCookie)
    return preferences[type] || false
  } catch {
    return false
  }
}

// Analytics helper function
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (getCookiePreference('analytics') && typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventName, parameters)
  }
}