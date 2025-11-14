import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface EmailRequestBody {
  companyName: string
  contactEmail: string
  website?: string
  trackingType: 'google_analytics' | 'facebook_pixel' | 'custom'
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequestBody = await request.json()

    if (!body.companyName || !body.contactEmail || !body.trackingType) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: companyName, contactEmail, trackingType' },
        { status: 400 }
      )
    }


    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #004349 0%, #2dd1a9 100%); padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">
             Nova Solicitação de Pixel de Rastreamento
          </h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #004349; margin-top: 0;">Detalhes da Solicitação</h2>
          
          <div style="background: white; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
            <p><strong>Empresa:</strong> ${body.companyName}</p>
            <p><strong>Email de Contato:</strong> ${body.contactEmail}</p>
            <p><strong>Website:</strong> ${body.website || 'Não informado'}</p>
            <p><strong>Tipo de Rastreamento:</strong> ${getTrackingTypeLabel(body.trackingType)}</p>
          </div>
          
          ${body.message ? `
            <div style="background: white; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
              <h3 style="color: #004349; margin-top: 0;">Mensagem Adicional:</h3>
              <p>${body.message}</p>
            </div>
          ` : ''}
          
          <div style="background: #e3f2fd; padding: 15px; border-radius: 6px; border-left: 4px solid #2dd1a9;">
            <h3 style="color: #004349; margin-top: 0;">Próximos Passos:</h3>
            <ol style="color: #555;">
              <li>Entrar em contato com o cliente em até 24 horas</li>
              <li>Verificar conformidade com LGPD/GDPR</li>
              <li>Configurar o pixel de rastreamento apropriado</li>
              <li>Implementar testes de funcionamento</li>
            </ol>
          </div>
          
          <div style="margin-top: 20px; padding: 10px; background: #fff3e0; border-radius: 4px;">
            <p style="margin: 0; color: #f57c00; font-size: 12px;">
              Este email foi enviado automaticamente pelo sistema Vibra Foods
            </p>
          </div>
        </div>
      </div>
    `


    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@vibrafoods.com',
      to: process.env.ADMIN_EMAIL || 'admin@vibrafoods.com',
      cc: body.contactEmail, 
      subject: ` Nova Solicitação de Pixel - ${body.companyName}`,
      html: emailHtml,
    }

    await transporter.sendMail(mailOptions)



    return NextResponse.json({
      success: true,
      message: 'Solicitação enviada com sucesso! Entraremos em contato em breve.',
      requestId: generateRequestId()
    })

  } catch (error) {
    console.error('Erro ao enviar solicitação de pixel:', error)
    
    return NextResponse.json(
      { 
        error: 'Erro interno do servidor',
        message: 'Não foi possível processar sua solicitação. Tente novamente mais tarde.'
      },
      { status: 500 }
    )
  }
}

function getTrackingTypeLabel(type: string): string {
  const labels = {
    'google_analytics': 'Google Analytics (GA4)',
    'facebook_pixel': 'Facebook Pixel / Meta Pixel',
    'custom': 'Pixel Customizado'
  }
  return labels[type as keyof typeof labels] || type
}

function generateRequestId(): string {
  return `VF-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`
}