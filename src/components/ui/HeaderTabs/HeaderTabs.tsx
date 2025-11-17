'use client'

import React from 'react'
import { Globe, ChevronDown } from 'lucide-react'

interface HeaderTabsProps {
  className?: string
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ className }) => {
  return (
    <div className={`w-full max-h-11 md:max-h-14 gap-8 md:gap-4 pr-8 md:pr-4 flex items-center justify-between overflow-hidden bg-[var(--vf-secondary)] ${className || ''}`}>
      <div className="max-w-[24.8125rem] flex items-center justify-start">
        <div className=" w-full h-full whitespace-nowrap min-w-[7.875rem] h-full gap-2 md:py-3 md:px-4 flex items-center justify-center overflow-hidden rounded-tr-[16px] bg-[var(--vf-white)]">
          <div className="w-full text-center">
            <span className="text-[var(--vf-primary)] lg:text-[14px] md:text-xs font-ubuntu font-semibold leading-none">Vibra Foods</span>
          </div>
        </div>
        <div className="max-w-[4.5rem] md:max-w-none w-full h-full py-4 px-6 md:py-3 md:px-4 flex items-center justify-center overflow-hidden hover:bg-white/30 transition-colors duration-200 cursor-pointer">
          <div className="w-full text-left">
            <span className="text-[var(--vf-primary)] lg:text-[14px] md:text-xs font-ubuntu font-semibold leading-none">Nat</span>
          </div>
        </div>
        <div className="max-w-[4.75rem] md:max-w-none w-full h-full py-4 px-6 md:py-3 md:px-4 flex items-center justify-center overflow-hidden hover:bg-white/30 transition-colors duration-200 cursor-pointer">
          <div className="w-full text-left">
            <span className="text-[var(--vf-primary)] lg:text-[14px] md:text-xs font-ubuntu font-semibold leading-none">Ávia</span>
          </div>
        </div>
        <div className="min-w-[7.6875rem] md:max-w-none w-full h-full py-4 px-6 md:py-3 md:px-4 flex items-center justify-center overflow-hidden hover:bg-white/30 transition-colors duration-200 cursor-pointer">
          <div className="w-full text-left">
            <span className="text-[var(--vf-primary)] min-w-[125px] lg:text-[14px] md:text-xs font-ubuntu font-semibold leading-none">Ingredients</span>
          </div>
        </div>
      </div>
      <div className="max-w-[8.5rem] w-full h-full gap-2 py-1.5 px-2 md:py-1 md:px-1.5 flex items-center justify-center overflow-hidden">
        <div className="max-w-4.5 w-full h-full flex items-center justify-center overflow-hidden">
          <Globe 
            size={18}
            color="var(--vf-primary)"
          />
        </div>
        <div className="w-full text-left">
          <span className="text-[var(--vf-primary)] text-[14px] md:text-xs font-ubuntu font-semibold leading-none">Português</span>
        </div>
        <div className="max-w-4.5 w-full h-full flex items-center justify-center overflow-hidden">
          <ChevronDown 
            size={18}
            color="var(--vf-primary)"
          />
        </div>
      </div>
    </div>
  )
}

export default HeaderTabs