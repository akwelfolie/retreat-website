import Image from 'next/image'
import clsx from 'clsx'
import testimonialImage1 from '/public/stock/testimonials/testimonial-01.jpg'
import testimonialImage2 from '/public/stock/testimonials/testimonial-02.jpg'
import testimonialImage3 from '/public/stock/testimonials/testimonial-03.jpg'
import testimonialImage4 from '/public/stock/testimonials/testimonial-04.jpg'

const stats = [
  {
    label: 'Happy clients',
    value: 69,
  },
  {
    label: 'Projects completed',
    value: 420,
  },
  {
    label: 'Years in business',
    value: 20,
  },
]

const testimonials = [
  {
    name: 'Katy Perry',
    jobTitle: 'CEO, Spotify',
    testimonial:
    "Testimonials and participant feedback will be added here after the first retreat.",
    image: testimonialImage1,
  },
  {
    name: 'Henry Krasner',
    jobTitle: 'CEO, Twitter',
    testimonial:
    "This section will highlight real experiences from Unleashed attendees.",
    image: testimonialImage2,
  },
  {
    name: 'Bob Foster',
    jobTitle: 'CEO, Amazon',
    testimonial:
      "Authentic voices and reflections will live here.",
    image: testimonialImage3,
  },
  {
    name: 'Ema Roberts',
    jobTitle: 'Founder, Dropbox',
    testimonial:
      "Whatever.",
    image: testimonialImage4,
  },
]

export const SocialProof = () => {
  return (
    <section className="mx-auto max-w-(--breakpoint-xl) px-4 pb-12 pt-10 sm:px-6 md:pb-16 md:pt-12 lg:px-8">
      {/* Section text */}
      <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
        <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-dark-600 to-dark-700 px-6 py-2 text-sm font-medium tracking-wide text-white">
          Testimonials
        </p>
        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          What they say about us
        </h2>
        <p className="mt-6 text-xl text-dark-300">
          Discover first-hand accounts from our clients, who experienced the
          transformative power of our creative solutions.
        </p>
      </div>

      {/* Testimonials grid */}
      <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 md:grid-rows-3 lg:mt-14 lg:gap-8 xl:grid-cols-3 xl:grid-rows-2">
        {/* Stats */}
        <div className="md:row-span-2">
          <div className="h-full w-full rounded-3xl bg-dark-700 px-4 py-12 shadow-xl lg:px-6 lg:py-16">
            <div className="mx-auto max-w-md text-center lg:max-w-full">
              <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Discover why so many companies trust us
              </h3>
              <p className="mt-3 text-lg text-dark-300 lg:mt-4">
                We pride ourselves on delivering exceptional and tangible
                results that matter to you.
              </p>
            </div>
            <div className="mt-8 text-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 md:block">
              {stats.slice(0, 3).map((stat, index) => (
                <div
                  key={`stat-${index}`}
                  className={clsx(
                    'flex flex-col',
                    index > 0 && 'mt-10 sm:mt-0 md:mt-10',
                  )}
                >
                  <p className="order-2 mt-2 text-lg font-medium leading-6 text-dark-400">
                    {stat.label}
                  </p>
                  <p className="order-1 text-5xl font-bold leading-none text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        {testimonials.slice(0, 4).map((item, index) => (
          <div
            key={`testimonial-${index}`}
            className="relative flex w-full overflow-hidden rounded-3xl bg-dark-700 px-4 py-12 shadow-xl sm:px-6 lg:px-8"
          >
            {/* Quotation mark */}
            <svg
              viewBox="0 0 24 24"
              className="absolute inset-0 h-32 w-32 text-dark-800 lg:h-40 lg:w-40"
            >
              <path
                fill="currentColor"
                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
              />
            </svg>
            <blockquote className="z-10 mx-auto">
              <p className="mx-auto max-w-md text-center text-lg font-medium leading-9 text-dark-300">
                {item.testimonial}
              </p>
              <footer className="mt-8">
                <Image
                  className="mx-auto h-12 w-12 rounded-full border-2 border-solid border-dark-800 border-opacity-75 object-cover object-center"
                  width={44}
                  height={44}
                  src={item.image}
                  alt={item.name}
                  sizes="2.75rem"
                />
                <div className="mt-3 text-center">
                  <div className="text-base font-medium leading-6 text-white">
                    {item.name}
                  </div>
                  <div className="text-base font-medium leading-6 text-dark-400">
                    {item.jobTitle}
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  )
}
