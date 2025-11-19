"use client"

import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { Phone, Mail, Instagram, Facebook, Globe, ChevronDown, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import type { Footer } from '@/payload-types'
import { getServerTranslation } from '@/lib/ssrTranslations'
import FloatingChatButton from '@/components/ui/FloatingChatButton'

interface FooterClientProps {
  footerData: Footer
}

export const FooterClient: React.FC<FooterClientProps> = ({ footerData }) => {
  const { t, i18n } = useTranslation('footer')
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const isServer = typeof window === 'undefined'
  const safeT = (key: string) => (isServer ? getServerTranslation('footer', key, 'pt') : t(key))

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
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

  return (
    <footer className="w-full bg-[var(--vf-primary)] text-white relative">
      <div className="sm:margin-auto sm:p-6 lg:px-[10rem] lg:py-8 md:px-8">
        <div className="p-6 flex flex-col lg:flex-row gap-12 lg:gap-8">
          <div className="flex flex-col items-start lg:items-center gap-8 lg:w-[40%]">
            <div className="flex flex-col items-start gap-4">
              <img
                src="/assets/vibra_logo_branco.svg"
                alt="Vibra Logo"
                width="208"
                height="78"
                className="w-[208px] h-[78px]"
              />
              <p className="text-white text-sm font-ubuntu leading-[18px] max-w-[208px]">
                {safeT('mission')}
              </p>
            </div>

            <div className="flex items-start justify-start gap-6 min-w-[208px]">
              <div className="w-6 h-6">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="w-6 h-6">
                <Facebook className="w-6 h-6 text-white" />
              </div>
            </div>

            <p className="text-white text-sm font-ubuntu leading-[18px] max-w-[208px]">
              {safeT('communication')}
            </p>

            <div className="flex items-start justify-start gap-6 min-w-[208px]">
              <div className="w-6 h-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <div className="flex flex-col gap-1 lg:max-w-[208px]">
                  <p className="text-white text-sm font-ubuntu leading-[18px]">{safeT('freeCall')}</p>
                  <p className="text-white text-sm font-ubuntu leading-[18px] whitespace-nowrap">{safeT('southRegion')}</p>
                </div>
              </div>

              <div className="flex items-start justify-start gap-6 min-w-[208px]">
                <div className="w-6 h-6">
                  <Mail className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <p className="text-white text-sm font-ubuntu leading-[18px]">{safeT('email')}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:w-1/2 justify-center">
            <div className="max-w-[613px]">
              <div className="flex flex-row gap-3">
                <div className="flex items-center min-w-[226px] lg:min-w-[442px] h-[48px] justify-between p-2 lg:p-4 border border-[var(--vf-border)] rounded-lg bg-white">
                  <div className="flex items-center gap-2 flex-1">
                    <Mail className="w-4 h-4 text-[var(--vf-gray)]" />
                    <input
                      type="email"
                      placeholder={safeT('newsletterPlaceholder')}
                      className="flex-1 bg-transparent border-none outline-none text-[var(--vf-gray)] text-xs md:text-sm font-roboto leading-[22px]"
                    />
                  </div>
                </div>
                <button className="vf-button-primary-styled">{safeT('send')}</button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-[613px]">
              <div className="flex flex-col gap-6">
                <h3 className="text-white text-lg font-ubuntu font-bold">{safeT('about')}</h3>
                <div className="flex flex-col gap-3">
                  <Link href={safeT('links.manifesto')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('manifesto')}</Link>
                  <Link href={safeT('links.brands')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('brands')}</Link>
                  <Link href={safeT('links.history')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('history')}</Link>
                  <Link href={safeT('links.qualityControl')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('qualityControl')}</Link>
                  <Link href={safeT('links.innovation')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('innovation')}</Link>
                  <Link href={safeT('links.projects')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('projects')}</Link>
                  <Link href={safeT('links.partners')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('partners')}</Link>
                  <Link href={safeT('links.governance')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('governance')}</Link>
                  <Link href={safeT('links.certifications')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('certifications')}</Link>
                  <Link href={safeT('links.whereWeAre')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('whereWeAre')}</Link>
                  <Link href={safeT('links.news')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('news')}</Link>
                  <Link href={safeT('links.contacts')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('contacts')}</Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-white text-lg font-ubuntu font-bold">{safeT('healthyFuture')}</h3>
                <div className="flex flex-col gap-3">
                  <Link href={safeT('links.esgCommitment')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('esgCommitment')}</Link>
                  <Link href={safeT('links.animalWelfare')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('animalWelfare')}</Link>
                  <Link href={safeT('links.environment')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('environment')}</Link>
                  <Link href={safeT('links.socioeconomic')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('socioeconomic')}</Link>
                  <Link href={safeT('links.socialEnvironmentalImpact')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('socialEnvironmentalImpact')}</Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-white text-lg font-ubuntu font-bold">{safeT('institutional')}</h3>
                <div className="flex flex-col gap-3">
                  <Link href={safeT('links.reports')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('reports')}</Link>
                  <Link href={safeT('links.governance')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('governance')}</Link>
                  <Link href={safeT('links.conductEthics')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('conductEthics')}</Link>
                  <Link href={safeT('links.complaintsChannel')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('complaintsChannel')}</Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-white text-lg font-ubuntu font-bold">{safeT('careers')}</h3>
                <div className="flex flex-col gap-3">
                  <Link href={safeT('links.whoWeAre')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('whoWeAre')}</Link>
                  <Link href={safeT('links.howWeVibrate')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('howWeVibrate')}</Link>
                  <Link href={safeT('links.ourMission')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('ourMission')}</Link>
                  <Link href={safeT('links.diversityInclusion')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('diversityInclusion')}</Link>
                  <Link href={safeT('links.benefits')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('benefits')}</Link>
                  <Link href={safeT('links.jobs')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('jobs')}</Link>
                  <Link href={safeT('links.whereWeAre')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('whereWeAre')}</Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-white text-lg font-ubuntu font-bold">{safeT('suppliers')}</h3>
                <div className="flex flex-col gap-3">
                  <Link href={safeT('links.wantToBeSupplier')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('wantToBeSupplier')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 max-h-[80px]  lg:px-[160px] py-4 md:px-8 border-t border-[var(--vf-border)] relative">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-[235px]">
          <div className="flex flex-row gap-5">
            <p className="text-white text-[12px] lg:text-sm font-ubuntu leading-[18px] whitespace-nowrap">{safeT('copyright')}</p>
            <p className="text-white text-sm font-ubuntu font-semibold leading-[18px] whitespace-nowrap">{safeT('allRightsReserved')}</p>
          </div>
          <div className="flex flex-row lg:flex-row items-start justify-between lg:justify-unset lg:items-center gap-6">
            <Link href={safeT('links.privacyPolicy')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('privacyPolicy')}</Link>
            <Link href={safeT('links.cookieSettings')} className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap">{safeT('cookieSettings')}</Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                type="button"
              >
                <Globe className="w-4 h-4 text-white" />
                <span className="text-white text-xs md:text-sm font-ubuntu leading-[18px] whitespace-nowrap hidden md:block">
                  {safeT('changeLanguage')}
                </span>
                <span className="text-white text-xs md:text-sm font-ubuntu leading-[18px] whitespace-nowrap md:hidden">
                  {languages.find(lang => lang.code === i18n.language)?.flag || '🇧🇷'}
                </span>
                <ChevronDown className={`w-4 h-4 text-white transition-transform ml-2 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute bottom-full mb-2 right-0 bg-white rounded-2xl shadow-lg border border-gray-200 py-2 min-w-[140px] z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors ${language.code === i18n.language ? 'bg-gray-100' : ''}`}
                      type="button"
                    >
                      <span>{language.name}</span>
                   
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <FloatingChatButton />
      </div>
    </footer>
  )
}