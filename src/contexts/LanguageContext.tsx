'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'pt' | 'en' | 'es' | 'ar'

export interface Translations {
  [key: string]: string | Translations
}

const translations: Record<Language, Translations> = {
  pt: {
    header: {
      vibraFoods: 'Vibra Foods',
      nat: 'Nat',
      avia: 'Ávia',
      ingredients: 'Ingredientes',
      changeLanguage: 'Mudar Idioma',
      pt: 'PT',
      portuguese: 'Português',
      english: 'Inglês',
      spanish: 'Espanhol',
      en: 'EN',
      es: 'ES',
      nav: {
        aboutUs: 'Sobre nós',
        healthyFuture: 'Futuro saudável',
        innovation: 'Inovação',
        workWithUs: 'Trabalhe conosco',
        news: 'Notícias',
        beClient: 'Quero ser cliente',
        producerSpace: 'Espaço do produtor'
      }
    },
    footer: {
      mission: 'Nossa missão é promover saúde e bem-estar através de alimentos naturais e funcionais de alta qualidade.',
      communication: 'Entre em contato conosco',
      freeCall: 'Ligação gratuita',
      southRegion: 'Região Sul',
      email: 'contato@vibrafoods.com.br',
      newsletterPlaceholder: 'Digite seu e-mail',
      send: 'Enviar',
      about: 'Sobre',
      manifesto: 'Manifesto',
      brands: 'Marcas',
      history: 'História',
      qualityControl: 'Controle de Qualidade',
      innovation: 'Inovação',
      projects: 'Projetos',
      partners: 'Parceiros',
      governance: 'Governança',
      certifications: 'Certificações',
      whereWeAre: 'Onde Estamos',
      news: 'Notícias',
      contacts: 'Contatos',
      healthyFuture: 'Futuro Saudável',
      esgCommitment: 'Compromisso ESG',
      animalWelfare: 'Bem-estar Animal',
      environment: 'Meio Ambiente',
      socioeconomic: 'Socioeconômico',
      socialEnvironmentalImpact: 'Impacto Social e Ambiental',
      institutional: 'Institucional',
      reports: 'Relatórios',
      conductEthics: 'Código de Conduta e Ética',
      complaintsChannel: 'Canal de Denúncias',
      careers: 'Carreiras',
      whoWeAre: 'Quem Somos',
      howWeVibrate: 'Como Vibramos',
      ourMission: 'Nossa Missão',
      diversityInclusion: 'Diversidade e Inclusão',
      benefits: 'Benefícios',
      jobs: 'Vagas',
      suppliers: 'Fornecedores',
      wantToBeSupplier: 'Quer ser Fornecedor?',
      copyright: '© 2025 Vibra Agroindustrial S.A.',
      allRightsReserved: 'Todos os direitos reservados',
      privacyPolicy: 'Política de Privacidade',
      cookieSettings: 'Configurações de Cookies'
    }
  },
  en: {
    header: {
      vibraFoods: 'Vibra Foods',
      nat: 'Nat',
      avia: 'Ávia',
      ingredients: 'Ingredients',
      changeLanguage: 'Change Language',
      pt: 'PT',
      portuguese: 'Portuguese',
      english: 'English',
      spanish: 'Spanish',
      en: 'EN',
      es: 'ES',
      nav: {
        aboutUs: 'About Us',
        healthyFuture: 'Healthy Future',
        innovation: 'Innovation',
        workWithUs: 'Work with Us',
        news: 'News',
        beClient: 'Be a Client',
        producerSpace: 'Producer Space'
      }
    },
    footer: {
      mission: 'Our mission is to promote health and well-being through high-quality natural and functional foods.',
      communication: 'Get in touch with us',
      freeCall: 'Free call',
      southRegion: 'South Region',
      email: 'contact@vibrafoods.com',
      newsletterPlaceholder: 'Enter your email',
      send: 'Send',
      about: 'About',
      manifesto: 'Manifesto',
      brands: 'Brands',
      history: 'History',
      qualityControl: 'Quality Control',
      innovation: 'Innovation',
      projects: 'Projects',
      partners: 'Partners',
      governance: 'Governance',
      certifications: 'Certifications',
      whereWeAre: 'Where We Are',
      news: 'News',
      contacts: 'Contacts',
      healthyFuture: 'Healthy Future',
      esgCommitment: 'ESG Commitment',
      animalWelfare: 'Animal Welfare',
      environment: 'Environment',
      socioeconomic: 'Socioeconomic',
      socialEnvironmentalImpact: 'Social & Environmental Impact',
      institutional: 'Institutional',
      reports: 'Reports',
      conductEthics: 'Code of Conduct & Ethics',
      complaintsChannel: 'Complaints Channel',
      careers: 'Careers',
      whoWeAre: 'Who We Are',
      howWeVibrate: 'How We Vibrate',
      ourMission: 'Our Mission',
      diversityInclusion: 'Diversity & Inclusion',
      benefits: 'Benefits',
      jobs: 'Jobs',
      suppliers: 'Suppliers',
      wantToBeSupplier: 'Want to be a Supplier?',
      copyright: '© 2025 Vibra Agroindustrial S.A.',
      allRightsReserved: 'All rights reserved',
      privacyPolicy: 'Privacy Policy',
      cookieSettings: 'Cookie Settings'
    }
  },
  es: {
    header: {
      vibraFoods: 'Vibra Foods',
      nat: 'Nat',
      avia: 'Ávia',
      ingredients: 'Ingredientes',
      changeLanguage: 'Cambiar Idioma',
      pt: 'PT',
      portuguese: 'Portugués',
      english: 'Inglés',
      spanish: 'Español',
      en: 'EN',
      es: 'ES',
      nav: {
        aboutUs: 'Sobre nosotros',
        healthyFuture: 'Futuro saludable',
        innovation: 'Innovación',
        workWithUs: 'Trabaje con nosotros',
        news: 'Noticias',
        beClient: 'Quiero ser cliente',
        producerSpace: 'Espacio del productor'
      }
    },
    footer: {
      mission: 'Nuestra misión es promover la salud y el bienestar a través de alimentos naturales y funcionales de alta calidad.',
      communication: 'Póngase en contacto con nosotros',
      freeCall: 'Llamada gratuita',
      southRegion: 'Región Sur',
      email: 'contacto@vibrafoods.com',
      newsletterPlaceholder: 'Ingrese su correo electrónico',
      send: 'Enviar',
      about: 'Sobre',
      manifesto: 'Manifiesto',
      brands: 'Marcas',
      history: 'Historia',
      qualityControl: 'Control de Calidad',
      innovation: 'Innovación',
      projects: 'Proyectos',
      partners: 'Socios',
      governance: 'Gobierno',
      certifications: 'Certificaciones',
      whereWeAre: 'Dónde estamos',
      news: 'Noticias',
      contacts: 'Contactos',
      healthyFuture: 'Futuro Saludable',
      esgCommitment: 'Compromiso ESG',
      animalWelfare: 'Bienestar Animal',
      environment: 'Medio Ambiente',
      socioeconomic: 'Socioeconómico',
      socialEnvironmentalImpact: 'Impacto Social y Ambiental',
      institutional: 'Institucional',
      reports: 'Informes',
      conductEthics: 'Código de Conducta y Ética',
      complaintsChannel: 'Canal de Denuncias',
      careers: 'Carreras',
      whoWeAre: 'Quiénes Somos',
      howWeVibrate: 'Cómo Vibramos',
      ourMission: 'Nuestra Misión',
      diversityInclusion: 'Diversidad e Inclusión',
      benefits: 'Beneficios',
      jobs: 'Vacantes',
      suppliers: 'Proveedores',
      wantToBeSupplier: '¿Quiere ser Proveedor?',
      copyright: '© 2025 Vibra Agroindustrial S.A.',
      allRightsReserved: 'Todos los derechos reservados',
      privacyPolicy: 'Política de Privacidad',
      cookieSettings: 'Configuración de Cookies'
    }
  },
  ar: {
    header: {
      vibraFoods: 'فيبرا فودز',
      nat: 'نات',
      avia: 'أفيا',
      ingredients: 'المكونات',
      changeLanguage: 'تغيير اللغة',
      pt: 'PT',
      portuguese: 'البرتغالية',
      english: 'الإنجليزية',
      spanish: 'الإسبانية',
      arabic: 'العَرَبِيَّة',
      en: 'EN',
      es: 'ES',
      ar: 'AR',
      nav: {
        aboutUs: 'معلومات عنا',
        healthyFuture: 'مستقبل صحي',
        innovation: 'الابتكار',
        workWithUs: 'اعمل معنا',
        news: 'الأخبار',
        beClient: 'كن عميلاً',
        producerSpace: 'مساحة المنتج'
      }
    },
    footer: {
      mission: 'مهمتنا هي تعزيز الصحة والرفاهية من خلال الأطعمة الطبيعية والوظيفية عالية الجودة.',
      communication: 'تواصل معنا',
      freeCall: 'مكالمة مجانية',
      southRegion: 'المنطقة الجنوبية',
      email: 'contact@vibrafoods.com',
      newsletterPlaceholder: 'أدخل بريدك الإلكتروني',
      send: 'إرسال',
      about: 'حول',
      manifesto: 'البيان',
      brands: 'العلامات التجارية',
      history: 'التاريخ',
      qualityControl: 'مراقبة الجودة',
      innovation: 'الابتكار',
      projects: 'المشاريع',
      partners: 'الشركاء',
      governance: 'الحوكمة',
      certifications: 'الشهادات',
      whereWeAre: 'أين نحن',
      news: 'الأخبار',
      contacts: 'جهات الاتصال',
      healthyFuture: 'مستقبل صحي',
      esgCommitment: 'التزام ESG',
      animalWelfare: 'رفاهية الحيوان',
      environment: 'البيئة',
      socioeconomic: 'اجتماعي اقتصادي',
      socialEnvironmentalImpact: 'التأثير الاجتماعي والبيئي',
      institutional: 'مؤسسي',
      reports: 'التقارير',
      conductEthics: 'مدونة السلوك والأخلاق',
      complaintsChannel: 'قناة الشكاوى',
      careers: 'الوظائف',
      whoWeAre: 'من نحن',
      howWeVibrate: 'كيف نرتجف',
      ourMission: 'مهمتنا',
      diversityInclusion: 'التنوع والشمول',
      benefits: 'المزايا',
      jobs: 'الوظائف',
      suppliers: 'الموردون',
      wantToBeSupplier: 'تريد أن تكون مورداً؟',
      copyright: '© 2025 فيبرا أغروإندستريال S.A.',
      allRightsReserved: 'جميع الحقوق محفوظة',
      privacyPolicy: 'سياسة الخصوصية',
      cookieSettings: 'إعدادات ملفات تعريف الارتباط'
    }
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key 
      }
    }

    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider')
  }
  return context
}