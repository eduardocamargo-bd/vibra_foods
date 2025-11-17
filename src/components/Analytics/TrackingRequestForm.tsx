'use client'

import React, { useState } from 'react'
import { Mail, Building, Globe, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface TrackingRequestFormProps {
  onSuccess?: () => void
  onError?: (error: string) => void
}

interface FormData {
  companyName: string
  contactEmail: string
  website: string
  trackingType: 'google_analytics' | 'facebook_pixel' | 'custom'
  message: string
}

export const TrackingRequestForm: React.FC<TrackingRequestFormProps> = ({
  onSuccess,
  onError
}) => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactEmail: '',
    website: '',
    trackingType: 'google_analytics',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Simula processamento dos dados coletados
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Log dos dados para desenvolvimento (remover em produção)
      console.log('Dados de solicitação de pixel coletados:', formData)
      
      setIsSubmitted(true)
      onSuccess?.()

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao processar solicitação'
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Dados Registrados!
          </h3>
          <p className="text-gray-600 mb-4">
            Seus dados foram coletados com sucesso. Nossa equipe utilizará essas informações nas próximas reuniões.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Nova Solicitação
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
          <Mail className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Dados para Configuração de Pixel
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Preencha os dados para discussão em reunião sobre pixel de rastreamento personalizado
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Nome da Empresa *
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex: Vibra Foods Ltda"
            />
          </div>
        </div>


        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
            Email de Contato *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              required
              value={formData.contactEmail}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="contato@empresa.com"
            />
          </div>
        </div>


        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
            Website
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://www.empresa.com"
            />
          </div>
        </div>


        <div>
          <label htmlFor="trackingType" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Rastreamento *
          </label>
          <select
            id="trackingType"
            name="trackingType"
            required
            value={formData.trackingType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="google_analytics">Google Analytics (GA4)</option>
            <option value="facebook_pixel">Facebook Pixel / Meta Pixel</option>
            <option value="custom">Pixel Customizado</option>
          </select>
        </div>


        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensagem Adicional
          </label>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Descreva suas necessidades específicas de rastreamento..."
            />
          </div>
        </div>


        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span className="text-sm text-red-700">{error}</span>
          </div>
        )}


        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Processando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Registrar Dados
            </>
          )}
        </button>
      </form>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-xs text-blue-700">
          💡 <strong>Processo:</strong> Os dados coletados serão utilizados durante reuniões para discussão e configuração do pixel personalizado.
        </p>
      </div>
    </div>
  )
}

export default TrackingRequestForm