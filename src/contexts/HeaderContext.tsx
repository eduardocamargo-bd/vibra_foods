import React, { createContext, useContext, useState, ReactNode } from 'react'

interface HeaderContextType {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('vibra')

  return (
    <HeaderContext.Provider value={{ activeTab, setActiveTab }}>
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