'use client'

import React, { useState } from 'react'
import { Globe, ChevronDown } from 'lucide-react'

interface HeaderTabsProps {
  className?: string
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' }
  ]

  const currentLanguage = languages[0] // Sempre PT por padrão

  const handleLanguageChange = (newLocale: string) => {
    // Por enquanto apenas fecha o dropdown
    setIsOpen(false)
  }

  return (
    <div className={`w-full max-h-11 md:max-h-14 gap-8 md:gap-4 pr-8 md:pr-4 flex items-center justify-between bg-[var(--vf-secondary)] ${className || ''}`}>
      <div className="sm:w-[70%] max-w-[24.8125rem] flex items-center justify-start">
        <div className="w-full max-w-[6rem] h-full sm:h-[2.6875rem] lg:h-full whitespace-nowrap min-w-[6rem] lg:min-w-[7.875rem] gap-2 py-4  md:py-3 md:px-4 flex items-center justify-center rounded-tr-[16px] bg-[var(--vf-white)]">
          <div className="w-full text-center">
            <span className="text-[var(--vf-primary)] !text-xs lg:!text-[14px] font-ubuntu font-medium leading-none">Vibra Foods</span>
          </div>
        </div>
        <div className="md:max-w-none w-full h-full py-4 px-4 md:py-3 md:px-4 flex items-center justify-center hover:bg-white/30 transition-colors duration-200 cursor-pointer">
          <div className="w-full text-left">
            <span className="text-[var(--vf-primary)] text-xs lg:text-[14px] font-ubuntu font-medium leading-none">Nat</span>
          </div>
        </div>
        <div className="md:max-w-none w-full h-full py-4 px-4 md:py-3 md:px-4 flex items-center justify-center hover:bg-white/30 transition-colors duration-200 cursor-pointer">
          <div className="w-full text-left">
            <span className="text-[var(--vf-primary)] text-xs lg:text-[14px] font-ubuntu font-medium leading-none">Avia</span>
          </div>
        </div>
        <div className="md:max-w-none w-full h-full py-4 px-4 md:py-3 md:px-4 flex items-center justify-center hover:bg-white/30 transition-colors duration-200 cursor-pointer">
          <div className="w-full text-left">
            <span className="text-[var(--vf-primary)] text-xs lg:text-[14px] font-ubuntu font-medium leading-none">Ingredientes</span>
          </div>
        </div>
      </div>
      <div className="max-w-[8.5rem] w-full h-full gap-2 py-1.5 px-2 md:py-1 md:px-1.5 flex items-center justify-center relative">
        <div className="max-w-4.5 w-full h-full flex items-center justify-center">
          <Globe 
            size={18}
            color="var(--vf-primary)"
          />
        </div>
        <div 
          className="w-full text-left cursor-pointer flex items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[var(--vf-primary)] text-xs lg:text-[14px] font-ubuntu font-medium leading-none hidden md:block">
            {currentLanguage.label}
          </span>
          <span className="text-[var(--vf-primary)] text-xs lg:text-[14px] font-ubuntu font-medium leading-none md:hidden">
            {currentLanguage.code.toUpperCase()}
          </span>
          <ChevronDown 
            size={18}
            color="var(--vf-primary)"
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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