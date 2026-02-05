import Image from 'next/image'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton'
import heroImage from '/public/stock/spiritual-church-2.png'

export const HomeHero = () => {
  return (
    <section className="mx-auto max-w-(--breakpoint-2xl) px-4 pt-2 pb-12 sm:px-6 md:pb-16 lg:px-8">
      {/* Hero card */}
      <div className="border-gold-600/30 bg-void-500 relative rounded-3xl border shadow-xl sm:overflow-hidden">
        {/* Right background diagonal */}
        <svg
          className="text-void-500 absolute inset-y-0 right-1/4 z-20 h-full w-1/4"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 100,0 0,100" />
        </svg>
        <div className="bg-void-700 absolute inset-y-0 left-1/2 z-10 h-full w-1/2 rounded-r-3xl" />

        {/* Hero card content */}
        <div className="relative mx-auto max-w-(--breakpoint-xl) px-4 py-14 sm:px-6 sm:py-18 lg:grid lg:auto-rows-max lg:grid-cols-2 lg:gap-x-10 lg:px-8 lg:py-24 xl:gap-x-12">
          {/* Text */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <p className="z-30 inline-flex items-center justify-center rounded-tl-full rounded-r-full bg-linear-to-r from-blue-700 to-pink-800 px-6 py-2 text-base font-medium tracking-wide text-white/90">
              February 21, 2026 · Chicago, IL
            </p>

            <div className="z-30 mx-auto mt-6 w-full max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                Unleashed
              </h1>

              <p className="mt-4 text-xl text-white">
                A women’s empowerment and sensual awakening retreat.
              </p>

              <p className="text-void-200 mt-6 text-xl">
                A holistic experience grounded in radical reflection,
                expression, and connection for all woman-aligned individuals.
              </p>

              {/* NEW tighter section */}
              <div className="text-void-200 mt-6 space-y-4 text-left text-lg sm:text-xl lg:text-left">
                <p className="text-white/95">
                  <span className="font-semibold tracking-wide text-white">
                    UNLEASHED
                  </span>{' '}
                  is not about sexuality.
                </p>

                <p className="text-void-100">
                  It’s about{' '}
                  <span className="font-semibold text-white">permission</span>.
                </p>

                <p className="text-void-200">
                  Permission to want{' '}
                  <span className="font-semibold text-white">more</span>. Want{' '}
                  <span className="font-semibold text-white">differently</span>{' '}
                  Without apology. Without having it all figured out.
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="z-30 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <PrimaryButton href="/details">
                Tickets &amp; Details
              </PrimaryButton>
              <SecondaryButton href="/about">Learn More</SecondaryButton>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto mt-12 flex w-full max-w-xl items-center justify-center sm:mt-16 lg:mt-0 lg:max-w-none">
            <Image
              src={heroImage}
              alt="Unleashed retreat atmosphere"
              priority
              className="ring-void-300/20 z-30 h-full w-auto rounded-3xl object-cover shadow-md ring-1"
              sizes="(min-width: 1280px) 36.5rem, (min-width: 1024px) calc(50vw - 5rem), (min-width: 640px) 36rem, calc(100vw - 4rem)"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
