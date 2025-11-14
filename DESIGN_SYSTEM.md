# 🎨 Vibra Foods Design System

## Visão Geral
O Design System da Vibra Foods foi desenvolvido baseado nas estilizações extraídas do design do Figma, criando uma identidade visual consistente e moderna para toda a aplicação.

## 🔧 Arquivos do Sistema

### 1. `vibra-theme.css`
Contém todas as variáveis CSS (Design Tokens) e estilos base do sistema.

### 2. `vibra-components.css`  
Componentes específicos e complexos extraídos do design do Figma.

### 3. `globals.css`
Integração dos temas, reset global e configurações específicas do Payload CMS.

## 🎨 Paleta de Cores

### Cores Principais
- **Primary**: `#004349` - Verde escuro corporativo
- **Secondary**: `#c7eb2e` - Verde lima vibrante  
- **Accent**: `#2dd1a9` - Verde água
- **Orange**: `#f97316` - Laranja de destaque

### Cores Neutras
- **White**: `#ffffff`
- **Off-white**: `#fffff4` 
- **Light Gray**: `#fffffa`
- **Gray**: `#646b6a`
- **Dark Gray**: `#003e1d`
- **Black**: `#000000`

### Cores Especiais
- **Accent Blue**: `#24357c` - Para seções da marca Ávia
- **Secondary Dark**: `#95c11f` - Para seções da marca Nat

## 📝 Tipografia

### Fontes Principais
```css
--vf-font-primary: 'Ubuntu' /* Títulos e headings */
--vf-font-secondary: 'Ubuntu Sans' /* Botões e navegação */
--vf-font-body: 'Roboto' /* Corpo do texto */
```

### Escala Tipográfica
```css
--vf-text-xs: 13px      /* Labels, tags */
--vf-text-sm: 14px      /* Body small, buttons */
--vf-text-base: 16px    /* Body text */
--vf-text-lg: 18px      /* Large body */
--vf-text-xl: 20px      /* Subtitles */
--vf-text-2xl: 24px     /* Headings */
--vf-text-3xl: 32px     /* Large headings */
--vf-text-4xl: 40px     /* Section headings */
--vf-text-5xl: 48px     /* Hero text */
--vf-text-6xl: 64px     /* Display text */
--vf-text-7xl: 80px     /* Hero display */
--vf-text-8xl: 100px    /* Mega display */
```

### Pesos de Fonte
```css
--vf-font-light: 300
--vf-font-normal: 400
--vf-font-medium: 500
--vf-font-semibold: 600
--vf-font-bold: 700
```

## 🔲 Componentes

### Botões
```css
.vf-button                /* Base */
.vf-button--primary       /* Gradiente principal */
.vf-button--secondary     /* Verde lima */
.vf-button--outline       /* Contorno */
.vf-button--ghost         /* Fundo branco */
.vf-button--small         /* Tamanho pequeno */
.vf-button--large         /* Tamanho grande */
```

### Cards
```css
.vf-card                  /* Base */
.vf-card__header          /* Cabeçalho */
.vf-card__image           /* Imagem */
.vf-card__badge           /* Badge/tag */
.vf-card__content         /* Conteúdo */
.vf-card__title           /* Título */
.vf-card__text            /* Texto */
.vf-card__date            /* Data */
```

### Inputs & Forms
```css
.vf-input                 /* Input base */
.vf-label                 /* Label */
.vf-form-group            /* Grupo de form */
.vf-input--with-icon      /* Input com ícone */
.vf-phone-input           /* Input de telefone */
```

### Estatísticas
```css
.vf-stat                  /* Container */
.vf-stat--primary         /* Verde água */
.vf-stat--secondary       /* Verde lima claro */
.vf-stat--accent          /* Verde lima */
.vf-stat__number          /* Número */
.vf-stat__label           /* Label */
```

## 🎯 Seções Específicas

### Hero Section
```css
.vf-hero                  /* Container principal */
.vf-hero__background      /* Imagem de fundo */
.vf-hero__content         /* Conteúdo sobreposto */
.vf-hero__title           /* Título principal */
.vf-hero__subtitle        /* Subtítulo */
```

### Seções de Marcas
```css
.vf-brand-section         /* Base */
.vf-brand-section--avia   /* Tema Ávia (azul) */
.vf-brand-section--nat    /* Tema Nat (verde) */
.vf-brand-section--ingredients /* Tema Ingredients */
```

### Timeline
```css
.vf-timeline              /* Container */
.vf-timeline__line        /* Linha principal */
.vf-timeline__items       /* Items */
.vf-timeline__item        /* Item individual */
.vf-timeline__marker      /* Marcador */
.vf-timeline__year        /* Ano */
.vf-timeline__content     /* Conteúdo */
```

