import type { Block } from 'payload'

export const BannerImage: Block = {
  slug: 'bannerImage',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
  interfaceName: 'BannerImageBlock',
}