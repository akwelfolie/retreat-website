import Image from 'next/image'
import clsx from 'clsx'
import {
  IconCalendarEvent,
  IconClock,
  IconMicrophone,
  IconTools,
  IconUsers,
  IconChefHat,
  IconMusic,
  IconSparkles,
} from '@tabler/icons-react'
import day1Image from '/public/stock/UL-example-image-640x960.png'

const features = [
  {
    tagline: 'Schedule',
    headline: 'Day 1: Saturday, February 21, 2026',
    text: 'Unleashing together',
    image: {
      src: day1Image,
      alt: 'Unleashed retreat schedule day 1',
    },
    items: [
      { label: 'Check in: 10:00 AM', text: '', icon: IconClock },
      { label: 'Opening: 12:00-1:30 PM', text: '', icon: IconCalendarEvent },
      {
        label: 'Speakers & Workshops: 2:00-5:00 PM',
        text: '',
        icon: IconMicrophone,
      },
      {
        label: 'Community Dinner (provided) & Special Performances: 6:30 PM',
        text: '',
        icon: IconChefHat,
      },
      {
        label: 'Followed by DJ, dancing, and more opportunities for socializing',
        text: '',
        icon: IconMusic,
      },
    ],
  },
  {
    tagline: 'Schedule',
    headline: 'Day 2: Sunday, February 22, 2026',
    text: 'Breaking down barriers & building new beliefs',
    image: {
      src: day1Image,
      alt: 'Unleashed retreat schedule day 2',
    },
    items: [
      {
        label: 'Optional morning movement: 8:00 AM-9:00 AM',
        text: '',
        icon: IconSparkles,
      },
      {
        label: '',
        text: '',
        icon: null,
      },
      {
        label: 'Speakers & Workshops: 9:30 AM- 4:00 PM (with meal breaks between)',
        text: '',
        icon: IconTools,
      },
      { label: 'Closing: 4:00 PM- 5:00 PM', text: '', icon: IconUsers },
    ],
  },
]

export const SchedulePreview = () => {
  return (
    <section className="bg-dark-800 px-4 pb-10 sm:px-6 md:pb-16 md:pt-12 lg:px-8">
      {/* Features container */}
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        {features.map((feature, i) => (
          <div
            key={`schedule-preview-${i}`}
            className={clsx(
              'mx-auto max-w-xl md:max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24',
              i % 2 === 1 && 'mt-24 lg:mt-32',
            )}
          >
            {/* Feature text with icons */}
            <div className={clsx(i % 2 === 1 && 'lg:order-2', 'col-span-2')}>
              <div className="text-center lg:text-left">
                <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-dark-600 to-dark-700 px-6 py-2 text-sm font-medium tracking-wide text-white">
                  {feature.tagline}
                </p>

                <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:mt-6">
                  {feature.headline}
                </h2>

                <p className="mt-4 text-xl text-dark-300 lg:mt-6">
                  {feature.text}
                </p>

                <div className="mx-auto mt-8 flex max-w-xs flex-col space-y-8 sm:mx-0 sm:mt-10 sm:max-w-none sm:flex-row sm:space-x-4 sm:space-y-0 lg:space-x-6">
                  {feature.items.slice(0, 2).map((item, j) => (
                    <div
                      key={`schedule-list-top-${i}-${j}`}
                      className="flex flex-col items-center lg:items-start"
                    >
                      <div className="flex flex-col items-center sm:flex-row">
                        {item.icon?(
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-dark-600 to-dark-700">
                          <item.icon
                            className="h-6 w-6 text-dark-300"
                            stroke={1.5}
                          />
                        </div>):null}
                        <div className="mt-3 text-xl font-semibold text-white sm:ml-3 sm:mt-0">
                          {item.label}
                        </div>
                      </div>
                      {item.text ? (
                        <p className="mt-1 text-lg leading-relaxed text-dark-300 sm:mt-3">
                          {item.text}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>

                {/* Remaining items (full-width list) */}
                <div className="mt-10 space-y-5">
                  {feature.items.slice(2).map((item, j) => (
                    <div
                      key={`schedule-list-rest-${i}-${j}`}
                      className="flex items-start gap-4"
                    >
                      {item.icon ? (
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-linear-to-r from-dark-600 to-dark-700">
                        <item.icon className="h-5 w-5 text-dark-300" stroke={1.5} />
                      </div>):null}
                      <div className="text-left">
                        <div className="mt-2 text-lg font-semibold text-white">
                          {item.label}
                        </div>
                        {item.text ? (
                          <div className="mt-1 text-base text-dark-300">
                            {item.text}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>

                {i === features.length - 1 && (
                  <p className="mt-10 text-sm text-dark-300">
                    **Schedule subject to change
                  </p>
                )}
              </div>
            </div>

            {/* Feature image */}
            <div className="col-span-1 mt-10 flex items-center lg:order-1 lg:mt-0">
              <div className="relative aspect-2/3 w-full rounded-3xl text-center shadow-xl">
                <Image
                  className="absolute inset-0 size-full rounded-3xl object-cover object-center align-middle"
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  sizes="(min-width: 1280px) 23.5rem, (min-width: 1024px) 33vw, (min-width: 768px) 42rem, (min-width: 640px) 36rem, calc(100vw - 2rem)"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
