'use client'

import { useId, useMemo, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { SEARCH_INDEX, type SearchEntry } from '@/lib/content'

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

function getSnippet(text: string, term: string) {
  const index = normalize(text).indexOf(term)
  if (index === -1) return text.slice(0, 110) + (text.length > 110 ? '…' : '')
  const start = Math.max(0, index - 40)
  const end = Math.min(text.length, index + term.length + 70)
  return `${start > 0 ? '…' : ''}${text.slice(start, end)}${end < text.length ? '…' : ''}`
}

export function highlightSection(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  target.scrollIntoView({ behavior: 'smooth', block: 'center' })
  target.classList.remove('search-highlight')
  void target.offsetWidth
  target.classList.add('search-highlight')
  window.setTimeout(() => target.classList.remove('search-highlight'), 2600)
}

export function SiteSearch({ onNavigate }: { onNavigate?: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const listId = useId()

  const term = normalize(query.trim())
  const results = useMemo<SearchEntry[]>(() => {
    if (term.length < 2) return []
    return SEARCH_INDEX.filter((entry) => normalize(`${entry.title} ${entry.section} ${entry.text}`).includes(term))
  }, [term])

  const open = () => {
    onNavigate?.()
    dialogRef.current?.showModal()
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const close = () => {
    dialogRef.current?.close()
    setQuery('')
  }

  const select = (id: string) => {
    close()
    requestAnimationFrame(() => highlightSection(id))
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Buscar en el sitio"
        className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-all duration-300 hover:bg-cream hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <Search className="size-[18px]" strokeWidth={2} aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Buscar en el sitio"
        onClose={() => setQuery('')}
        onClick={(event) => {
          if (event.target === dialogRef.current) close()
        }}
        className="search-dialog m-0 mx-auto mt-[10vh] w-[calc(100%-2rem)] max-w-[640px] bg-transparent p-0 backdrop:bg-ink/55 backdrop:backdrop-blur-sm"
      >
        <div className="overflow-hidden rounded-[2px] border border-card-border bg-background shadow-2xl">
          <div className="flex items-center gap-3 border-b border-border px-5">
            <Search className="size-5 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
            <label htmlFor={`${listId}-input`} className="sr-only">
              Palabra de búsqueda
            </label>
            <input
              id={`${listId}-input`}
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.nativeEvent.isComposing || event.keyCode === 229) return
                if (event.key === 'Enter' && results[0]) {
                  event.preventDefault()
                  select(results[0].id)
                }
              }}
              placeholder="Buscar servicios, trámites, contacto…"
              autoComplete="off"
              aria-controls={listId}
              className="h-16 w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-body/70 [&::-webkit-search-cancel-button]:appearance-none"
            />
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar buscador"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-body transition-colors hover:bg-cream hover:text-ink"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {term.length < 2 ? (
              <p className="px-6 py-8 text-center text-[14px] text-body">
                Escribe una palabra de referencia, por ejemplo &quot;divorcio&quot;, &quot;multas&quot; o &quot;marca&quot;.
              </p>
            ) : results.length === 0 ? (
              <p className="px-6 py-8 text-center text-[14px] text-body" role="status">
                No encontramos resultados para &quot;{query.trim()}&quot;.
              </p>
            ) : (
              <ul id={listId} className="divide-y divide-border py-1" aria-label="Resultados de búsqueda">
                {results.map((entry) => (
                  <li key={entry.id}>
                    <button
                      type="button"
                      onClick={() => select(entry.id)}
                      className="group flex w-full flex-col items-start gap-1 px-6 py-4 text-left transition-colors hover:bg-cream focus-visible:bg-cream focus-visible:outline-none"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                        {entry.section}
                      </span>
                      <span className="font-serif text-[20px] font-medium leading-snug text-ink group-hover:text-gold">
                        {entry.title}
                      </span>
                      <span className="text-[13px] leading-relaxed text-body">{getSnippet(entry.text, term)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </dialog>
    </>
  )
}
