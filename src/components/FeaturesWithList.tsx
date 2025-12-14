import Image from 'next/image'
import clsx from 'clsx'
import { IconChecks } from '@tabler/icons-react'
import featureImage1 from '/public/stock/features-alternating-with-list-01.jpg'
import featureImage2 from '/public/stock/features-alternating-with-list-02.jpg'

const features = [
  {
    tagline: 'Strategic Approach',
    headline: 'Let’s Drive Your Brand Forward',
    text: 'With a fusion of data-driven tactics and creative storytelling, we elevate your brand. Our team empowers your business, pushing it beyond the ordinary to achieve unparalleled success.',
    image: {
      src: featureImage1,
      alt: 'Three people working on table and laughing',
    },
    list: [
      { text: 'In-depth market research and analysis.' },
      { text: 'Comprehensive brand strategy formulation.' },
      { text: 'Focused brand message and value proposition.' },
    ],
  },
  {
    tagline: 'Innovative Solutions',
    headline: 'Unlock Your Business Potential',
    text: 'Redefining the limits with progressive solutions, we fuel your enterprise with innovation. From digital landscapes to brand narratives, our work propels your business to new heights.',
    image: {
      src: featureImage2,
      alt: 'Two people brainstorming on table',
    },
    list: [
      { text: 'Cutting-edge digital product development.' },
      { text: 'Optimized marketing strategies for growth.' },
      { text: 'Impactful narratives that resonate with audiences.' },
    ],
  },
]

export const FeaturesWithList = () => {
  return (
    <section className="bg-dark-800 px-4 pb-12 pt-10 sm:px-6 sm:pb-16 md:pt-12 lg:px-8">
      {/* Features container */}
      <div className="mx-auto max-w-(--breakpoint-xl)">
        {features.map((feature, i) => (
          <div
            key={`feature-with-list-${i}`}
            className={clsx(
              'relative lg:grid lg:auto-rows-max lg:grid-cols-2 lg:gap-x-12',
              i % 2 === 1 && 'mt-24 lg:mt-32',
            )}
          >
            {/* Feature text with list */}
            <div
              className={clsx(
                'flex flex-col items-center justify-center lg:items-start',
                i % 2 === 1 && 'lg:order-2',
              )}
            >
              <div className="w-full text-center lg:text-left">
                <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-dark-600 to-dark-700 px-6 py-2 text-sm font-medium tracking-wide text-white">
                  {feature.tagline}
                </p>
              </div>
              <div className="mt-4 w-full max-w-lg text-center sm:max-w-2xl lg:mt-6 lg:text-left">
                <h3 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                  {feature.headline}
                </h3>
                <p className="mx-auto mt-4 text-xl text-dark-300 lg:mt-6">
                  {feature.text}
                </p>
              </div>
              <div className="mt-6 space-y-2 lg:mt-8">
                {feature.list.map((item, j) => (
                  <div
                    key={`feature-list-item-${j}`}
                    className="flex items-center text-lg text-dark-300"
                  >
                    {/* TablerIcon name: checks */}
                    <IconChecks className="mr-2 h-7 w-7" stroke={1.5} />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Feature image */}
            <div
              className={clsx(
                'relative mx-auto mt-10 flex w-full max-w-lg items-center justify-center lg:mt-0 lg:max-w-none',
                i % 2 === 1 && 'lg:order-1',
              )}
            >
              <div
                className={clsx(
                  'absolute h-full w-full rounded-3xl bg-dark-700 sm:top-8 lg:top-4 2xl:top-10',
                  i % 2 === 0
                    ? 'sm:left-8 lg:left-4 2xl:left-10'
                    : 'sm:right-8 lg:right-4 2xl:right-10',
                )}
              >
                <svg
                  className="absolute inset-y-0 right-1/4 top-0 z-20 h-full w-1/4 text-dark-700"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                  fill="currentcolor"
                >
                  <polygon points="0,0 100,0 0,100" />
                </svg>
                <div className="absolute inset-y-0 left-1/2 z-10 h-full w-1/2 rounded-r-3xl bg-dark-900" />
              </div>
              <Image
                src={feature.image.src}
                alt={feature.image.alt}
                className="z-30 h-full w-auto rounded-3xl object-cover shadow-xl"
                sizes="(min-width: 1280px) 38.5rem, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 640px) 32rem, calc(100vw - 2rem)"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
