import Image from 'next/image'
import { CONTAINER, whatsappLink, whatsappLinkSecondary } from '@/lib/site'
import { SERVICES } from '@/lib/content'

export function ServicesList() {
  return (
    <section id="servicios" aria-label="Servicios" className="bg-cream py-16 sm:py-20 lg:py-[96px]">
      <div className={`${CONTAINER} flex flex-col gap-16 sm:gap-24 lg:gap-[clamp(6rem,13vw,12rem)]`}>
        {SERVICES.map((service, index) => {
          const isSecondary = service.id === 'derecho-transito' || service.id === 'asesoria-deportiva'
          const link = isSecondary ? whatsappLinkSecondary() : whatsappLink()

          return (
            <article
              key={service.id}
              id={service.id}
              className="grid scroll-mt-32 grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] md:gap-[6.5%]"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col items-start">
                <h2 className="text-balance font-serif text-[36px] font-medium leading-[1.1] text-ink sm:text-[44px] lg:text-[clamp(2.75rem,3.9vw,3.5rem)]">
                  {service.title}
                </h2>
                <p className="mt-6 text-pretty text-[15px] leading-[1.75] text-body lg:text-[16px]">{service.text}</p>
                <span aria-hidden="true" className="mt-8 h-px w-16 bg-gold" />
                <p className="mt-6 font-serif text-[20px] italic leading-snug text-body lg:text-[22px]">
                  {service.quote}
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cotizar ${service.title} por WhatsApp`}
                  className="mt-8 inline-flex h-11 items-center justify-center rounded-[2px] border border-ink px-7 text-[12px] font-bold uppercase tracking-[0.08em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Cotizar
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
