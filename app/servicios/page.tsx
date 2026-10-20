import type { Metadata } from 'next'
import { ServicesHeader } from '@/components/servicios/services-header'
import { QuoteSteps } from '@/components/servicios/quote-steps'
import { ServicesList } from '@/components/servicios/services-list'
import { ContactCta, SiteFooter } from '@/components/servicios/contact-cta'

export const metadata: Metadata = {
  title: 'Servicios Legales | Iustisent',
  description:
    'Áreas de servicio y asesoría jurídica especializada: Familia, Tránsito, Empresarial, Notarial, Iglesias y Deportivo.',
}

export default function ServiciosPage() {
  return (
    <>
      <ServicesHeader />
      <main>
        <QuoteSteps />
        <ServicesList />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
