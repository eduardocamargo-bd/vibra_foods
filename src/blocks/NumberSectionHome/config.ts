import { Block } from 'payload'

export const NumberSectionHome: Block = {
  slug: 'numberSectionHome',
  interfaceName: 'NumberSectionHomeBlock',
  labels: {
    singular: 'Conheça Nossa História',
    plural: 'Conheça Nossa História',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Título da Seção',
      defaultValue: 'Da granja para mercados do mundo todo',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrição',
      defaultValue: 'Somos uma das maiores empresas do Brasil e impactamos positivamente milhares de pessoas',
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Estatísticas',
      fields: [
        {
          name: 'number',
          type: 'text',
          label: 'Número',
        },
        {
          name: 'label',
          type: 'text',
          label: 'Rótulo',
        },
      ],
      defaultValue: [
        { number: '+6 mil', label: 'Colaboradores e funcionários Vibra Foods' },
        { number: '+900', label: 'Famílias produtoras trabalhando conosco, gerando renda e oportunidade' },
        { number: '+70', label: 'Países atendidos ao redor do mundo' },
      ],
    },
  ],
}