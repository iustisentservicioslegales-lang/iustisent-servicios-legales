import { Scale, ShieldCheck, Trophy } from 'lucide-react'
import { CONTAINER } from '@/lib/site'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'

const SERVICES = [
  {
    icon: ShieldCheck,
    title: 'Asesoría preventiva',
    description: 'Orientación clara para anticipar riesgos y tomar decisiones con seguridad.',
  },
  {
    icon: Scale,
    title: 'Defensa jurídica',
    description: 'Acompañamiento responsable para proteger tus intereses en cada etapa.',
  },
  {
    icon: Trophy,
    title: 'Trabajamos con especialistas',
    description: 'Apoyo jurídico para la construcción de estrategias legales específicas para cada caso.',
  },
]

export function ServicesIntro() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="scroll-mt-28 bg-background">
      <div className={cn(CONTAINER, 'py-16 lg:pt-[97px] lg:pb-[96px]')}>
        <SectionHeading
          id="servicios-title"
          eyebrow="¿Quiénes somos?"
          title="Somos soluciones legales para avanzar"
          description="Analizamos cada situación con rigor y explicamos tus opciones de forma directa y comprensible."
        />

        <ul className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-[50px]">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group min-h-[240px] border border-line bg-cream px-[30px] pt-[33px] pb-8 transition-colors duration-300 hover:border-gold lg:min-h-[291px]"
            >
              <Icon className="size-8 text-gold" strokeWidth={1.25} aria-hidden />
              <h3 className="mt-[26px] font-serif text-[26px] leading-tight font-medium text-ink">{title}</h3>
              <p className="mt-6 text-[14px] leading-[23px] text-muted-ink">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
