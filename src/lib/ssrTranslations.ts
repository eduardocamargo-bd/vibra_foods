import headerPt from '@/locales/pt/header.json'
import headerEn from '@/locales/en/header.json'
import headerEs from '@/locales/es/header.json'
import footerPt from '@/locales/pt/footer.json'
import footerEn from '@/locales/en/footer.json'
import footerEs from '@/locales/es/footer.json'

const namespaces: Record<string, Record<string, any>> = {
  header: { pt: headerPt, en: headerEn, es: headerEs },
  footer: { pt: footerPt, en: footerEn, es: footerEs },
}

function getNested(obj: Record<string, any> | undefined, path: string): any {
  return path.split('.').reduce((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return acc[part]
    }
    return undefined
  }, obj)
}

export function getServerTranslation(ns: 'header' | 'footer', key: string, lng = 'pt') {
  const mapping = namespaces[ns]
  const obj = mapping ? mapping[lng] || mapping['pt'] : undefined
  const val = obj ? getNested(obj, key) : undefined
  return typeof val === 'string' ? val : key
}
