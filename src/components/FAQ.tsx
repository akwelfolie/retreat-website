'use client'

import { useId, useState } from 'react'
import clsx from 'clsx'
import { Chip } from '@/components/ui/Chip'

type FaqItem = {
  question: string
  answer: React.ReactNode
}

const faqs: FaqItem[] = [
  {
    question: 'Who can attend Unleashed?',
    answer: (
      <>
        All women and woman-aligned individuals, including non-binary and trans
        women, 21+. This retreat is not open to cis-gendered males (we hope to
        offer a similar experience in the future). We do not make exceptions for
        the age requirement.
      </>
    ),
  },
  {
    question:
      'Do I need previous experience in kink, tantra, or sex-forward workshops to attend?',
    answer: (
      <>
        No. This experience is curated for women with all levels of experience,
        wherever they are in their sexual journey. All you need is an open heart
        and mind.
      </>
    ),
  },
  {
    question: 'Is this event ADA accessible?',
    answer: (
      <>
        Unfortunately the venue space is on second floor, so it is not fully ADA
        accessible. If you have a question about specific accommodations for
        programming, email{' '}
        <a
          href="mailto:info@thisisunleashed.com"
          className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          info@thisisunleashed.com
        </a>
        .
      </>
    ),
  },
  {
    question: 'Do you provide need-based discounts for the retreat?',
    answer: (
      <>
        We do not, but we provide opportunities to volunteer in exchange for a
        discounted rate and limited scholarships to attend for free. If you’re
        interested, fill out{' '}
        <a
          href="https://forms.gle/hLY62tzS1spkZJvD9"
          className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          this form
        </a>
        .
      </>
    ),
  },
  {
    question: 'Do you provide ticket refunds or transfers?',
    answer: (
      <>
        We allow ticket transfers. Email{' '}
        <a
          href="mailto:info@thisisunleashed.com"
          className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          info@thisisunleashed.com
        </a>{' '}
        if you need to transfer your ticket to a friend or are looking for
        someone from the waitlist. In cases of serious illness, injury, or
        family emergency, refunds may be provided at the discretion of the
        organizers.
      </>
    ),
  },
]

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      className={clsx(
        'relative flex h-8 w-8 items-center justify-center rounded-2xl',
        'from-void-400 to-void-500 bg-linear-to-r shadow-xl ring-1 ring-white/10',
      )}
      aria-hidden="true"
    >
      {/* horizontal */}
      <span className="bg-gold-600 absolute h-[2px] w-4 rounded-full" />
      {/* vertical (disappears when open) */}
      <span
        className={clsx(
          'bg-gold-600 absolute h-4 w-[2px] rounded-full transition-opacity duration-200',
          open ? 'opacity-0' : 'opacity-100',
        )}
      />
    </span>
  )
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const contentBaseId = useId()

  return (
    <section className="mt-16 px-4 py-10 sm:px-6 md:py-12 lg:px-8">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        {/* Header */}
        <div className="mx-auto max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <Chip>FAQ</Chip>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Questions, answered
          </h2>
          <p className="text-void-200 mt-6 text-xl">
            If you’re wondering it, someone else probably is too.
          </p>
        </div>

        {/* List */}
        <div className="mx-auto mt-12 w-full max-w-3xl space-y-6 lg:mt-16">
          {faqs.map((item, index) => {
            const open = openIndex === index
            const contentId = `${contentBaseId}-faq-${index}`

            return (
              <div
                key={`faq-${index}`}
                className={clsx(
                  'bg-void-500 ring-void-300/20 rounded-3xl shadow-xl ring-1',
                  'transition-colors duration-200',
                )}
              >
                <button
                  type="button"
                  className={clsx(
                    'flex w-full items-center justify-between gap-4 px-6 py-6 text-left sm:px-8',
                    'cursor-pointer focus:outline-hidden',
                  )}
                  aria-expanded={open}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <div className="pr-2">
                    <p className="text-lg font-semibold text-white sm:text-xl">
                      {item.question}
                    </p>
                  </div>
                  <PlusIcon open={open} />
                </button>

                <div
                  id={contentId}
                  className={clsx(
                    'overflow-hidden px-6 transition-[max-height,opacity,padding] duration-300 ease-in-out sm:px-8',
                    open
                      ? 'max-h-[420px] pb-7 opacity-100'
                      : 'max-h-0 pb-0 opacity-0',
                  )}
                >
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-void-200 text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
