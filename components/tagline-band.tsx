import { CONTAINER, getWhatsAppUrl } from '@/lib/site'
import { cn } from '@/lib/utils'
import { GoldButton } from '@/components/gold-button'

export function TaglineBand() {
  return (
    <section aria-label="Nuestro compromiso" className="bg-night">
      <div
        className={cn(
          CONTAINER,
          'flex flex-col items-start gap-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:py-[30px]',
        )}
      >
        <p className="font-serif text-[23px] leading-tight text-white sm:text-[28px]">
          Respaldo jurídico claro, humano y estratégico.
        </p>
        <GoldButton
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-[158px]"
        >
          Contáctanos
        </GoldButton>
      </div>
    </section>
  )
}
