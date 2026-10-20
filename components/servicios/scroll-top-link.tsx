'use client'

import type { MouseEvent, ReactNode } from 'react'

export function ScrollTopLink({
  children,
  className,
  label,
}: {
  children: ReactNode
  className?: string
  label: string
}) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    history.replaceState(null, '', window.location.pathname)
  }

  return (
    <a href="#inicio" onClick={handleClick} aria-label={label} className={className}>
      {children}
    </a>
  )
}
