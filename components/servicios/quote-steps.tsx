import { LogIn, PhoneCall, Scale, ShieldCheck } from 'lucide-react'
import { CONTAINER } from '@/lib/site'
import { STEPS } from '@/lib/content'

const STEP_ICONS = [PhoneCall, Scale, ShieldCheck, LogIn]

export function QuoteSteps() {
  return (
    <section id="inicio" aria-labelledby="como-cotizar" className="bg-background py-16 lg:py-[100px]">
      <div className={CONTAINER}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Áreas de servicio</p>
        <h1
          id="como-cotizar"
          className="mt-3 scroll-mt-32 text-balance font-serif text-[32px] font-medium leading-tight text-ink sm:text-[38px] lg:text-[46px]"
        >
          ¿Cómo cotizar a través de WhatsApp para posterior consulta?
        </h1>

        <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-[1.6%]">
          {STEPS.map(({ id, title, text }, index) => {
            const Icon = STEP_ICONS[index]
            return (
              <li
                key={id}
                id={id}
                className="flex scroll-mt-32 flex-col border border-card-border bg-card px-8 pb-10 pt-8 transition-colors duration-300 hover:border-gold/60"
              >
                <Icon className="size-7 text-gold" strokeWidth={1.25} aria-hidden="true" />
                <h2 className="mt-5 font-serif text-[24px] font-medium leading-snug text-ink lg:text-[25px]">
                  {title}
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-body">{text}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
