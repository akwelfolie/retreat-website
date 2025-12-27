import Image from 'next/image'
import clsx from 'clsx'
import squareImage1 from '/public/stock/UL-hero-home.png' 
import { Chip } from './ui/Chip'

type LocationTeaserProps = {
  flip?: boolean // optional: put image on left if true
}

export const LocationTeaser = ({ flip = false }: LocationTeaserProps) => {
  const feature = {
    tagline: 'Location',
    headline: 'Hotel L7 by LOTTE — Chicago, IL',
    text: `A boutique hotel just steps from the Chicago Riverwalk, the location combines modern flair and luxe amenities with local, creative spirit. There will be areas for rest and relaxation within the retreat space, and hotel rooms available for attendees who choose to stay overnight available at a discounted rate.`,
    image: {
      src: squareImage1,
      alt: 'Hotel preview',
    },
  }

  return (
    <section className="px-4 py-12 sm:px-6 sm:pb-24 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div
          className={clsx(
            'relative lg:grid lg:auto-rows-max lg:grid-cols-2 lg:gap-x-12',
          )}
        >
          {/* Text */}
          <div
            className={clsx(
              'flex flex-col items-center justify-center lg:items-start',
              flip && 'lg:order-2',
            )}
          >
            <div className="w-full max-w-lg text-left md:max-w-2xl md:text-center lg:text-left">
              <Chip>
                {feature.tagline}
              </Chip> 
              <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl lg:mt-6">
                {feature.headline}
              </h2>
              <p className="mt-4 text-lg text-void-200 lg:mt-6">
                {feature.text}
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className={clsx(
              'relative mx-auto mt-10 flex w-full max-w-lg items-center justify-center lg:mt-0 lg:max-w-none',
              flip && 'lg:order-1',
            )}
          >
            {/* Background card */}
            <div
              className={clsx(
                'absolute size-full rounded-3xl bg-void-700 sm:top-8 lg:top-4 2xl:top-10',
                flip
                  ? 'sm:right-8 lg:right-4 2xl:right-10'
                  : 'sm:left-8 lg:left-4 2xl:left-10',
              )}
            >
              <svg
                className="absolute inset-y-0 right-1/4 top-0 z-20 h-full w-1/4 text-void-700"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                fill="currentcolor"
              >
                <polygon points="0,0 100,0 0,100" />
              </svg>
              <div className="absolute inset-y-0 left-1/2 z-10 h-full w-1/2 rounded-r-3xl bg-void-800" />
            </div>

            <div className="relative aspect-3/2 w-full">
              <Image
                src={feature.image.src}
                alt={feature.image.alt}
                fill
                className="absolute inset-0 z-30 size-full ring-1 ring-void-300/20 rounded-3xl object-cover shadow-xl"
                sizes="(min-width: 1280px) 38.5rem, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 640px) 32rem, calc(100vw - 2rem)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
