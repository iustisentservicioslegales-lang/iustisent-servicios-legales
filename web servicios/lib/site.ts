export const WHATSAPP_NUMBER = '593984404707'
export const WHATSAPP_DEFAULT_MESSAGE =
  'Acabo de ver en su sitio web, que brindan asesoría jurídica en varias ramas, quisiera mas informacion'

export const WHATSAPP_SECONDARY_NUMBER = '593995199458'
export const WHATSAPP_SECONDARY_MESSAGE =
  'Saludos, he visitado su sitio web y quiero más información sobre sus servicios'

export const WHATSAPP_PHONE1_FOOTER_MESSAGE =
  'He observado los servicios de su sitio web y quiero más información'

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function whatsappLinkSecondary(message: string = WHATSAPP_SECONDARY_MESSAGE) {
  return `https://wa.me/${WHATSAPP_SECONDARY_NUMBER}?text=${encodeURIComponent(message)}`
}

export const GOOGLE_MAPS_URL =
  'http://google.com/maps/place/IustiSent+Servicios+Legales/@-1.2761443,-78.6383329,765m/data=!3m2!1e3!4b1!4m6!3m5!1s0x91d383ccc7449ef1:0x5c0ac698aa446dec!8m2!3d-1.2761443!4d-78.6383329!16s%2Fg%2F11mw70m7cs?entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D'

export const CONTAINER = 'mx-auto w-full max-w-[1320px] px-6 sm:px-10 lg:px-[6.25%]'

export const MAIN_SITE_URL = 'http://localhost:3000/'
export const MAIN_SITE_ABOUT_URL = 'http://localhost:3000/#nosotros'
export const MAIN_SITE_TITLE =
  'Iustisent Servicios Legales | Soluciones legales para tu día a día'



