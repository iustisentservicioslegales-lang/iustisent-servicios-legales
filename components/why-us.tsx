import { CONTAINER } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Eyebrow } from '@/components/section-heading'

const REASONS = [
  {
    title: 'Atención rápida y prioritaria',
    description: 'Respondemos a tu consulta sin demoras innecesarias.',
  },
  {
    title: 'Lenguaje claro y comprensible',
    description: 'Explicamos tu situación y tus opciones de forma sencilla, honesta y directa.',
  },
  {
    title: 'Estrategias a tu medida',
    description: 'Diseñamos un plan de acción pensado para proteger tus intereses.',
  },
]

export function WhyUs() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="scroll-mt-28 bg-coal">
      <div
        className={cn(
          CONTAINER,
          'grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-10 lg:pt-[99px] lg:pb-[120px] xl:grid-cols-[minmax(0,1fr)_666px]',
        )}
      >
        <div className="min-w-0 lg:max-w-[500px]">
          <Eyebrow>Iustisent servicios legales</Eyebrow>
          <h2
            id="nosotros-title"
            className="mt-6 font-serif text-[32px] leading-[1.08] font-medium break-words text-white text-pretty sm:text-[44px] lg:mt-[30px] lg:text-[46px] xl:text-[52px]"
          >
            Claridad y tranquilidad frente a cada desafío legal
          </h2>
          <p className="mt-6 max-w-[500px] text-[15px] leading-[26px] text-beige lg:mt-[22px]">
            Entendemos que un problema legal puede generar incertidumbre, estrés y muchas preguntas. Te
            brindamos asesoría jurídica y acompañamiento desde el primer momento.
          </p>
        </div>

        <ol className="min-w-0 lg:pt-[22px]">
          {REASONS.map((reason, index) => (
            <li
              key={reason.title}
              className="grid grid-cols-[36px_minmax(0,1fr)] gap-x-0 border-b border-divider-dark pt-6 pb-6 first:pt-0 sm:grid-cols-[66px_minmax(0,1fr)] lg:pt-[25px] lg:pb-[26px] lg:first:pt-0"
            >
              <span aria-hidden className="pt-[7px] font-serif text-[14px] leading-none text-gold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif text-[21px] leading-tight font-medium text-white sm:text-[24px] lg:text-[25px]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[22px] text-beige">{reason.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
