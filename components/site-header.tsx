'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { CONTAINER, getWhatsAppUrl } from '@/lib/site'
import { cn } from '@/lib/utils'
import { SiteSearch } from '@/components/site-search'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#ramas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: getWhatsAppUrl(), external: true },
]

function scrollToTop(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  window.history.replaceState(null, '', '#inicio')
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false)
    if (href === '#inicio') scrollToTop(event)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background">
      <div className={cn(CONTAINER, 'flex h-[72px] items-center justify-between lg:h-[111px]')}>
        <a
          href="#inicio"
          onClick={handleNavClick('#inicio')}
          aria-label="Iustisent Servicios Legales, ir al inicio"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/logo-negro.png"
            alt="Iustisent Servicios Legales"
            width={128}
            height={56}
            priority
            className="h-10 w-auto lg:h-14"
          />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="relative py-2 text-[13px] font-semibold text-ink transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-gold hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <SiteSearch className="-mx-2" />
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <SiteSearch />
          <button
          type="button"
          className="-mr-2 inline-flex size-10 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Principal móvil"
        className={cn('border-t border-line bg-background md:hidden', open ? 'block' : 'hidden')}
      >
        <ul className={cn(CONTAINER, 'flex flex-col py-2')}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={handleNavClick(item.href)}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="block py-3 text-sm font-semibold text-ink transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
