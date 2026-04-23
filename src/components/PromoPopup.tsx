'use client'

import { useEffect, useRef, useState } from 'react'
import { IconVolume, IconVolumeOff, IconX } from '@tabler/icons-react'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton'
import { LINKS } from '@/config/links'

const SITE_HOSTS = ['thisisunleashed.com', 'localhost']

function isInternalReferrer() {
  try {
    const ref = document.referrer
    if (!ref) return false
    const host = new URL(ref).hostname
    return SITE_HOSTS.some((h) => host === h || host.endsWith('.' + h))
  } catch {
    return false
  }
}

export const PromoPopup = () => {
  const [visible, setVisible] = useState(false)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Show whenever arriving from outside the site; skip on internal navigation
    if (!isInternalReferrer()) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (visible) {
      videoRef.current?.play()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  const dismiss = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={dismiss}
    >
      {/* Panel — stop click-through */}
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-void-800 shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-void-700/80 text-void-300 transition hover:bg-void-600 hover:text-white"
        >
          <IconX size={18} stroke={2} />
        </button>

        {/* Video */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <video
            ref={videoRef}
            src="/stock/awaken.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Unmute button */}
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-black/80"
          >
            {muted ? <IconVolumeOff size={14} stroke={2} /> : <IconVolume size={14} stroke={2} />}
            {muted ? 'Tap to unmute' : 'Mute'}
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 text-center sm:px-8 sm:py-7">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Mini-UNLEASHED: Awaken Your Senses
          </h2>

          <p className="mt-2 text-sm font-medium tracking-wide text-void-300">
            Wednesday, May 6, 2026 · 6:30–9:30 PM
            <br />
            Studio 205 · 1821 W Hubbard St · Chicago, IL
          </p>

          <p className="mt-4 text-base text-void-200">
            Early Bird tickets are <span className="font-semibold text-white">only $65</span> —
            and spots are limited. Don&apos;t wait.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <PrimaryButton href={LINKS.tickets} onClick={dismiss}>
              Buy Tickets
            </PrimaryButton>
            <SecondaryButton href="/next-up" onClick={dismiss}>
              More Details
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
