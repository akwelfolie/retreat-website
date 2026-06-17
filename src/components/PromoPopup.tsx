'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import posterImg from '/public/stock/rozbot/poster.jpeg'

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

  useEffect(() => {
    if (!isInternalReferrer()) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  const dismiss = () => setVisible(false)

  if (!visible) return null

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={dismiss}
    >
      {/* Panel */}
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Poster image */}
        <Image
          src={posterImg}
          alt="Pride Drag Plant Bingo — June 30"
          className="h-auto w-full"
          priority
        />

        {/* Buttons */}
        <div className="flex gap-3 bg-black/90 px-5 py-4">
          <PrimaryButton href="/next-up" onClick={dismiss} className="h-12 flex-1 text-sm">
            More Details
          </PrimaryButton>
          <SecondaryButton
            onClick={dismiss}
            className="h-12 flex-1 text-sm"
            gradient="from-white/10 to-white/5"
          >
            Not Now
          </SecondaryButton>
        </div>
      </div>
    </div>
  )
}
