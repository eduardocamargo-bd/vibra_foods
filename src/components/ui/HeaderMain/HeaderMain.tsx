'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Search, Menu, X } from 'lucide-react'

interface HeaderMainProps {
  className?: string
}

const HeaderMain: React.FC<HeaderMainProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        {/* Logo Container */}
        <div className="
          flex items-center justify-start 
          max-w-[7.0625rem] flex-shrink-0 flex-none
        ">
          <div className="w-full max-w-[7.0625rem]">
            <Image
              src="/assets/logotipo.svg"
              alt="Vibra Foods Logo"
              width={113}
              height={35}
              className="w-full h-auto max-w-[7.0625rem] block"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="
          h-full flex items-center justify-center 
          gap-10 flex-1 whitespace-nowrap
          xl:gap-8
          lg:gap-6
          md:gap-4
          sm:gap-2
        ">
          {/* Desktop Navigation Items - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-10 xl:gap-8 lg:gap-6 md:gap-4">
            <div className="
              flex items-center justify-center 
              h-full max-h-[39px] px-3 cursor-pointer 
              rounded-sm transition-all duration-200
              hover:bg-black/5 hover:-translate-y-px
              lg:px-2 md:px-1 ml-[14rem]
            ">
              <span className="
                text-black text-[16px] font-medium
                font-ubuntu transition-colors duration-200
                hover:text-[var(--vf-primary)]
              ">
                Sobre nós
              </span>
            </div>
            
            <div className="
              flex items-center justify-center 
              h-full max-h-[39px] px-3 cursor-pointer 
              rounded-sm transition-all duration-200
              hover:bg-black/5 hover:-translate-y-px
              lg:px-2 md:px-1
            ">
              <span className="
                text-black text-[16px] font-medium
                font-ubuntu transition-colors duration-200
                hover:text-[var(--vf-primary)]
              ">
                Futuro saudável
              </span>
            </div>
            
            <div className="
              flex items-center justify-center 
              h-full max-h-[39px] px-3 cursor-pointer 
              rounded-sm transition-all duration-200
              hover:bg-black/5 hover:-translate-y-px
              lg:px-2 md:px-1
            ">
              <span className="
                text-black text-[16px] font-medium
                font-ubuntu transition-colors duration-200
                hover:text-[var(--vf-primary)]
              ">
                Inovação
              </span>
            </div>
            
            <div className="
              flex items-center justify-center 
              h-full max-h-[39px] px-3 cursor-pointer 
              rounded-sm transition-all duration-200
              hover:bg-black/5 hover:-translate-y-px
              lg:px-2 md:px-1
            ">
              <span className="
                text-black text-[16px] font-medium
                font-ubuntu transition-colors duration-200
                hover:text-[var(--vf-primary)]
              ">
                Trabalhe conosco
              </span>
            </div>
            
            <div className="
              flex items-center justify-center 
              h-full max-h-[39px] px-3 cursor-pointer 
              rounded-sm transition-all duration-200
              hover:bg-black/5 hover:-translate-y-px
              lg:px-2 md:px-1
            ">
              <span className="
                text-black text-[16px] font-medium
                font-ubuntu transition-colors duration-200
                hover:text-[var(--vf-primary)]
              ">
                Notícias
              </span>
            </div>
          </div>

          {/* Search Icon - Hidden on mobile */}
          <div className="
            hidden md:flex w-6 h-6 items-center justify-center ml-[4rem]
            cursor-pointer transition-transform duration-200 
            flex-shrink-0 hover:scale-110
          ">
            <Search size={18} color="var(--vf-primary)" />
          </div>
          
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
            <span className="
              text-white text-[14px] font-semibold
              font-ubuntu text-center
            ">
              Quero ser cliente
            </span>
          </div>
          
          {/* Secondary Button - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-center group
            h-10 px-6 min-w-[11rem] flex-shrink-0
            border border-[var(--vf-primary)] bg-transparent rounded-full 
            cursor-pointer transition-all duration-200 whitespace-nowrap
            hover:bg-[var(--vf-primary)] hover:shadow-[var(--vf-shadow-button)] hover:-translate-y-0.5
            lg:min-w-[10rem] lg:px-4
            md:min-w-[9rem] md:px-3
          ">
            <span className="
              text-[var(--vf-primary)] text-[14px] font-semibold
              font-ubuntu text-center
              group-hover:text-white
            ">
              Espaço do produtor
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
            fixed top-[4.5rem] left-0 right-0 w-full bg-white border-b border-[var(--vf-border)] 
            shadow-[var(--vf-shadow-vibra)] z-50 md:hidden transition-all duration-300 ease-in-out
            translate-y-0 opacity-100
          `}>
            <div className="px-4 py-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-start py-3 px-4 cursor-pointer rounded-md hover:bg-black/5 transition-colors duration-200" onClick={closeMobileMenu}>
                  <span className="text-black text-[16px] font-medium font-ubuntu">
                    Sobre nós
                  </span>
                </div>
                
                <div className="flex items-center justify-start py-3 px-4 cursor-pointer rounded-md hover:bg-black/5 transition-colors duration-200" onClick={closeMobileMenu}>
                  <span className="text-black text-[16px] font-medium font-ubuntu">
                    Futuro saudável
                  </span>
                </div>
                
                <div className="flex items-center justify-start py-3 px-4 cursor-pointer rounded-md hover:bg-black/5 transition-colors duration-200" onClick={closeMobileMenu}>
                  <span className="text-black text-[16px] font-medium font-ubuntu">
                    Inovação
                  </span>
                </div>
                
                <div className="flex items-center justify-start py-3 px-4 cursor-pointer rounded-md hover:bg-black/5 transition-colors duration-200" onClick={closeMobileMenu}>
                  <span className="text-black text-[16px] font-medium font-ubuntu">
                    Trabalhe conosco
                  </span>
                </div>
                
                <div className="flex items-center justify-start py-3 px-4 cursor-pointer rounded-md hover:bg-black/5 transition-colors duration-200" onClick={closeMobileMenu}>
                  <span className="text-black text-[16px] font-medium font-ubuntu">
                    Notícias
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