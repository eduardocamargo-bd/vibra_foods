'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import type { NumberSectionHomeBlock as _NumberSectionHomeBlockType } from '@/payload-types'
import { HomeCard } from '@/components/ui/HomeCard'

type Stat = {
  number: string | number
  label: string
}

const COLORS = {
  primary: '#2dd1a9',
  secondary: '#c7eb2e',
  tertiary: '#DFF68C',
} as const

const getTranslatedLabel = (statNumber: string | number, t: any): string => {
  const numStr = statNumber.toString()
  if (numStr.includes('+6')) {
    return t('stats.employees')
  } else if (numStr.includes('+900')) {
    return t('stats.families')
  } else if (numStr.includes('+70')) {
    return t('stats.countries')
  }
  return statNumber.toString() // fallback
}

interface NumberSectionHomeBlockProps {
  sectionTitle?: string
  description?: string
  stats?: Stat[]
}

export const NumberSectionHomeBlock: React.FC<NumberSectionHomeBlockProps> = ({
  sectionTitle: _sectionTitle,
  description: _description,
  stats = []
}) => {
  const { t, i18n } = useTranslation('numberSectionHome')



  return (
    <div key={i18n.language} className="overflow-visible bg-white sm:min-h-[1177px]">
      <div className="flex flex-col items-center pt-16">
        <div className="w-full max-w-[552px] text-center md:text-center text-left mb-8">
          <p className="m-0 leading-[58px]">
            <span className="text-[#004349] text-5xl font-light font-ubuntu">
              {t('sectionTitle')}
            </span>
          </p>
        </div>

        <div className="w-full max-w-[552px] lg:max-w-[552px] text-center md:text-center text-left mb-12">
          <p className="text-[#004349] text-3xl font-light font-ubuntu leading-[45px] m-0">
            {t('description')}
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap mb-[58px] md:mb-[120px] md:flex-nowrap md:justify-center flex-col items-center md:overflow-hidden">
          <div className="flex gap-4 md:hidden mb-4">
            {stats
              ?.filter(
                (stat) =>
                  stat.number.toString().includes('+6') || stat.number.toString().includes('+70'),
              )
              .map((stat: Stat, index: number) => {
                const statStr = stat.number.toString()
                const variant: 'small' | 'medium' = 'small'
                let backgroundColor: string = COLORS.primary
                const hasPlus = statStr.startsWith('+')
                const number = (hasPlus ? '+' : '') + statStr.replace(/[^\d]/g, '')
                const unit = statStr.replace(/[\d+]/g, '').trim()

                if (statStr.includes('+70')) {
                  backgroundColor = COLORS.secondary
                }

                return (
                  <HomeCard
                    key={`mobile-${index}`}
                    number={number}
                    unit={unit}
                    label={getTranslatedLabel(stat.number, t)}
                    variant={variant}
                    backgroundColor={backgroundColor}
                    maxHeight="175px"
                  />
                )
              })}
          </div>

          <div className="md:hidden">
            {stats
              ?.filter((stat) => stat.number.toString().includes('+900'))
              .map((stat: Stat, index: number) => {
                const statStr = stat.number.toString()
                const variant: 'small' | 'medium' = 'medium'
                const backgroundColor = COLORS.tertiary
                const hasPlus = statStr.startsWith('+')
                const number = (hasPlus ? '+' : '') + statStr.replace(/[^\d]/g, '')
                const unit = statStr.replace(/[\d+]/g, '').trim()

                return (
                  <HomeCard
                    key={`mobile-900-${index}`}
                    number={number}
                    unit={unit}
                    label={getTranslatedLabel(stat.number, t)}
                    variant={variant}
                    backgroundColor={backgroundColor}
                  />
                )
              })}
          </div>

          <div className="hidden md:flex gap-4 justify-center flex-nowrap overflow-hidden">
            {stats?.map((stat: Stat, index: number) => {
              const statStr = stat.number.toString()
              let variant: 'small' | 'medium' = 'small'
              let backgroundColor: string = COLORS.primary
              const hasPlus = statStr.startsWith('+')
              const number = (hasPlus ? '+' : '') + statStr.replace(/[^\d]/g, '')
              const unit = statStr.replace(/[\d+]/g, '').trim()

              if (statStr.includes('+900')) {
                variant = 'medium'
                backgroundColor = COLORS.tertiary
              } else if (statStr.includes('+70')) {
                backgroundColor = COLORS.secondary
              }

              return (
                <HomeCard
                  key={`desktop-${index}`}
                  number={number}
                  unit={unit}
                  label={getTranslatedLabel(stat.number, t)}
                  variant={variant}
                  backgroundColor={backgroundColor}
                />
              )
            })}
          </div>
        </div>

        <div className="w-full relative overflow-hidden">
          <Image
            src="/art_section_mobile.png"
            alt="Art Section Mobile"
            width={1920}
            height={600}
            className="w-full h-auto object-cover md:hidden"
            priority
          />
          <Image
            src="/art_section.png"
            alt="Art Section"
            width={1920}
            height={600}
            className="w-full h-auto object-cover hidden md:block"
            priority
          />
        </div>
      </div>
    </div>
  )
}
