'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useHeader } from '@/contexts/HeaderContext'

interface HeaderMainProps {
  className?: string
}

const HeaderMain: React.FC<HeaderMainProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { activeTab } = useHeader()
  const { t, i18n } = useTranslation('header')

  const languages = [
    { code: 'pt', name: 'PT', flag: '🇧🇷' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'es', name: 'ES', flag: '🇪🇸' },
    { code: 'ar', name: 'العَرَبِيَّة', flag: '🇸🇦' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    setIsLanguageDropdownOpen(false)
  }

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  return (
    <div className={`
      w-full h-[4.5rem] md:overflow-hidden max-w-full 
      flex items-center justify-center 
      bg-white border-b border-[var(--vf-border)] 
      rounded-b-[2rem] p-0 m-0 mx-auto
      shadow-[var(--vf-shadow-vibra)]
      ${className || ''}
    `}>
      <div className="
        w-full h-full flex items-center justify-between
        gap-10 px-8 relative
        lg:gap-6 lg:px-6
        md:gap-4 md:px-4
        sm:gap-2 sm:px-2
      ">
        <div className="
          flex items-center justify-start 
          max-w-[7.0625rem] flex-shrink-0 flex-none
        ">
          <div className="w-full max-w-[7.0625rem]">
            <Image
              src={activeTab === 'vibra' ? '/assets/logotipo.svg' : `/assets/logotipo_${activeTab}.svg`}
              alt="Vibra Foods Logo"
              width={113}
              height={35}
              className="w-full h-auto max-w-[7.0625rem] block"
            />
          </div>
        </div>

    
        <div className="
          h-full flex items-center justify-center 
          gap-10 flex-1 whitespace-nowrap
          xl:gap-8
          lg:gap-6
          md:gap-4
          sm:gap-2
        ">
       
          <div className="hidden md:flex items-center gap-10 xl:gap-8 lg:gap-6 md:gap-4">
            <div className="
              flex items-center justify-center 
              h-full max-h-[39px] px-3 cursor-pointer 
              rounded-sm transition-all duration-200
              hover:bg-black/5 hover:-translate-y-px
              lg:px-2 md:px-1 ml-[14rem]
            ">
              <span
                className="
                text-black text-[16px] font-medium
                font-ubuntu transition-colors duration-200
                hover:text-[var(--vf-primary)]
              " suppressHydrationWarning>
                {t('nav.aboutUs')}
              </span>
            </div>
            
            <div className="
              flex items-center justify-center 
              h-full max-h-[39px] px-3 cursor-pointer 
              rounded-sm transition-all duration-200
              hover:bg-black/5 hover:-translate-y-px
              lg:px-2 md:px-1
            ">
              <span
                className="
                text-black text-[16px] font-medium
                font-ubuntu transition-colors duration-200
                hover:text-[var(--vf-primary)]
              ">
                {t('nav.healthyFuture')}
              </span>
            </div>
            
            <div className="
              flex items-center justify-center 
              h-full max-h-[39px] px-3 cursor-pointer 
              rounded-sm transition-all duration-200
              hover:bg-black/5 hover:-translate-y-px
              lg:px-2 md:px-1
            ">
              <span
                className="
                text-black text-[16px] font-medium
                font-ubuntu transition-colors duration-200
                hover:text-[var(--vf-primary)]
              ">
                {t('nav.innovation')}
              </span>
            </div>
            
            <div className="
              flex items-center justify-center 
              h-full max-h-[39px] px-3 cursor-pointer 
              rounded-sm transition-all duration-200
              hover:bg-black/5 hover:-translate-y-px
              lg:px-2 md:px-1
            ">
              <span
                className="
                text-black text-[16px] font-medium
                font-ubuntu transition-colors duration-200
                hover:text-[var(--vf-primary)]
              ">
                {t('nav.workWithUs')}
              </span>
            </div>
            
            <div className="
              flex items-center justify-center 
              h-full max-h-[39px] px-3 cursor-pointer 
              rounded-sm transition-all duration-200
              hover:bg-black/5 hover:-translate-y-px
              lg:px-2 md:px-1
            ">
              <span
                className="
                text-black text-[16px] font-medium
                font-ubuntu transition-colors duration-200
                hover:text-[var(--vf-primary)]
              ">
                {t('nav.news')}
              </span>
            </div>
          </div>

          {/* Search Icon - Hidden on mobile */}
          {activeTab === 'vibra' && (
            <div className="
              hidden md:flex w-6 h-6 items-center justify-center ml-[4rem]
              cursor-pointer transition-transform duration-200 
              flex-shrink-0 hover:scale-110
            ">
              <Image
                src="/assets/search.svg"
                alt="Search"
                width={24}
                height={24}
              />
            </div>
          )}
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-center ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-black/5 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={18} color="var(--vf-primary)" />
              ) : (
                <Menu size={18} color="var(--vf-primary)" />
              )}
            </button>
          </div>
          
          {/* Primary Button - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-center 
            h-10 px-6 min-w-[10rem] flex-shrink-0
            bg-[var(--vf-primary)] rounded-full cursor-pointer 
            transition-all duration-200
            hover:bg-[#007883] hover:shadow-[var(--vf-shadow-button)] hover:-translate-y-0.5
            lg:min-w-[9rem] lg:px-4
            md:min-w-[8rem] md:px-3
          ">
            <span
              className="
              text-white text-[14px] font-semibold
              font-ubuntu text-center
            ">
              {t('nav.beClient')}
            </span>
          </div>
          
          {/* Secondary Button - Hidden on mobile */}
          <div className={`hidden md:flex items-center justify-center group
            h-10 px-6 min-w-[11rem] flex-shrink-0
            border rounded-full 
            cursor-pointer transition-all duration-200 whitespace-nowrap
            hover:shadow-[var(--vf-shadow-button)] hover:-translate-y-0.5
            lg:min-w-[10rem] lg:px-4
            md:min-w-[9rem] md:px-3
            ${activeTab !== 'vibra' ? 'bg-[#2DD1A9] border-[#2DD1A9] text-[#004349] hover:bg-[#2DD1A9]' : 'border-[var(--vf-primary)] bg-transparent text-[var(--vf-primary)] hover:bg-[var(--vf-primary)] group-hover:text-white'}`}
          >
            <span
              className={`
              text-[14px] font-semibold
              font-ubuntu text-center
              ${activeTab !== 'vibra' ? 'text-[#004349]' : 'text-[var(--vf-primary)] group-hover:text-white'}
            `}
            >
              {t('nav.producerSpace')}
            </span>
          </div>
        </div>

 

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}

        {isMobileMenuOpen && (
          <div className={`
            fixed top-[2.7rem] h-[70vh] left-1/2 transform -translate-x-1/2 w-full max-w-[90vw] bg-white border-b border-[var(--vf-border)] 
            shadow-[var(--vf-shadow-vibra)] z-50 md:hidden transition-all duration-300 ease-in-out
            translate-y-0 opacity-100
          `}>
            {/* Mobile Header with Logo */}
            <div className="px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start max-w-[7.0625rem] flex-shrink-0">
                  <Image
                    src={activeTab === 'vibra' ? '/assets/logotipo.svg' : `/assets/logotipo_${activeTab}.svg`}
                    alt="Vibra Foods Logo"
                    width={113}
                    height={35}
                    className="w-full h-auto max-w-[7.0625rem] block"
                  />
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md hover:bg-black/5 transition-colors duration-200"
                  aria-label="Close mobile menu"
                >
                  <X size={20} color="var(--vf-primary)" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="px-4 py-6">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder=""
                  className="w-full h-10 px-3 pl-10 border border-[var(--vf-border)] rounded-[12px] bg-white text-black text-sm font-medium "
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4">
                  <Image
                    src="/assets/search.svg"
                    alt="Search"
                    width={18}
                    height={18}
                    style={{ filter: 'invert(62%) sepia(100%) saturate(500%) hue-rotate(120deg) brightness(100%) contrast(100%)' }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-start py-3 px-4 cursor-pointer rounded-md hover:bg-black/5 transition-colors duration-200" onClick={closeMobileMenu}>
                  <span
                    className="text-black text-[18px] font-medium font-ubuntu"
                  >
                    {t('nav.aboutUs')}
                  </span>
                </div>
                
                <div className="flex items-center justify-start py-3 px-4 cursor-pointer rounded-md hover:bg-black/5 transition-colors duration-200" onClick={closeMobileMenu}>
                  <span
                    className="text-black text-[18px] font-medium font-ubuntu"
                  >
                    {t('nav.healthyFuture')}
                  </span>
                </div>
                
                <div className="flex items-center justify-start py-3 px-4 cursor-pointer rounded-md hover:bg-black/5 transition-colors duration-200" onClick={closeMobileMenu}>
                  <span
                    className="text-black text-[18px] font-medium font-ubuntu"
                  >
                    {t('nav.innovation')}
                  </span>
                </div>
                
                <div className="flex items-center justify-start py-3 px-4 cursor-pointer rounded-md hover:bg-black/5 transition-colors duration-200" onClick={closeMobileMenu}>
                  <span
                    className="text-black text-[18px] font-medium font-ubuntu"
                    suppressHydrationWarning
                  >
                    {t('nav.workWithUs')}
                  </span>
                </div>
                
                <div className="flex items-center justify-start py-3 px-4 cursor-pointer rounded-md hover:bg-black/5 transition-colors duration-200" onClick={closeMobileMenu}>
                  <span
                    className="text-black text-[18px] font-medium font-ubuntu"
                  >
                    {t('nav.news')}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Buttons */}
            <div className="px-4 py-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center h-10 px-6 w-full bg-[var(--vf-primary)] rounded-full cursor-pointer transition-all duration-200 hover:bg-[#007883] hover:shadow-[var(--vf-shadow-button)] hover:-translate-y-0.5">
                  <span className="text-white text-[16px] font-semibold font-ubuntu text-center">
                    {t('nav.beClient')}
                  </span>
                </div>
                <div className={`flex items-center justify-center h-10 px-6 w-full border rounded-full cursor-pointer transition-all duration-200 hover:shadow-[var(--vf-shadow-button)] hover:-translate-y-0.5 group ${activeTab !== 'vibra' ? 'bg-[#2DD1A9] border-[#2DD1A9] text-[#004349] hover:bg-[#2DD1A9]' : 'border-[var(--vf-primary)] bg-transparent hover:bg-[var(--vf-primary)]'}`}>
                  <span className={`text-[16px] font-semibold font-ubuntu text-center ${activeTab !== 'vibra' ? 'text-[#004349]' : 'text-[var(--vf-primary)] group-hover:text-white'}`}>
                    {t('nav.producerSpace')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderMain