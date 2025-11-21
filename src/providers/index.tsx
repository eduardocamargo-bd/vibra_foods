import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { HeaderProvider } from '@/contexts/HeaderContext'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <HeaderProvider>{children}</HeaderProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
