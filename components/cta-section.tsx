import { CONTAINER, getWhatsAppUrl } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Eyebrow } from '@/components/section-heading'
import { GoldButton } from '@/components/gold-button'

export function CtaSection() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="scroll-mt-28 bg-night">
      <div
        className={cn(
          CONTAINER,
          'flex flex-col items-start gap-10 py-16 lg:flex-row lg:items-center lg:justify-between lg:pt-[89px] lg:pb-[87px]',
        )}
      >
        <div>
          <Eyebrow>Hablemos de tu caso</Eyebrow>
          <h2
            id="contacto-title"
            className="mt-6 max-w-[740px] font-serif text-[36px] leading-[1.08] font-medium text-white text-pretty sm:text-[44px] lg:mt-[26px] lg:text-[54px]"
          >
            El primer paso hacia una solución empieza con una conversación.
          </h2>
          <p className="mt-4 text-[15px] leading-[24px] text-beige lg:mt-[14px]">
            Cuéntanos tu situación. Te orientaremos con claridad y sin lenguaje innecesariamente complejo.
          </p>
        </div>
        <GoldButton
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="h-[52px] w-[203px]"
        >
          Solicitar consulta
        </GoldButton>
      </div>
    </section>
  )
}
