import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { Phone, Mail, Instagram, Facebook, Twitter, Linkedin, Check, Globe } from 'lucide-react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="w-full bg-[var(--vf-primary)] text-white">
      <div className="px-[160px] py-8 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Left side: Logo, tagline, copyright, contact info */}
          <div className="flex flex-col items-center gap-8 lg:w-[40%]">
            {/* Logo and tagline */}
            <div className="flex flex-col items-start gap-4">
              <img
                src="/assets/vibra_logo_branco.svg"
                alt="Vibra Logo"
                width="208"
                height="78"
                className="w-[208px] h-[78px]"
              />
              <p className="text-white text-sm font-ubuntu leading-[18px] max-w-[208px]">
                Alimentar vidas para inspirar um futuro mais saudável
              </p>
            </div>

            {/* Social media icons */}
            <div className="flex items-start justify-start gap-6 min-w-[208px]">
              <div className="w-6 h-6">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="w-6 h-6">
                <Facebook className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Disclaimer text */}
            <p className="text-white text-sm font-ubuntu leading-[18px] max-w-[208px]">
              Prezados clientes e parceiros, a Vibra Agroindustrial S.A se comunica apenas através
              de seus canais oficiais e domínios eletrônicos oficiais.
            </p>

            {/* Phone icon */}
            <div className="flex items-start justify-start gap-6 min-w-[208px]">
              <div className="w-6 h-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-white text-sm font-ubuntu leading-[18px]">
                    Ligação gratuita: 0800 724 4949
                  </p>
                  <p className="text-white text-sm font-ubuntu leading-[18px]">
                    Porto Alegre e região sul: 3883 2100
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-start gap-6 min-w-[208px]">
                <div className="w-6 h-6">
                  <Mail className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                </div>
              </div>

              <div className="flex items-start gap-3">
             
                <p className="text-white text-sm font-ubuntu leading-[18px]">crc@vibra.com.br</p>
              </div>
            </div>
          </div>

          {/* Right side: Newsletter and navigation columns */}
          <div className="flex flex-col gap-8 lg:w-1/2 justify-center">
            {/* Newsletter */}
            <div className="max-w-[613px]">
              <div className="flex flex-row gap-3">
                <div className="flex items-center min-w-[442px] h-[48px] justify-between p-4 border border-[var(--vf-border)] rounded-lg bg-white">
                  <div className="flex items-center gap-3 flex-1">
                    <Mail className="w-6 h-6 text-[var(--vf-gray)]" />
                    <p className="text-[var(--vf-gray)] text-sm font-roboto leading-[22px]">
                      Receba as notícias da Vibra Foods no seu email
                    </p>
                  </div>
                </div>
                  <button className="vf-button-primary-styled">
                    Enviar
                  </button>
              </div>
            </div>

            {/* Navigation columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[613px]">
              {/* Column 1: Sobre */}
              <div className="flex flex-col gap-6">
                <h3 className="text-white text-lg font-ubuntu font-bold">Sobre</h3>
                <div className="flex flex-col gap-3">
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    Manifesto
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    Marcas
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    História
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    Controle de Qualidade
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    Inovação
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    Projetos
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    Parceiros
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    Governança
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    Certificações
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    Onde estamos
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    Notícias
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                  >
                    Contatos
                  </Link>
                </div>
              </div>

              {/* Column 2: Futuro Saudável and Institucional */}
              <div className="flex flex-col gap-6">
                {/* Futuro Saudável */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">Futuro Saudável</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Compromisso ESG
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Bem-estar animal
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Meio ambiente
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Socioeconômico
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Impacto social e ambiental
                    </Link>
                  </div>
                </div>

                {/* Institucional */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">Institucional</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Relatórios
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Governança
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Conduta e ética
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Canal de denúncias
                    </Link>
                  </div>
                </div>
              </div>

              {/* Column 3: Carreiras and Fornecedores */}
              <div className="flex flex-col gap-6">
                {/* Carreiras */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">Carreiras</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Quem somos
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Como vibramos
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Missão
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Diversidade e inclusão
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Benefícios
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Vagas
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Onde estamos
                    </Link>
                  </div>
                </div>

                {/* Fornecedores */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">Fornecedores</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
                    >
                      Quero ser fornecedor
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with privacy links and social media */}
      <div className="px-8 py-4 md:px-8 border-t border-[var(--vf-border)]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          {/* Copyright */}
          <div className="flex flex-row gap-5">
            <p className="text-white text-sm font-ubuntu leading-[18px]">
              © 2025 Vibra Agroindustrial S.A.
            </p>
            <p className="text-white text-sm font-ubuntu font-semibold leading-[18px]">
              Todos os direitos reservados
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <Link
              href="#"
              className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
            >
              Políticas de privacidade
            </Link>
            <Link
              href="#"
              className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
            >
              Configurações de cookie
            </Link>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white" />
              <Link
                href="#"
                className="text-white text-sm font-ubuntu leading-[18px] hover:opacity-80"
              >
                Alterar idioma
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
