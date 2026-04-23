'use client'

import { useId, useState } from 'react'
import clsx from 'clsx'
import { Chip } from '@/components/ui/Chip'
import type { FaqItem } from '@/content/retreats/types'

type Props = {
  items: FaqItem[]
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      className={clsx(
        'relative flex h-8 w-8 items-center justify-center rounded-2xl',
        'from-void-400 to-void-500 bg-linear-to-r shadow-xl ring-1 ring-white/10',
      )}
      aria-hidden="true"
    >
      <span className="bg-gold-600 absolute h-[2px] w-4 rounded-full" />
      <span
        className={clsx(
          'bg-gold-600 absolute h-4 w-[2px] rounded-full transition-opacity duration-200',
          open ? 'opacity-0' : 'opacity-100',
        )}
      />
    </span>
  )
}

export const PastEventFaq = ({ items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentBaseId = useId()

  if (items.length === 0) return null

  return (
    <section className="mt-16 px-4 py-10 sm:px-6 md:py-12 lg:px-8">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        <div className="mx-auto max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <Chip>FAQ</Chip>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Questions from this retreat
          </h2>
        </div>

        <div className="mx-auto mt-12 w-full max-w-3xl space-y-6 lg:mt-16">
          {items.map((item, index) => {
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
                    <p className="text-lg font-semibold text-white sm:text-xl">{item.question}</p>
                  </div>
                  <PlusIcon open={open} />
                </button>

                <div
                  id={contentId}
                  className={clsx(
                    'overflow-hidden px-6 transition-[max-height,opacity,padding] duration-300 ease-in-out sm:px-8',
                    open ? 'max-h-[420px] pb-7 opacity-100' : 'max-h-0 pb-0 opacity-0',
                  )}
                >
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-void-200 text-lg leading-relaxed">{item.answer}</p>
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
