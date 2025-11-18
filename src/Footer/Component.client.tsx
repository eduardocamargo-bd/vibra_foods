'use client'

import Link from 'next/link'
import React from 'react'
import { Phone, Mail, Instagram, Facebook, Twitter, Linkedin, Check, Globe, ChevronDown } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'

import type { Footer } from '@/payload-types'


interface FooterClientProps {
  footerData: Footer
}

export const FooterClient: React.FC<FooterClientProps> = ({ footerData }) => {
  const { t } = useTranslation()
  const navItems = footerData?.navItems || []

  return (
    <footer className="w-full bg-[var(--vf-primary)] text-white">
      <div className=" sm:margin-auto sm:p-6 lg:px-[160px] lg:py-8 md:px-8">
        <div className=" p-4 flex flex-col lg:flex-row gap-12 lg:gap-8">
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
                {t('footer.mission')}
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
              {t('footer.communication')}
            </p>

            <div className="flex items-start justify-start gap-6 min-w-[208px]">
              <div className="w-6 h-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <div className="flex flex-col gap-1 lg:max-w-[208px]">
                  <p className="text-white text-sm font-ubuntu leading-[18px]">
                    {t('footer.freeCall')}
                  </p>
                  <p className="text-white text-sm font-ubuntu leading-[18px]">
                    {t('footer.southRegion')}
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-start gap-6 min-w-[208px]">
                <div className="w-6 h-6">
                  <Mail className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                </div>
              </div>

              <div className="flex items-start gap-3">

                <p className="text-white text-sm font-ubuntu leading-[18px]">{t('footer.email')}</p>
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
                      placeholder={t('footer.newsletterPlaceholder')}
                      className="flex-1 bg-transparent border-none outline-none text-[var(--vf-gray)] text-xs md:text-sm font-roboto leading-[22px]"
                    />
                  </div>
                </div>
                  <button className="vf-button-primary-styled">
                    {t('footer.send')}
                  </button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-[613px]">
              <div className="flex flex-col gap-6">
                <h3 className="text-white text-lg font-ubuntu font-bold">{t('footer.about')}</h3>
                <div className="flex flex-col gap-3">
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.manifesto')}
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.brands')}
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.history')}
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.qualityControl')}
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.innovation')}
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.projects')}
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.partners')}
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.governance')}
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.certifications')}
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.whereWeAre')}
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.news')}
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    {t('footer.contacts')}
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">{t('footer.healthyFuture')}</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.esgCommitment')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.animalWelfare')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.environment')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.socioeconomic')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.socialEnvironmentalImpact')}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">{t('footer.institutional')}</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.reports')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.governance')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.conductEthics')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.complaintsChannel')}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">{t('footer.careers')}</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.whoWeAre')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.howWeVibrate')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.ourMission')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.diversityInclusion')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.benefits')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.jobs')}
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.whereWeAre')}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">{t('footer.suppliers')}</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      {t('footer.wantToBeSupplier')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 md:px-8 border-t border-[var(--vf-border)]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex flex-row gap-5">
            <p className="text-white text-[12px] lg:text-sm font-ubuntu leading-[18px]">
              {t('footer.copyright')}
            </p>
            <p className="text-white text-sm font-ubuntu font-semibold leading-[18px] whitespace-nowrap">
              {t('footer.allRightsReserved')}
            </p>
          </div>
          <div className="flex flex-row  lg:flex-row items-start lg:items-center gap-6">
            <Link
              href="#"
              className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
            >
              {t('footer.privacyPolicy')}
            </Link>
            <Link
              href="#"
              className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
            >
              {t('footer.cookieSettings')}
            </Link>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap hidden md:block">{t('footer.changeLanguage')}</span>
              <span className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap md:hidden">{t('footer.pt')}</span>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}