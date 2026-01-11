import Image from 'next/image'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton'
import heroImage from '/public/stock/spiritual-church-2.png'

export const HomeHero = () => {
  return (
    <section className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-12 pt-2 sm:px-6 md:pb-16 lg:px-8">
      {/* Hero card */}
      <div className="relative rounded-3xl border border-gold-600/30 bg-void-500 shadow-xl sm:overflow-hidden">
        {/* Right background diagonal */}
        <svg
          className="absolute inset-y-0 right-1/4 z-20 h-full w-1/4 text-void-500"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 100,0 0,100" />
        </svg>
        <div className="absolute inset-y-0 left-1/2 z-10 h-full w-1/2 rounded-r-3xl bg-void-700" />

        {/* Hero card content */}
        <div className="relative mx-auto max-w-(--breakpoint-xl) px-4 py-14 sm:px-6 sm:py-18 lg:grid lg:auto-rows-max lg:grid-cols-2 lg:gap-x-10 lg:px-8 lg:py-24 xl:gap-x-12">
          {/* Text */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <p className="z-30 inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-blue-700 to-pink-800 px-6 py-2 text-base font-medium tracking-wide text-white/90">
              February 21, 2026 · Chicago, IL
            </p>

            <div className="z-30 mx-auto mt-6 w-full max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                Unleashed
              </h1>

              <p className="mt-4 text-xl text-white">
                A women’s empowerment and sensual awakening retreat.
              </p>

              <p className="mt-6 text-xl text-void-200">
                A holistic experience promoting radical reflection, expression,
                and connection — for all woman-aligned individuals.
              </p>

              <div className="mt-5 space-y-5 text-left text-lg text-void-200 sm:text-xl lg:text-left">
                <p className="text-white/95">
                  <span className="font-semibold tracking-wide text-white">
                    UNLEASHED
                  </span>{' '}
                  is not about sexuality.
                </p>

                <p className="text-void-100">
                  It is about <span className="font-semibold text-white">permission</span>.
                </p>

                <div>
                  <p className="text-void-100">Permission to:</p>
                  <ul className="mt-3 space-y-2 pl-5">
                    <li className="list-disc">
                      Want <span className="font-semibold text-white">more</span>
                    </li>
                    <li className="list-disc">
                      Want <span className="font-semibold text-white">differently</span>
                    </li>
                    <li className="list-disc">
                      Want <span className="font-semibold text-white">without apology</span>
                    </li>
                    <li className="list-disc">
                      Want without having to already be “brave,” “healed,” or “experienced”
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl bg-void-700/50 p-5 ring-1 ring-white/10">
                  <p className="font-semibold leading-relaxed text-white">
                    Every speaker, every modality, and every workshop at Unleashed serves
                    one shared purpose:
                  </p>
                  <p className="mt-3 font-semibold leading-relaxed text-white">
                    Helping women move from quiet self-censorship into embodied self-trust.
                  </p>
                </div>

                
              </div>
            </div>

            {/* CTA buttons */}
            <div className="z-30 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <PrimaryButton href="/details">Tickets &amp; Details</PrimaryButton>

              <SecondaryButton href="/about">Learn More</SecondaryButton>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto mt-12 flex w-full max-w-xl items-center justify-center sm:mt-16 lg:mt-0 lg:max-w-none">
            <Image
              src={heroImage}
              alt="Unleashed retreat atmosphere"
              priority
              className="z-30 h-full w-auto rounded-3xl object-cover shadow-md ring-1 ring-void-300/20"
              sizes="(min-width: 1280px) 36.5rem, (min-width: 1024px) calc(50vw - 5rem), (min-width: 640px) 36rem, calc(100vw - 4rem)"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
