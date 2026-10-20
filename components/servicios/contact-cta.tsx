import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import {
  CONTAINER,
  GOOGLE_MAPS_URL,
  WHATSAPP_PHONE1_FOOTER_MESSAGE,
  whatsappLink,
  whatsappLinkSecondary,
} from '@/lib/site'
import { CONTACT } from '@/lib/content'
import { ScrollTopLink } from './scroll-top-link'
import { CopyEmailButton } from '@/components/copy-email-button'

export function ContactCta() {
  return (
    <section id="contacto" aria-labelledby="cta-title" className="bg-night py-16 lg:py-[90px]">
      <div className={`${CONTAINER} flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between`}>
        <div className="max-w-[720px] rounded-[2px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Hablemos de tu caso</p>
          <h2
            id="cta-title"
            className="mt-4 text-balance font-serif text-[32px] font-medium leading-[1.15] text-white sm:text-[40px] lg:text-[46px]"
          >
            El primer paso hacia una solución empieza con una conversación.
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-white/80 lg:text-[15px]">
            Cuéntanos tu situación. Te orientaremos con claridad y sin lenguaje innecesariamente complejo.
          </p>
        </div>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[52px] shrink-0 items-center justify-center rounded-[2px] bg-gold px-8 text-[12px] font-bold uppercase tracking-[0.06em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-[0_10px_24px_-10px_rgba(195,154,84,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Solicitar consulta
        </a>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-night-soft py-12 lg:py-[60px]">
      <div className={`${CONTAINER} grid grid-cols-1 items-center gap-8 md:grid-cols-3`}>
        <ScrollTopLink
          label="Ir al inicio de la página"
          className="w-fit rounded-[2px] transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <Image
            src="/images/logo-blanco.png"
            alt="IustiSent Servicios Legales"
            width={740}
            height={315}
            className="h-auto w-[140px] lg:w-[150px]"
          />
        </ScrollTopLink>
        <address
          id="datos-contacto"
          className="flex scroll-mt-32 flex-col gap-1.5 rounded-[2px] text-[13px] not-italic leading-relaxed text-white/85"
        >
          <span className="flex items-center gap-2">
            <Mail className="size-3.5 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
            <span className="sr-only">Correo electrónico:</span>
            <CopyEmailButton email={CONTACT.email} />
          </span>
          <span className="flex items-center gap-2">
            <Phone className="size-3.5 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
            <span className="sr-only">Teléfonos:</span>
            <span>
              <a
                href={whatsappLink(WHATSAPP_PHONE1_FOOTER_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contactar a WhatsApp al ${CONTACT.phones[0]}`}
                className="transition-colors hover:text-gold"
              >
                {CONTACT.phones[0]}
              </a>
              {' - '}
              <a
                href={whatsappLinkSecondary()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contactar a WhatsApp al ${CONTACT.phones[1]}`}
                className="transition-colors hover:text-gold"
              >
                {CONTACT.phones[1]}
              </a>
            </span>
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
            <span className="sr-only">Dirección:</span>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              {CONTACT.address}
            </a>
          </span>
        </address>
        <p className="text-[14px] text-white/45 md:text-right">Iustisent Servicios Legales, 2026</p>
      </div>
    </footer>
  )
}
