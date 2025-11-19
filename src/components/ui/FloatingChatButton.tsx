"use client"

import React from 'react'
import Image from 'next/image'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useTranslation } from 'react-i18next'


const FloatingChatButton: React.FC = () => {
const { t } = useTranslation('header')
  const openChat = () => {
    // Add chat functionality here
    console.log('Open chat')
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            onClick={openChat}
            className="fixed bottom-[1rem] right-[1rem] gap-[10px] w-full flex p-[10px]  max-w-[72px] box-border items-center rounded-full justify-center bg-[#2dd1a9] cursor-pointer hover:bg-[#25b894] transition-colors duration-200 z-50"
          >
            <Image
              src="/assets/messages.svg"
              alt="Messages"
              width={40}
              height={40}
              className="w-full overflow-hidden max-w-[40px] box-border items-start flex-col justify-start"
            />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Content
          side="right"
          align="start"
          className="w-full max-w-[303px] box-border items-start flex-col justify-start bg-white p-4 rounded-lg shadow-lg"
        >
   
          <div className="w-full max-w-[181px] mt-0 min-h-[auto] text-center mb-0">
            <p className="text-[#004349] text-[14px] not-italic mt-0 text-center font-['Ubuntu',_sans-serif] font-normal leading-[17px] mb-0 tracking-[0px] normal-case">{t('chatTooltip')}</p>
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default FloatingChatButton