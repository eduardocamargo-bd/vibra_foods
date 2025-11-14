'use client'

import React, { useState, useEffect } from 'react'
import { X, Cookie, Shield, BarChart3, Target, Wrench, Info } from 'lucide-react'
import { useCookieConsent, CookiePreferences } from '@/hooks/useCookieConsent'

interface CookieCategory {
  key: keyof CookiePreferences
  title: string
  description: string
  icon: React.ReactNode
  required: boolean
  examples: string[]
}

const cookieCategories: CookieCategory[] = [
  {
    key: 'necessary',
    title: 'Cookies Necessários',
    description: 'Essenciais para o funcionamento básico do site. Não podem ser desabilitados.',
    icon: <Shield size={20} />,
    required: true,
    examples: ['Autenticação de sessão', 'Preferências de idioma', 'Carrinho de compras']
  },
  {
    key: 'functional',
    title: 'Cookies Funcionais',
    description: 'Permitem funcionalidades avançadas como chat ao vivo e personalização.',
    icon: <Wrench size={20} />,
    required: false,
    examples: ['Widget de chat', 'Preferências de tema', 'Configurações personalizadas']
  },
  {
    key: 'analytics',
    title: 'Cookies de Análise',
    description: 'Nos ajudam a entender como você usa nosso site para melhorá-lo.',
    icon: <BarChart3 size={20} />,
    required: false,
    examples: ['Google Analytics', 'Heatmaps', 'Estatísticas de uso']
  },
  {
    key: 'marketing',
    title: 'Cookies de Marketing',
    description: 'Utilizados para exibir anúncios relevantes e medir campanhas publicitárias.',
    icon: <Target size={20} />,
    required: false,
    examples: ['Facebook Pixel', 'Google Ads', 'Remarketing']
  }
]

export const CookieModal: React.FC = () => {
  const { 
    showModal, 
    preferences: currentPreferences, 
    toggleModal, 
    savePreferences 
  } = useCookieConsent()
  
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(currentPreferences)

  useEffect(() => {
    setLocalPreferences(currentPreferences)
  }, [currentPreferences])

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return // Cannot toggle necessary cookies
    
    setLocalPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleSave = () => {
    savePreferences(localPreferences)
  }

  const handleAcceptAll = () => {
    const allEnabled: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(allEnabled)
  }

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    }
    savePreferences(onlyNecessary)
  }

  if (!showModal) return null

  return (
    <div className="vf-cookie-modal-overlay">
      <div className="vf-cookie-modal">
        <div className="vf-cookie-modal__header">
          <div className="vf-cookie-modal__title">
            <Cookie size={24} />
            <h2>Configurações de Cookies</h2>
          </div>
          <button
            onClick={toggleModal}
            className="vf-cookie-modal__close"
            type="button"
            aria-label="Fechar modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="vf-cookie-modal__content">
          <div className="vf-cookie-modal__intro">
            <p>
              Respeitamos sua privacidade e damos controle total sobre seus dados. 
              Configure abaixo quais tipos de cookies você deseja permitir.
            </p>
          </div>

          <div className="vf-cookie-modal__categories">
            {cookieCategories.map((category) => (
              <div key={category.key} className="vf-cookie-category">
                <div className="vf-cookie-category__header">
                  <div className="vf-cookie-category__info">
                    <div className="vf-cookie-category__icon">
                      {category.icon}
                    </div>
                    <div className="vf-cookie-category__text">
                      <h3 className="vf-cookie-category__title">
                        {category.title}
                        {category.required && (
                          <span className="vf-cookie-category__required">
                            (Obrigatório)
                          </span>
                        )}
                      </h3>
                      <p className="vf-cookie-category__description">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="vf-cookie-category__toggle">
                    <label className="vf-toggle">
                      <input
                        type="checkbox"
                        checked={localPreferences[category.key]}
                        onChange={() => handleToggle(category.key)}
                        disabled={category.required}
                      />
                      <span className="vf-toggle__slider"></span>
                    </label>
                  </div>
                </div>

                <div className="vf-cookie-category__examples">
                  <div className="vf-cookie-category__examples-header">
                    <Info size={16} />
                    <span>Exemplos:</span>
                  </div>
                  <ul>
                    {category.examples.map((example, index) => (
                      <li key={index}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vf-cookie-modal__footer">
          <div className="vf-cookie-modal__actions">
            <button
              onClick={handleRejectAll}
              className="vf-button vf-button--ghost"
              type="button"
            >
              Rejeitar Todos
            </button>
            
            <button
              onClick={handleSave}
              className="vf-button vf-button--outline"
              type="button"
            >
              Salvar Configurações
            </button>
            
            <button
              onClick={handleAcceptAll}
              className="vf-button vf-button--primary"
              type="button"
            >
              Aceitar Todos
            </button>
          </div>
          
          <div className="vf-cookie-modal__legal">
            <p>
              Para mais informações, consulte nossa{' '}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                Política de Privacidade
              </a>
              {' '}e{' '}
              <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">
                Política de Cookies
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieModal