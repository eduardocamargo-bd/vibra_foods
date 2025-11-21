import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'home',
    _status: 'published',
    hero: {
      type: 'highImpact',
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h1',
              children: [
                {
                  type: 'text',
                  text: 'Vibra Foods: Sustentabilidade e Inovação',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Conheça nossa empresa e nossos compromissos com um futuro saudável.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      links: [],
      media: heroImage.id,
    },
    layout: [
      {
        blockName: 'Banner Image',
        blockType: 'bannerImage',
        image: heroImage.id,
      },
      {
        blockName: 'Conheça Nossa História',
        blockType: 'numberSectionHome',
        sectionTitle: 'Da granja para mercados do mundo todo',
        description: 'Somos uma das maiores empresas do Brasil e impactamos positivamente milhares de pessoas',
        stats: [
          { number: '+6 mil', label: 'Colaboradores e funcionários Vibra Foods' },
          { number: '+900', label: 'Famílias produtoras trabalhando conosco, gerando renda e oportunidade' },
          { number: '+70', label: 'Países atendidos ao redor do mundo' },
        ],
      },
    ],
    meta: {
      description: 'An open-source website built with Payload and Next.js.',
      image: heroImage.id,
      title: 'Vibra Foods',
    },
    title: 'Home',
  }
}
