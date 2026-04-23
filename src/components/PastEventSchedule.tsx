import Image from 'next/image'
import clsx from 'clsx'
import { Chip } from './ui/Chip'
import type { ScheduleSection, ScheduleItem } from '@/content/retreats/types'

type Props = {
  dateLabel: string
  formatLabel: string
  sections: ScheduleSection[]
}

function ItemRow({ item }: { item: ScheduleItem }) {
  const IconCmp = item.icon

  return (
    <div className="flex items-start gap-4">
      {IconCmp ? (
        <div className="from-void-400 to-void-500 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-linear-to-r">
          <IconCmp className="text-gold-600 h-4.5 w-4.5" stroke={1.5} />
        </div>
      ) : null}

      <div className="min-w-0">
        <div className="text-base font-semibold text-white">{item.title}</div>

        {item.subtitle ? (
          <div className="text-void-200 mt-0.5 text-sm">{item.subtitle}</div>
        ) : null}

        {item.facilitator ? (
          <div className="text-void-300 mt-1 text-xs">{item.facilitator}</div>
        ) : null}
      </div>
    </div>
  )
}

export const PastEventSchedule = ({ dateLabel, formatLabel, sections }: Props) => {
  return (
    <section className="px-4 pb-8 sm:px-6 md:pb-12 lg:px-8">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        <div className="mx-auto max-w-3xl text-center">
          <Chip className="text-[1.8rem]">
            {dateLabel} <br /> {formatLabel}
          </Chip>
        </div>

        {sections.length === 0 ? (
          <p className="text-void-300 mt-12 text-center text-lg">No schedule available.</p>
        ) : (
          sections.map((section, i) => (
            <div
              key={`schedule-${i}`}
              className={clsx(
                'mx-auto mt-12 max-w-xl lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-x-14',
              )}
            >
              <div className={clsx(i % 2 === 1 && 'lg:order-2', 'col-span-2')}>
                <div
                  className={clsx(
                    'mt-3 rounded-2xl px-5 py-5 shadow-xl ring-1 ring-white/10',
                    i === 0 ? 'bg-blue-500/55' : 'bg-pink-500/55',
                  )}
                >
                  <h3 className="text-3xl font-extrabold text-white">{section.headline}</h3>
                  <p className="text-void-200 mt-3 text-lg">{section.text}</p>
                </div>

                <div className="bg-void-500 mt-6 space-y-4 rounded-2xl px-5 py-6 ring-1 ring-white/10">
                  {section.items.map((item, j) => (
                    <ItemRow key={j} item={item} />
                  ))}
                </div>

                {section.extra}
              </div>

              <div className="col-span-1 mt-8 flex items-center lg:mt-0">
                <div className="relative aspect-2/3 w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
