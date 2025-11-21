'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface HeaderContextType {
  activeTab: string
  setActiveTab: (tab: string) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('vibra')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <HeaderContext.Provider value={{ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeader = () => {
  const context = useContext(HeaderContext)
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider')
  }
  return context
}