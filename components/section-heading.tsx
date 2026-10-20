import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-[11px] leading-none font-bold tracking-[0.18em] text-gold uppercase', className)}>
      {children}
    </p>
  )
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  titleClassName,
}: {
  id: string
  eyebrow: string
  title: string
  description: string
  titleClassName?: string
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-end lg:gap-10">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className={cn(
            'mt-4 font-serif text-[36px] leading-[1.08] font-medium text-ink text-pretty sm:text-[44px] lg:mt-[22px] lg:text-[52px]',
            titleClassName,
          )}
        >
          {title}
        </h2>
      </div>
      <p className="text-[15px] leading-[26px] text-muted-ink lg:pb-[2px]">{description}</p>
    </div>
  )
}
