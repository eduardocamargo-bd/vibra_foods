'use client'

import React from 'react'
import { useCookieConsent } from '@/hooks/useCookieConsent'
import { RefreshCw, Trash2, Bug } from 'lucide-react'

export const CookieDebugger: React.FC = () => {
  const { 
    isConsentGiven, 
    preferences, 
    showBanner, 
    resetConsent, 
    debugCookies 
  } = useCookieConsent()

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: '#1a1a1a',
      padding: '16px',
      border: '1px solid #444',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px',
      color: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
    }}>
      <h4 style={{ margin: '0 0 8px 0', color: '#2dd1a9', borderBottom: '1px solid #444', paddingBottom: '4px' }}>
        🍪 Cookie Debug Panel
      </h4>
      
      <div style={{ marginBottom: '8px', color: '#e0e0e0' }}>
        <strong style={{ color: '#c7eb2e' }}>Status:</strong> {isConsentGiven ? '✅ Consent Given' : '❌ No Consent'}
      </div>
      
      <div style={{ marginBottom: '8px', color: '#e0e0e0' }}>
        <strong style={{ color: '#c7eb2e' }}>Banner:</strong> {showBanner ? '👁️ Visible' : '🙈 Hidden'}
      </div>
      
      <div style={{ marginBottom: '12px', color: '#e0e0e0' }}>
        <strong style={{ color: '#c7eb2e' }}>Preferences:</strong>
        <ul style={{ margin: '4px 0', paddingLeft: '16px' }}>
          <li style={{ color: '#ffffff' }}>Necessary: {preferences.necessary ? '✅' : '❌'}</li>
          <li style={{ color: '#ffffff' }}>Analytics: {preferences.analytics ? '✅' : '❌'}</li>
          <li style={{ color: '#ffffff' }}>Marketing: {preferences.marketing ? '✅' : '❌'}</li>
          <li style={{ color: '#ffffff' }}>Functional: {preferences.functional ? '✅' : '❌'}</li>
        </ul>
      </div>
      
      <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
        <button
          onClick={debugCookies}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 8px',
            background: '#004349',
            color: 'white',
            border: '1px solid #006670',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: '500'
          }}
        >
          <Bug size={14} />
          Debug Cookies
        </button>
        
        <button
          onClick={resetConsent}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 8px',
            background: '#f97316',
            color: 'white',
            border: '1px solid #ff8a50',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: '500'
          }}
        >
          <Trash2 size={14} />
          Reset Cookies
        </button>
        
        <button
          onClick={() => window.location.reload()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 8px',
            background: '#2dd1a9',
            color: 'white',
            border: '1px solid #5ce1c3',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: '500'
          }}
        >
          <RefreshCw size={14} />
          Reload Page
        </button>
      </div>
      
      <div style={{ 
        marginTop: '8px', 
        padding: '8px', 
        background: '#2a2a2a', 
        border: '1px solid #c7eb2e',
        borderRadius: '4px',
        fontSize: '11px',
        color: '#c7eb2e'
      }}>
        💡 Abra DevTools → Application → Cookies para ver os cookies salvos
      </div>
    </div>
  )
}

export default CookieDebugger