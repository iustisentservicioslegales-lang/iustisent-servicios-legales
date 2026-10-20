import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTAINER,
  GOOGLE_MAPS_URL,
  WHATSAPP_PHONE,
  WHATSAPP_PHONE_2,
  getWhatsAppUrlFor,
} from '@/lib/site'
import { cn } from '@/lib/utils'
import { CopyEmailButton } from '@/components/copy-email-button'

export function SiteFooter() {
  return (
    <footer className="border-t border-divider-dark bg-night">
      <div
        className={cn(
          CONTAINER,
          'grid items-center gap-8 py-12 md:grid-cols-[38.5%_1fr_auto] md:gap-6 lg:h-[168px] lg:py-0',
        )}
      >
        <a href="#inicio" aria-label="Iustisent Servicios Legales, volver al inicio" className="w-fit">
          <Image
            src="/images/logo-dorado.png"
            alt="Iustisent Servicios Legales"
            width={747}
            height={334}
            className="h-auto w-[138px]"
          />
        </a>

        <address className="flex flex-col gap-[2px] text-[12.5px] leading-[21px] text-beige not-italic">
          <span className="flex items-center gap-2">
            <Mail aria-hidden="true" className="size-3.5 shrink-0 text-gold" strokeWidth={1.75} />
            <span className="sr-only">Correo electrónico: </span>
            <CopyEmailButton email={CONTACT_EMAIL} />
          </span>
          <span className="flex items-center gap-2">
            <Phone aria-hidden="true" className="size-3.5 shrink-0 text-gold" strokeWidth={1.75} />
            <span>
              <span className="sr-only">Teléfonos: </span>
              <a
                href={getWhatsAppUrlFor(WHATSAPP_PHONE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a WhatsApp al 0984404707"
                className="transition-colors hover:text-gold"
              >
                0984404707
              </a>
              {' - '}
              <a
                href={getWhatsAppUrlFor(WHATSAPP_PHONE_2)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a WhatsApp al 0995199458"
                className="transition-colors hover:text-gold"
              >
                0995199458
              </a>
            </span>
          </span>
          <span className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-3.5 shrink-0 text-gold" strokeWidth={1.75} />
            <span className="sr-only">Dirección: </span>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Ángel Jadán y Luis Ortega
            </a>
          </span>
        </address>

        <p className="text-[14px] text-muted-ink md:text-right">Iustisent Servicios Legales, 2026</p>
      </div>
    </footer>
  )
}
