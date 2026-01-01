'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import ashNicolePic from '/public/stock/ash-and-nicole.png'
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
            Unleashed is guided by lived experience, not theory
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-xl text-void-200 md:mt-5 md:max-w-3xl">
            As two friends who met through our queer, sex- & kink- positive
            community, we recognized how lucky we are to have what so many women
            don’t — a safe space to be 100% vulnerable about our sexuality and
            desires.
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
                Both extroverted former-therapists and artists in our own rights,
                we also share the unique experience of talking with many women
                who do not have a community where they can be radically and
                authentically themselves.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-void-200">
                Unleashed is a weekend long retreat for women from all walks of
                life who are looking for a community where they are allowed the
                audacity to be themselves — without walls, judgment or barriers —
                but with empathy, care and support. Our programming doesn’t just
                support personal growth and education, it also facilitates
                forming supportive relationships that we hope continue beyond the
                weekend.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-void-200">
                Having our inaugural production of Unleashed in downtown Chicago,
                featuring a panel of women who live and work in the Chicago area,
                felt important to honor the community that has supported us
                through our own journeys of exploration and embodiment. Making
                this retreat accessible for everyone in our community has also
                been important— so we are providing the option for lodging at a
                discounted rate for women who want the opportunity to fully
                immerse themselves in the experience — while providing
                “scholarships” to attendees who are able to volunteer their time
                and skills in support of the event.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-void-200">
                We can’t wait to share this with you and welcome you into our
                community. We hope Unleashed inspires you to embrace every part
                of yourself and everyone you meet with open arms.
              </p>

              <p className="mt-8 text-lg font-semibold text-white">With love,</p>
              <p className="text-lg font-semibold text-white">Ash & Nicole</p>
              <p className="mt-1 text-sm text-void-300">
                Your unhinged organizers of Unleashed
              </p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="mx-auto mt-12 max-w-(--breakpoint-lg) text-center rounded-3xl shadow-xl">
          <Image
            className="block mx-auto rounded-3xl ring-1 ring-void-300/20"
            src={ashNicolePic}
            alt="Ash and Nicole"
            sizes="(min-width: 1024px) 64rem, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
