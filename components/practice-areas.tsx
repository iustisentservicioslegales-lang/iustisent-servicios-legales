import Image from 'next/image'
import { CONTAINER, SERVICES_SITE_URL } from '@/lib/site'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'

const AREAS = [
  {
    title: 'Derecho de Familia',
    image: '/images/familia.png',
    alt: 'Figuras doradas de una familia sobre un libro abierto de derecho de familia junto a dos anillos',
    href: `${SERVICES_SITE_URL}/#derecho-familia`,
  },
  {
    title: 'Derecho de Tránsito',
    image: '/images/transito.png',
    alt: 'Agente de tránsito junto a una motocicleta policial y un automóvil en una carretera de montaña',
    href: `${SERVICES_SITE_URL}/#derecho-transito`,
  },
  {
    title: 'Derecho Empresarial',
    image: '/images/empresarial.png',
    alt: 'Apretón de manos sobre un escritorio con contratos, bolígrafos y una balanza de la justicia',
    href: `${SERVICES_SITE_URL}/#derecho-empresarial`,
  },
  {
    title: 'Derecho Notarial, Registral e Inmobiliario',
    image: '/images/notarial.png',
    alt: 'Maqueta de una casa sobre un documento notarial con bolígrafos y la sombra de la justicia',
    href: `${SERVICES_SITE_URL}/#derecho-notarial`,
  },
  {
    title: 'Asesoría Legal para Iglesias',
    image: '/images/iglesias.png',
    alt: 'Santa Biblia sobre una carpeta con documentos legales, un sello y una taza de Iustisent',
    href: `${SERVICES_SITE_URL}/#asesoria-iglesias`,
  },
  {
    title: 'Derecho Deportivo',
    image: '/images/deportivo.png',
    alt: 'Balón de fútbol, pelota de tenis, libro y balanza de la justicia sobre el césped de un estadio',
    href: `${SERVICES_SITE_URL}/#asesoria-deportiva`,
  },
]

export function PracticeAreas() {
  return (
    <section id="ramas" aria-labelledby="ramas-title" className="scroll-mt-28 bg-background">
      <div className={cn(CONTAINER, 'py-16 lg:pt-[97px] lg:pb-[97px]')}>
        <SectionHeading
          id="ramas-title"
          eyebrow="Áreas de servicio"
          title="Soluciones legales para variedad de ramas"
          titleClassName="lg:max-w-[720px]"
          description="Encuentra el respaldo jurídico que necesitas y consulta directamente el servicio adecuado para tu caso."
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[58px] lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[25px]">
          {AREAS.map((area) => (
            <li key={area.title} className="group flex flex-col border border-line bg-cream">
              <div className="bg-sand px-5">
                <div className="relative aspect-[360/359] overflow-hidden">
                  <Image
                    src={area.image || '/placeholder.svg'}
                    alt={area.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col px-6 pt-[26px] pb-[34px]">
                <h3 className="mb-3 min-h-[52px] font-serif text-[25px] leading-[1.04] font-medium text-ink">
                  {area.title}
                </h3>
                <a
                  href={area.href}
                  title={`Servicios | IustiSent Servicios Legales - ${area.title}`}
                  className="mt-auto inline-flex h-[43px] w-fit items-center justify-center border border-ink px-[18px] text-[12px] font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Consultar este servicio
                  <span className="sr-only">{`: ${area.title}`}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
