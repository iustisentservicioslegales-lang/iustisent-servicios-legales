import { SiteHeader } from '@/components/site-header'
import { QuoteSteps } from '@/components/quote-steps'
import { ServicesList } from '@/components/services-list'
import { ContactCta, SiteFooter } from '@/components/contact-cta'

export default function ServiciosPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <QuoteSteps />
        <ServicesList />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
