'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const MAX_LOOPS = 6

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const loopCountRef = useRef(1)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isEnded, setIsEnded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Configuración de reproducción automática, silenciada y con soporte en línea para móviles
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true
    video.setAttribute('playsinline', 'true')
    video.setAttribute('webkit-playsinline', 'true')
    video.setAttribute('x5-playsinline', 'true')

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.warn('Autoplay bloqueado por el navegador:', error)
          setIsPlaying(false)
        })
    }
  }, [])

  // Control de bucle: exactamente 6 reproducciones completas desde el ingreso
  const handleEnded = useCallback(() => {
    if (loopCountRef.current < MAX_LOOPS) {
      loopCountRef.current += 1
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {
            setIsEnded(true)
            setIsPlaying(false)
          })
      }
    } else {
      // Al completar el 6to bucle, se detiene el video y se activa la imagen fija original
      setIsEnded(true)
      setIsPlaying(false)
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [])

  // El video debe mostrarse únicamente mientras se esté reproduciendo y no haya finalizado sus 6 bucles.
  // Al terminar o si no puede reproducirse, se muestra la imagen original del hero banner.
  const showVideo = isPlaying && !isEnded && !hasError

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className={cn(
        'relative scroll-mt-28 overflow-hidden transition-colors duration-700',
        showVideo ? 'bg-night' : 'bg-background'
      )}
    >
      {/* 1. ESTADO VIDEO HERO: Ajustado al ancho completo y sin espacios sobrantes */}
      <div
        className={cn(
          'relative w-full overflow-hidden bg-coal transition-opacity duration-700',
          showVideo
            ? 'block opacity-100 aspect-[16/9] lg:h-[calc(100vh-220px)] lg:min-h-[380px] lg:max-h-[611px] lg:aspect-auto'
            : 'hidden'
        )}
      >
        <video
          ref={videoRef}
          src="/def.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-label="Video de presentación"
          onEnded={handleEnded}
          onError={() => {
            setHasError(true)
            setIsPlaying(false)
          }}
          onPlaying={() => {
            setIsPlaying(true)
            setHasError(false)
          }}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* 2. ESTADO BANNER ORIGINAL: Aparece cuando el video termina sus 6 bucles o si el video no puede reproducirse */}
      <div
        className={cn(
          'relative mx-auto w-full max-w-[1440px] bg-[linear-gradient(to_right,#ffffff_0%,#fbfbf9_20%,#f8f7f5_39%)] transition-opacity duration-700',
          !showVideo
            ? 'flex flex-col opacity-100 lg:block lg:h-[calc(100vh-220px)] lg:min-h-[380px] lg:max-h-[611px]'
            : 'hidden'
        )}
      >
        {/* Mitad izquierda: Logotipo y texto oficial */}
        <div className="relative z-10 flex flex-col items-center px-6 pt-8 pb-6 text-center sm:px-10 lg:absolute lg:top-[12.4%] lg:left-[6.11%] lg:w-[39%] lg:p-0">
          <Image
            src="/images/logo-hero.png"
            alt="Iustisent Servicios Legales"
            width={359}
            height={160}
            priority
            className="h-auto w-[240px] sm:w-[300px] lg:w-[63%] lg:max-w-[359px]"
          />
          <h1
            id="hero-title"
            className="mt-6 font-serif text-[38px] leading-[1.02] font-bold text-hero-ink text-balance sm:text-[48px] lg:mt-[min(3vw,42px)] lg:text-[min(4.2vw,60px)]"
          >
            Soluciones legales para tu día a día
          </h1>
        </div>

        {/* Mitad derecha: Imagen hero original de clientes y equipo */}
        <div className="relative aspect-[880/611] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[61.11%] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_4%)]">
          <Image
            src="/images/hero-personas.png"
            alt="Equipo de Iustisent junto a clientes: un policía, una familia, un ejecutivo y un deportista, con una balanza de la justicia y libros de derecho al fondo"
            fill
            priority
            sizes="(min-width: 1024px) 61vw, 100vw"
            className="object-cover object-right"
          />
        </div>
      </div>
    </section>
  )
}


