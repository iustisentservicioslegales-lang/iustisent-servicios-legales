'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email)
      } else {
        throw new Error('Clipboard API not available')
      }
    } catch {
      const textArea = document.createElement('textarea')
      textArea.value = email
      textArea.style.position = 'fixed'
      textArea.style.left = '-9999px'
      textArea.style.top = '-9999px'
      textArea.setAttribute('readonly', '')
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }

    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Clic para copiar correo"
      aria-label={`Copiar correo electrónico ${email}`}
      className="group inline-flex items-center gap-2 cursor-pointer break-all text-left text-[12.5px] leading-[21px] text-beige transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <span>{email}</span>
      {copied ? (
        <span className="inline-flex items-center gap-1 rounded bg-gold/20 px-1.5 py-0.5 text-[11px] font-medium text-gold">
          <Check className="size-3" strokeWidth={2.5} aria-hidden="true" />
          <span>¡Copiado!</span>
        </span>
      ) : (
        <Copy
          className="size-3 text-gold/70 opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      )}
    </button>
  )
}
