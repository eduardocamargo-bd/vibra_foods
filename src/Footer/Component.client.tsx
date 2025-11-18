'use client'

import Link from 'next/link'
import React from 'react'
import { Phone, Mail, Instagram, Facebook, Twitter, Linkedin, Check, Globe, ChevronDown } from 'lucide-react'

import type { Footer } from '@/payload-types'


interface FooterClientProps {
  footerData: Footer
}

export const FooterClient: React.FC<FooterClientProps> = ({ footerData }) => {
  const navItems = footerData?.navItems || []

  return (
    <footer className="w-full bg-[var(--vf-primary)] text-white">
      <div className=" sm:margin-auto sm:p-6 lg:px-[160px] lg:py-8 md:px-8">
        <div className=" p-4 flex flex-col lg:flex-row gap-12 lg:gap-8">
          <div className="flex flex-col items-start lg:items-center gap-8 lg:w-[40%]">
            <div className="flex flex-col items-start gap-4">
              <img
                src="/assets/vibra_logo_branco.svg"
                alt="Vibra Logo"
                width="208"
                height="78"
                className="w-[208px] h-[78px]"
              />
              <p className="text-white text-sm font-ubuntu leading-[18px] max-w-[208px]">
                Nossa missão é promover saúde e bem-estar através de alimentos naturais e funcionais de alta qualidade.
              </p>
            </div>

            <div className="flex items-start justify-start gap-6 min-w-[208px]">
              <div className="w-6 h-6">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="w-6 h-6">
                <Facebook className="w-6 h-6 text-white" />
              </div>
            </div>

            <p className="text-white text-sm font-ubuntu leading-[18px] max-w-[208px]">
              Entre em contato conosco
            </p>

            <div className="flex items-start justify-start gap-6 min-w-[208px]">
              <div className="w-6 h-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <div className="flex flex-col gap-1 lg:max-w-[208px]">
                  <p className="text-white text-sm font-ubuntu leading-[18px]">
                    Ligação gratuita
                  </p>
                  <p className="text-white text-sm font-ubuntu leading-[18px]">
                    Região Sul
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-start gap-6 min-w-[208px]">
                <div className="w-6 h-6">
                  <Mail className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
                </div>
              </div>

              <div className="flex items-start gap-3">

                <p className="text-white text-sm font-ubuntu leading-[18px]">contato@vibrafoods.com.br</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:w-1/2 justify-center">
            <div className="max-w-[613px]">
              <div className="flex flex-row gap-3">
                <div className="flex items-center min-w-[226px] lg:min-w-[442px] h-[48px] justify-between p-2 lg:p-4 border border-[var(--vf-border)] rounded-lg bg-white">
                  <div className="flex items-center gap-2 flex-1">
                    <Mail className="w-4 h-4 text-[var(--vf-gray)]" />
                    <input
                      type="email"
                      placeholder="Digite seu e-mail"
                      className="flex-1 bg-transparent border-none outline-none text-[var(--vf-gray)] text-xs md:text-sm font-roboto leading-[22px]"
                    />
                  </div>
                </div>
                  <button className="vf-button-primary-styled">
                    Enviar
                  </button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-[613px]">
              <div className="flex flex-col gap-6">
                <h3 className="text-white text-lg font-ubuntu font-bold">Sobre</h3>
                <div className="flex flex-col gap-3">
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    Manifesto
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    Marcas
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    História
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    Controle de Qualidade
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    Inovação
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    Projetos
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    Parceiros
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    Governança
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    Certificações
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    Onde Estamos
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    Notícias
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                  >
                    Contatos
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">Futuro Saudável</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Compromisso ESG
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Bem-estar Animal
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Meio Ambiente
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Socioeconômico
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Impacto Social e Ambiental
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">Institucional</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Relatórios
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Governança
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Código de Conduta e Ética
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Canal de Denúncias
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">Carreiras</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Quem Somos
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Como Vibramos
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Nossa Missão
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Diversidade e Inclusão
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Benefícios
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Vagas
                    </Link>
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Onde Estamos
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-lg font-ubuntu font-bold">Fornecedores</h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
                    >
                      Quer ser Fornecedor?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 md:px-8 border-t border-[var(--vf-border)]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex flex-row gap-5">
            <p className="text-white text-[12px] lg:text-sm font-ubuntu leading-[18px]">
              © 2024 Vibra Foods
            </p>
            <p className="text-white text-sm font-ubuntu font-semibold leading-[18px] whitespace-nowrap">
              Todos os direitos reservados
            </p>
          </div>
          <div className="flex flex-row  lg:flex-row items-start lg:items-center gap-6">
            <Link
              href="#"
              className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap"
            >
              Configurações de Cookies
            </Link>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap hidden md:block">Mudar Idioma</span>
              <span className="text-white text-xs md:text-sm font-ubuntu leading-[18px] hover:opacity-80 whitespace-nowrap md:hidden">PT</span>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}