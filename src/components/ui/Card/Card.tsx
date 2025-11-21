import React from 'react'
import { cn } from '@/utilities/ui'

interface CardProps {
  number: string | number
  label: string
  variant?: 'small' | 'medium'
  className?: string
}

export const Card: React.FC<CardProps> = ({
  number,
  label,
  variant = 'small',
  className
}) => {
  const baseClasses = "flex flex-col items-center justify-center text-center p-6 rounded-lg border border-gray-200 bg-white shadow-sm"

  const variantClasses = {
    small: "w-64 h-32",
    medium: "w-80 h-40"
  }

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      <div className="text-3xl font-bold text-green-600 mb-2">
        {number}
      </div>
      <div className="text-sm text-gray-600 leading-tight">
        {label}
      </div>
    </div>
  )
}