### Newsletter
```css
.vf-newsletter            /* Seção */
.vf-newsletter__form      /* Formulário */
.vf-newsletter__input     /* Input */
.vf-newsletter__button    /* Botão */
```

## 📐 Sistema de Espaçamento
```css
--vf-space-1: 4px
--vf-space-2: 8px
--vf-space-3: 12px
--vf-space-4: 16px
--vf-space-5: 20px
--vf-space-6: 24px
--vf-space-8: 32px
--vf-space-10: 40px
--vf-space-12: 48px
--vf-space-16: 64px
--vf-space-20: 80px
```

## 🔄 Border Radius
```css
--vf-radius-sm: 4px       /* Pequeno */
--vf-radius-base: 8px     /* Base */
--vf-radius-lg: 16px      /* Grande */
--vf-radius-xl: 32px      /* Extra grande */
--vf-radius-full: 9999px  /* Circular */
```

## ✨ Efeitos e Animações

### Sombras
```css
--vf-shadow-sm: 0 2px 5px 0 rgba(158, 158, 158, 0.05)
--vf-shadow-md: 0 8px 8px 0 rgba(158, 158, 158, 0.04)
--vf-shadow-lg: 0 19px 11px 0 rgba(158, 158, 158, 0.03)
--vf-shadow-vibra: combinação das três acima
--vf-shadow-button: 0 8px 25px rgba(249, 115, 22, 0.3)
--vf-shadow-card: 0 12px 30px rgba(0, 0, 0, 0.3)
```

### Gradientes
```css
--vf-gradient-primary: linear-gradient(135deg, #004349 0%, #2dd1a9 100%)
--vf-gradient-secondary: linear-gradient(135deg, #c7eb2e 0%, #95c11f 100%)
--vf-gradient-hero: linear-gradient(135deg, #004349 0%, #24357c 100%)
```

### Transições
```css
--vf-transition-fast: 0.15s ease-out
--vf-transition-base: 0.3s ease-out
--vf-transition-slow: 0.5s ease-out
```

## 🎨 Classes Utilitárias

### Espaçamento
```css
.vf-mb-0, .vf-mb-1, .vf-mb-2, .vf-mb-3, .vf-mb-4, .vf-mb-6, .vf-mb-8
```

### Cores
```css
.vf-text-primary, .vf-text-secondary, .vf-text-white, .vf-text-gray
.vf-bg-primary, .vf-bg-secondary, .vf-bg-white, .vf-bg-off-white
```

### Tipografia
```css
.vf-font-light, .vf-font-normal, .vf-font-medium, .vf-font-semibold, .vf-font-bold
.vf-text-left, .vf-text-center, .vf-text-right
```

### Layout
```css
.vf-flex, .vf-flex-col
.vf-items-center, .vf-justify-center, .vf-justify-between
.vf-grid, .vf-grid-cols-1, .vf-grid-cols-2, .vf-grid-cols-3, .vf-grid-cols-4
.vf-gap-4, .vf-gap-6, .vf-gap-8
```

## 📱 Responsividade

O sistema inclui breakpoints responsivos:
- **Mobile**: < 768px
- **Tablet**: ≥ 768px  
- **Desktop**: ≥ 1024px

Classes responsivas disponíveis:
```css
.vf-md\:grid-cols-2, .vf-md\:grid-cols-3
.vf-lg\:grid-cols-3, .vf-lg\:grid-cols-4
```

## ♿ Acessibilidade

- Focus outline consistente com `var(--vf-accent-orange)`
- Suporte para `prefers-reduced-motion`
- Alto contraste em `prefers-contrast: high`
- Navegação por teclado otimizada

## 🚀 Como Usar

1. **Importe os estilos** via `globals.css`
2. **Use as classes utilitárias** para layouts rápidos
3. **Aplique componentes específicos** conforme necessário
4. **Customize com CSS custom properties** quando needed

### Exemplo de Uso
```jsx
<div className="vf-hero">
  <div className="vf-hero__content">
    <h1 className="vf-hero__title">
      Alimentando vidas para inspirar um 
      <span className="vf-font-bold">futuro mais saudável</span>
    </h1>
    <button className="vf-button vf-button--primary">
      Conheça nossas marcas
    </button>
  </div>
</div>
```

## 🔗 Integração com Payload CMS

O tema mantém compatibilidade com o admin do Payload CMS através de:
- Variáveis específicas para o painel admin
- Preservação de funcionalidades existentes  
- Customizações visuais não-intrusivas

---

**Criado por:** Sistema de Design Vibra Foods  
**Baseado em:** Design extraído do Figma via plugin Figma to Code  
**Versão:** 1.0.0