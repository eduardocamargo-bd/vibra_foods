import React from 'react'
import { cn } from '@/utilities/ui'

interface HomeCardProps {
  number: string | number
  unit?: string
  label: string
  variant?: 'small' | 'medium'
  backgroundColor?: string
  className?: string
  maxHeight?: string
}

const CARD_STYLES = {
  base: "w-full flex p-6 relative box-border items-center rounded-2xl flex-col justify-start gap-6",
  variants: {
    small: "max-w-[280px]",
    medium: "max-w-[360px]"
  }
} as const

const TEXT_COLOR = "text-[#004349]"
const FONT_FAMILY = "font-ubuntu"

const getTextStyles = (variant: 'small' | 'medium') => ({
  number: {
    size: 'md:text-[80px] text-[48px]',
    weight: 'md:font-medium font-bold',
    tracking: 'md:tracking-[-5px] tracking-[-3px]',
    leading: 'md:leading-[80px] leading-[48px]'
  },
  unit: {
    size: 'md:text-[64px] text-[38px]',
    weight: 'md:font-medium font-bold',
    tracking: 'md:tracking-[-4px] tracking-[-2px]',
    leading: 'md:leading-[64px] leading-[38px]'
  },
  label: {
    size: 'md:text-lg text-sm',
    leading: 'md:leading-[22px] leading-[18px]'
  }
})

export const HomeCard: React.FC<HomeCardProps> = ({
  number,
  unit,
  label,
  variant = 'small',
  backgroundColor = '#2dd1a9',
  className,
  maxHeight
}) => {
  const textStyles = getTextStyles(variant)

  return (
    <div
      className={cn(CARD_STYLES.base, CARD_STYLES.variants[variant], className)}
      style={{ 
        backgroundColor,
        ...(maxHeight && { maxHeight, height: maxHeight })
      }}
    >
      <div className="gap-2 w-full flex relative max-w-full box-border items-center flex-col justify-center h-full">
        <div className="w-full max-w-full text-center mb-2">
          <p className={`mt-0 text-center mb-0 ${textStyles.number.leading}`}>
            <span className={`${TEXT_COLOR} ${FONT_FAMILY} ${textStyles.number.weight} ${textStyles.number.tracking} not-italic normal-case ${textStyles.number.size}`}>
              {number}
            </span>
            {unit && (
              <span className={`${TEXT_COLOR} ${FONT_FAMILY} ${textStyles.unit.weight} not-italic normal-case ml-1 ${textStyles.unit.size} ${textStyles.unit.leading} ${textStyles.unit.tracking}`}>
                {unit}
              </span>
            )}
          </p>
        </div>
        <div className="w-full max-w-full text-center">
          <p className={`${TEXT_COLOR} ${textStyles.label.size} not-italic mt-0 text-center ${FONT_FAMILY} font-normal ${textStyles.label.leading} mb-0 tracking-normal normal-case`}>
            {label}
          </p>
        </div>
      </div>
    </div>
  )
}