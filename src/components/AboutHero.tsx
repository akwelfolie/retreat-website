'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import communityPic from '/public/stock/spiritual-church-2.png'
import clsx from 'clsx'
import { Chip } from './ui/Chip'
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton'

export const AboutHero = () => {
  const [open, setOpen] = useState(false)
  const contentId = useId()

  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 md:pb-12 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        {/* Hero text */}
        <div className="mx-auto w-full max-w-4xl text-center lg:max-w-5xl">
          <Chip>Our story</Chip>

          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:mt-5 md:text-6xl">
            UNLEASHED is guided by lived experience, not theory
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-xl text-void-200 md:mt-5 md:max-w-3xl">
            Finding her people in Chicago&apos;s queer, sex- and kink-positive community, Ash
            discovered something rare — a space where women could be 100% vulnerable about their
            sexuality and desires. She also saw how many women outside that circle never get to feel
            that kind of freedom.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex justify-center">
            <SecondaryButton
              size="sm"
              href="#0"
              aria-expanded={open}
              aria-controls={contentId}
              onClick={(e) => {
                e.preventDefault()
                setOpen((v) => !v)
              }}
            >
              {open ? 'Hide our story' : 'Read our story'}
            </SecondaryButton>
          </div>

          {/* Accordion content */}
          <div
            id={contentId}
            className={clsx(
              'mx-auto overflow-y-auto transition-[max-height,opacity,margin] duration-300 ease-in-out',
              open ? 'mt-8 max-h-[1500px] opacity-100' : 'mt-0 max-h-0 opacity-0',
            )}
          >
            <div className="mx-auto max-w-3xl rounded-3xl bg-void-500 px-6 py-8 text-left shadow-xl ring-1 ring-white/10 sm:px-8 sm:py-10">
              <p className="text-lg leading-relaxed text-void-200">
                As an extroverted former-therapist and artist, I have spent years in conversation
                with women who long for a community where they can be radically and authentically
                themselves — without performance, without judgment, and without shrinking.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-void-200">
                UNLEASHED is a movement for women from all walks of life who are ready to give
                themselves permission to take up space — with empathy, care, and support all around
                them. The programming doesn&apos;t just support personal growth and education; it
                creates the conditions for real relationships to form, friendships that we hope
                continue long after each event ends.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-void-200">
                Rooting UNLEASHED in Chicago felt important — to honor the community that has
                supported so many of us through our own journeys of exploration and embodiment.
                Making these experiences accessible has always been a priority: scholarships for
                attendees who volunteer their time and skills, and a genuine commitment to holding
                space for everyone who shows up.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-void-200">
                We can&apos;t wait to welcome you in. We hope UNLEASHED inspires you to embrace
                every part of yourself — and everyone you meet — with open arms.
              </p>

              <p className="mt-8 text-lg font-semibold text-white">With love,</p>
              <p className="text-lg font-semibold text-white">Ash</p>
              <p className="mt-1 text-sm text-void-300">Your unhinged organizer of UNLEASHED</p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="mx-auto mt-12 max-w-(--breakpoint-lg) rounded-3xl text-center shadow-xl">
          <Image
            className="mx-auto block rounded-3xl ring-1 ring-void-300/20"
            src={communityPic}
            alt="The UNLEASHED community"
            sizes="(min-width: 1024px) 64rem, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
