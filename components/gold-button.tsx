import { cn } from '@/lib/utils'

export function GoldButton({
  href,
  className,
  target,
  rel,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        'inline-flex shrink-0 items-center justify-center bg-gold px-6 text-[12px] font-bold tracking-[0.02em] text-night uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dark hover:shadow-[0_10px_24px_-10px_rgba(190,146,80,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:translate-y-0',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
