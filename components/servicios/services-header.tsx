'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import {
  CONTAINER,
  MAIN_SITE_ABOUT_URL,
  MAIN_SITE_TITLE,
  MAIN_SITE_URL,
  whatsappLink,
} from '@/lib/site'
import { SiteSearch } from './services-search'

const NAV_ITEMS = [
  {
    label: 'Inicio',
    href: MAIN_SITE_URL,
    title: MAIN_SITE_TITLE,
  },
  { label: 'Servicios', href: '#servicios' },
  {
    label: 'Nosotros',
    href: MAIN_SITE_ABOUT_URL,
    title: MAIN_SITE_TITLE,
  },
  { label: 'Contacto', href: whatsappLink(), isExternal: true },
]

export function ServicesHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className={`${CONTAINER} flex h-20 items-center justify-between lg:h-[104px]`}>
        <a
          href={MAIN_SITE_URL}
          title={MAIN_SITE_TITLE}
          aria-label={MAIN_SITE_TITLE}
          className="shrink-0"
        >
          <Image
            src="/images/logo-negro.png"
            alt="IustiSent Servicios Legales"
            width={160}
            height={64}
            priority
            className="h-auto w-[118px] lg:w-[140px]"
          />
        </a>

        <div className="flex items-center gap-2 md:gap-0">
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-12">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    title={item.title}
                    className="relative text-[13px] font-semibold text-ink transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:text-gold hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:ml-6 lg:ml-9">
            <SiteSearch onNavigate={() => setOpen(false)} />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex size-10 items-center justify-center text-ink md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Principal móvil" className="border-t border-border md:hidden">
          <ul className={`${CONTAINER} flex flex-col py-2`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  title={item.title}
                  onClick={() => {
                    setOpen(false)
                  }}
                  className="block py-3 text-sm font-semibold text-ink transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
