import clsx from 'clsx'
import { Chip } from './ui/Chip'

type LocationTeaserProps = {
  flip?: boolean // optional: put image on left if true
}

export const LocationTeaser = ({ flip = false }: LocationTeaserProps) => {
  const feature = {
    tagline: 'Location',
    headline: 'Hotel L7 by LOTTE — Chicago, IL',
    text: `A boutique hotel just steps from the Chicago Riverwalk, the location combines modern flair and luxe amenities with local, creative spirit. There will be areas for rest and relaxation within the retreat space, and hotel rooms available for attendees who choose to stay overnight available at a discounted rate.`,
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
              'relative mx-auto mt-10 w-full max-w-lg lg:mt-0 lg:max-w-none',
              flip && 'lg:order-1',
            )}
          >
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-void-300/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19926.2305808777!2d-87.64205682198806!3d41.88714970212759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d8ecd8e0915%3A0x8076598c2b7bc59a!2sL7%20CHICAGO%20BY%20LOTTE!5e0!3m2!1sen!2sus!4v1767194490908!5m2!1sen!2sus"
                className="h-[450px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
