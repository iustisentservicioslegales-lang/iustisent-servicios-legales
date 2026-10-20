'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type SearchResult = {
  id: number
  element: HTMLElement
  section: string
  text: string
}

const SEARCHABLE = 'main h1, main h2, main h3, main p, main li, footer a, footer p, footer li'
const HIGHLIGHT = ['ring-2', 'ring-gold', 'ring-offset-4', 'rounded-sm']

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function sectionName(element: HTMLElement) {
  const container = element.closest<HTMLElement>('section, footer')
  if (!container) return 'Sitio'
  if (container.tagName === 'FOOTER') return 'Contacto y pie de página'
  const labelId = container.getAttribute('aria-labelledby')
  const label = labelId ? document.getElementById(labelId)?.textContent : null
  return label?.trim() || 'Sitio'
}

function findMatches(query: string): SearchResult[] {
  const term = normalize(query.trim())
  if (term.length < 2) return []

  const matched = Array.from(document.querySelectorAll<HTMLElement>(SEARCHABLE)).filter((el) =>
    normalize(el.textContent ?? '').includes(term),
  )
  const specific = matched.filter((el) => !matched.some((other) => other !== el && el.contains(other)))

  return specific.slice(0, 12).map((element, id) => ({
    id,
    element,
    section: sectionName(element),
    text: (element.textContent ?? '').replace(/\s+/g, ' ').trim(),
  }))
}

function Highlighted({ text, query }: { text: string; query: string }) {
  const start = normalize(text).indexOf(normalize(query.trim()))
  if (start < 0) return <>{text}</>
  const end = start + query.trim().length
  const from = Math.max(0, start - 50)
  const to = Math.min(text.length, end + 70)
  return (
    <>
      {from > 0 && '…'}
      {text.slice(from, start)}
      <mark className="bg-gold/25 text-ink">{text.slice(start, end)}</mark>
      {text.slice(end, to)}
      {to < text.length && '…'}
    </>
  )
}

export function SiteSearch({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const results = useMemo(() => (open ? findMatches(query) : []), [open, query])

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  function goTo(result: SearchResult) {
    setOpen(false)
    setQuery('')
    const el = result.element
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      el.classList.add(...HIGHLIGHT)
      window.setTimeout(() => el.classList.remove(...HIGHLIGHT), 2200)
    })
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Buscar en el sitio"
        aria-haspopup="dialog"
        className={cn(
          'inline-flex size-10 items-center justify-center text-ink transition-colors hover:text-gold',
          className,
        )}
      >
        <Search className="size-[18px]" strokeWidth={2.25} aria-hidden />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-night/60 px-4 pt-20 sm:pt-28">
          <button
            type="button"
            aria-label="Cerrar búsqueda"
            tabIndex={-1}
            className="absolute inset-0 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Buscar en el sitio"
            className="relative w-full max-w-[640px] border border-line bg-background shadow-2xl"
          >
            <form
              role="search"
              onSubmit={(e) => {
                e.preventDefault()
                if (results[0]) goTo(results[0])
              }}
              className="flex items-center gap-3 border-b border-line px-5"
            >
              <Search className="size-5 shrink-0 text-gold" aria-hidden />
              <label htmlFor="site-search-input" className="sr-only">
                Palabra de referencia
              </label>
              <input
                id="site-search-input"
                ref={inputRef}
                type="search"
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busca una palabra: tránsito, familia, contacto…"
                className="h-14 w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-ink/45 [&::-webkit-search-cancel-button]:hidden"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-8 shrink-0 items-center justify-center text-ink/60 transition-colors hover:text-gold"
              >
                <X className="size-5" aria-hidden />
                <span className="sr-only">Cerrar</span>
              </button>
            </form>

            <div className="max-h-[60vh] overflow-y-auto" aria-live="polite">
              {query.trim().length < 2 ? (
                <p className="px-5 py-6 text-sm text-ink/60">
                  Escribe al menos 2 letras para ubicar cualquier contenido del sitio.
                </p>
              ) : results.length === 0 ? (
                <p className="px-5 py-6 text-sm text-ink/60">
                  {'No encontramos resultados para '}
                  <span className="font-semibold text-ink">{`"${query.trim()}"`}</span>.
                </p>
              ) : (
                <ul className="py-2">
                  {results.map((result) => (
                    <li key={result.id}>
                      <button
                        type="button"
                        onClick={() => goTo(result)}
                        className="block w-full px-5 py-3 text-left transition-colors hover:bg-gold/10 focus-visible:bg-gold/10 focus-visible:outline-none"
                      >
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                          {result.section}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-ink">
                          <Highlighted text={result.text} query={query} />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
