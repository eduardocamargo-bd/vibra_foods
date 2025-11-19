'use client'

import React, { useState } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getServerTranslation } from '@/lib/ssrTranslations'
import { useHeader } from '@/contexts/HeaderContext'

interface HeaderTabsProps {
  className?: string
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { activeTab, setActiveTab } = useHeader()
  const { t, i18n } = useTranslation('header')
  const isServer = typeof window === 'undefined'
  const safeT = (key: string) => {
    if (isServer) return getServerTranslation('header', key, 'pt')
    return t(key)
  }

  const languages = [
    { code: 'pt' as const, label: 'Português' },
    { code: 'en' as const, label: 'Inglês' },
    { code: 'es' as const, label: 'Espanhol' },
    { code: 'ar' as const, label: 'العربية' }
  ]

  const currentLangCode = (i18n.language || 'pt').split('-')[0]
  const currentLanguage = languages.find((lang) => lang.code === currentLangCode) || languages[0]

  const handleLanguageChange = (newLanguage: 'pt' | 'en' | 'es') => {
    i18n.changeLanguage(newLanguage)
    setIsOpen(false)
  }

  return (
    <div className={`w-full max-h-11 md:max-h-14 gap-8 md:gap-4 pr-8 md:pr-4 flex items-center justify-between bg-[var(--vf-secondary)] ${className || ''}`}>
      <div className="sm:w-[70%] max-w-[24.8125rem] flex items-center justify-start">
        <div className={`w-full max-w-[6rem] h-full sm:h-[2.6875rem] lg:h-full whitespace-nowrap min-w-[6rem] lg:min-w-[7.875rem] gap-2 py-4  md:py-3 md:px-4 flex items-center justify-center hover:bg-white/30 hover:rounded-t-[16px] transition-colors duration-200 cursor-pointer ${activeTab === 'vibra' ? 'bg-white rounded-tr-[16px]' : 'bg-[var(--vf-secondary)]'}`} onClick={() => setActiveTab('vibra')}>
          <div className="w-full text-center">
            <span className={`text-[var(--vf-primary)] !text-xs lg:!text-[14px] font-ubuntu leading-none ${activeTab === 'vibra' ? 'font-semibold' : 'font-medium'}`} suppressHydrationWarning>{safeT('vibraFoods')}</span>
          </div>
        </div>
        <div className={`md:max-w-none w-full h-full py-4 px-4 md:py-3 md:px-4 flex items-center justify-center hover:bg-white/30 hover:rounded-t-[16px] transition-colors duration-200 cursor-pointer ${activeTab === 'nat' ? 'bg-white rounded-t-[16px]' : ''}`} onClick={() => setActiveTab('nat')}>
          <div className="w-full text-left">
            <span className={`text-[var(--vf-primary)] text-xs lg:text-[14px] font-ubuntu leading-none ${activeTab === 'nat' ? 'font-semibold' : 'font-medium'}`}>{safeT('nat')}</span>
          </div>
        </div>
        <div className={`md:max-w-none w-full h-full py-4 px-4 md:py-3 md:px-4 flex items-center justify-center hover:bg-white/30 hover:rounded-t-[16px] transition-colors duration-200 cursor-pointer ${activeTab === 'avia' ? 'bg-white rounded-t-[16px]' : ''}`} onClick={() => setActiveTab('avia')}>
          <div className="w-full text-left">
            <span className={`text-[var(--vf-primary)] text-xs lg:text-[14px] font-ubuntu leading-none ${activeTab === 'avia' ? 'font-semibold' : 'font-medium'}`}>{safeT('avia')}</span>
          </div>
        </div>
        <div className={`md:max-w-none w-full h-full py-4 px-4 md:py-3 md:px-4 flex items-center justify-center hover:bg-white/30 hover:rounded-t-[16px] transition-colors duration-200 cursor-pointer ${activeTab === 'igredients' ? 'bg-white rounded-t-[16px]' : ''}`} onClick={() => setActiveTab('igredients')}>
          <div className="w-full text-left">
            <span className={`text-[var(--vf-primary)] text-xs lg:text-[14px] font-ubuntu leading-none ${activeTab === 'igredients' ? 'font-semibold' : 'font-medium'}`}>{safeT('ingredients')}</span>
          </div>
        </div>
      </div>
      <div className="max-w-[8.5rem] w-full h-full gap-1 py-1.5 px-2 md:py-1 md:px-1.5 flex items-center justify-center relative hover:bg-white/30 hover:rounded-[16px] transition-colors duration-200">
        <div className="max-w-3 w-full h-full flex items-center justify-center flex-shrink-0">
          <Globe 
            size={18}
            color="var(--vf-primary)"
          />
        </div>
        <div 
          className="flex-1 text-center cursor-pointer flex items-center "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[var(--vf-primary)] text-xs lg:text-[14px] font-ubuntu font-medium leading-none hidden md:block" suppressHydrationWarning>
            {currentLanguage.label}
          </span>
          <span className="text-[var(--vf-primary)] text-xs lg:text-[14px] font-ubuntu font-medium leading-none md:hidden">
            {currentLanguage.code.toUpperCase()}
          </span>
          <ChevronDown 
            size={14}
            color="var(--vf-primary)"
            className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        
        {isOpen && (
          <div className="absolute top-full right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                  currentLanguage.code === lang.code ? 'bg-[var(--vf-secondary)] text-[var(--vf-primary)] font-semibold' : 'text-gray-700'
                }`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                {lang.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderTabs