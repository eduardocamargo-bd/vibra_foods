"use client"

import React from 'react'
import { ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'



const BackToTopButton: React.FC = () => {
const { t } = useTranslation('header')
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div
      onClick={scrollToTop}
      className="gap-[8px] w-full flex px-[24px] py-[16px] overflow-hidden relative max-w-[229px] box-border items-center justify-center bg-[#004349] cursor-pointer  mx-auto"
    >
      <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
        <p className="text-[#ffffff] text-[18px] not-italic mt-0 text-left font-['Ubuntu',_sans-serif] font-normal leading-[22px] mb-0 tracking-[0px] normal-case">
          {t('backToTop')}
        </p>
      </div>
      <ArrowUp
        size={24}
        color="white"
        className="w-full overflow-hidden max-w-[24px] box-border items-start flex-col justify-start"
      />
    </div>
  )
}

export default BackToTopButton