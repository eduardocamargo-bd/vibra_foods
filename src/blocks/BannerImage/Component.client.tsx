'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useHeader } from '@/contexts/HeaderContext'
import type { BannerImageBlock as BannerImageBlockType } from '@/payload-types'

export const BannerImageBlock: React.FC<any> = (props) => {
  const { image } = props
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { t } = useTranslation()
  const { isMobileMenuOpen } = useHeader()

  const customBounce = `
    @keyframes customBounce {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-2px);
      }
    }
    .custom-bounce {
      animation: customBounce 1s infinite;
    }
  `

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isVideoOpen])


  const imageSrc = (image && typeof image === 'object' && 'url' in image) ? image.url : '/vitrine.png'

  return (
    <div
      style={{ marginTop: '-21px', maxHeight: '33.0625rem' }}
      className="relative w-screen h-[800px] md:h-[800px] rounded-tl-none rounded-tr-none  flex items-center justify-center md:justify-start z-5 overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: customBounce }} />
      <video
        src="/video_vibra.mp4"
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 text-center md:text-left text-white lg:ml-8 md:ml-16 w-[836px] md:w-[836px]">
        {!isMobileMenuOpen && (
          <>
            <div className="mb-8">
              <p className="text-4xl md:text-6xl font-semibold leading-tight">
                {t('bannerText1')} <span className="font-extrabold">{t('bannerText2')}</span> <Image src="/assets/heart.svg" alt="Heart" width={32} height={32} className="inline ml-2" />
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex items-center bg-[#00000026] border-transparent text-white px-6 py-2 rounded-full font-semibold transition-all hover:bg-black gap-2" onClick={() => setIsVideoOpen(true)}>
                <Play className="w-6 h-6 fill-white" />
                {t('watchManifesto')}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block z-10">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29 11.667C29 10.1641 28.4025 8.72286 27.3398 7.66016C26.2771 6.59745 24.8359 6 23.333 6H16.667C15.1641 6 13.7229 6.59745 12.6602 7.66016C11.5975 8.72286 11 10.1641 11 11.667V28.333C11 29.8359 11.5975 31.2771 12.6602 32.3398C13.7229 33.4025 15.1641 34 16.667 34H23.333C24.8359 34 26.2771 33.4026 27.3398 32.3398C28.4025 31.2771 29 29.8359 29 28.333V11.667ZM31 28.333C31 30.3663 30.1927 32.3171 28.7549 33.7549C27.3171 35.1927 25.3663 36 23.333 36H16.667C14.6337 36 12.6829 35.1927 11.2451 33.7549C9.80734 32.3171 9 30.3663 9 28.333V11.667C9 9.63367 9.80734 7.6829 11.2451 6.24512C12.6829 4.80734 14.6337 4 16.667 4H23.333C25.3663 4 27.3171 4.80734 28.7549 6.24512C30.1927 7.6829 31 9.63367 31 11.667V28.333Z" fill="white"/>
          <path d="M19 11.667V18.333C19 18.8853 19.4477 19.333 20 19.333C20.5523 19.333 21 18.8853 21 18.333V11.667C21 11.1147 20.5523 10.667 20 10.667C19.4477 10.667 19 11.1147 19 11.667Z" fill="white" className="custom-bounce"/>
        </svg>
      </div>
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-x-hidden">
          <div className="relative max-w-full max-h-full">
            <video
              src="/video_vibra.mp4"
              controls
              autoPlay
              className="max-w-full max-h-screen"
            />
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 bg-transparent text-white rounded-full p-2 z-60 hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}