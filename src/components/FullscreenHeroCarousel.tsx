'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

// ADD MORE IMAGES HERE LATER
import hero1 from '/public/stock/nishi-hero.png'
import hero2 from '/public/stock/jump.png'
import hero3 from '/public/stock/middlefinger.png'

const slides = [
  { src: hero1, alt: 'Unleashed opening moment' },
  { src: hero2, alt: 'Unleashed opening moment' },
  { src: hero3, alt: 'Unleashed opening moment' },
]

export const FullscreenHeroCarousel = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  const active = slides[index]

  return (
    <section
      className={clsx(
        // full-bleed breakout
        'relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] w-screen',
        'bg-void-900 overflow-hidden',
      )}
    >
      {/* DESKTOP: fixed-height stage + fading slides */}
      <div className="relative hidden h-[100svh] min-h-[640px] w-screen md:block">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={clsx(
              'absolute inset-0 transition-opacity duration-700',
              i === index ? 'opacity-100' : 'opacity-0',
            )}
          >
            {/* soft background fill */}
            <Image
              src={slide.src}
              alt=""
              fill
              sizes="100vw"
              className="scale-110 object-cover object-center opacity-35 blur-2xl"
              aria-hidden
              priority={i === 0}
            />

            {/* main image: full-bleed, no side bands */}
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={i === 0}
            />
          </div>
        ))}

        {/* overlays */}
        <div className="pointer-events-none absolute inset-0 bg-black/15" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black/60 to-transparent" />

        {slides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={clsx(
                  'h-2.5 w-2.5 rounded-full transition',
                  i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* MOBILE: no crop, no forced height, no extra bands */}
      <div className="relative w-full md:hidden">
        <Image
          src={active.src}
          alt={active.alt}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />

        {/* overlays */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/50 to-transparent" />

        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={clsx(
                  'h-2.5 w-2.5 rounded-full transition',
                  i === index ? 'bg-white' : 'bg-white/40',
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
