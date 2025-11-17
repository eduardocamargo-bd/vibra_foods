import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Vibra Foods - Alimentando vidas para inspirar um futuro mais saudável. Empresa líder no setor agroindustrial com compromisso ESG e inovação sustentável.',
  images: [
    {
      url: `${getServerSideURL()}/vibra-og.webp`,
    },
  ],
  siteName: 'Vibra Foods',
  title: 'Vibra Foods',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
