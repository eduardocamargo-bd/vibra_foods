'use client'

import React from 'react'
import { Cookie, Settings, X } from 'lucide-react'
import { useCookieConsent } from '@/hooks/useCookieConsent'

export const CookieBanner: React.FC = () => {
  const { 
    showBanner, 
    acceptAll, 
    acceptNecessary, 
    toggleModal, 
    closeBanner 
  } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="vf-cookie-banner">
      <div className="vf-cookie-banner__container">
        <div className="vf-cookie-banner__content">
          <div className="vf-cookie-banner__icon">
            <Cookie size={24} />
          </div>
          
          <div className="vf-cookie-banner__text">
            <h3 className="vf-cookie-banner__title">
              Nós utilizamos cookies
            </h3>
            <p className="vf-cookie-banner__description">
              Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e analisar nosso tráfego. 
              Você pode escolher quais cookies aceitar nas configurações.
            </p>
          </div>
        </div>

        <div className="vf-cookie-banner__actions">
       
          
          <button
            onClick={toggleModal}
            className="vf-button vf-button--outline vf-button--small"
            type="button"
          >
            <Settings size={16} />
            Configurar
          </button>
          
          <button
            onClick={acceptAll}
            className="vf-button vf-button--primary vf-button--small"
            type="button"
          >
            Aceitar Todos
          </button>
        </div>

        <button
          onClick={closeBanner}
          className="vf-cookie-banner__close"
          type="button"
          aria-label="Fechar banner de cookies"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

export default CookieBanner