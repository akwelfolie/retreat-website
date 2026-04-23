import Image from 'next/image'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton'
import imgBecome from '/public/stock/become-unleashed.png'

export const HomeHero = () => {
  return (
    <section className="mx-auto max-w-(--breakpoint-2xl) px-4 pt-2 pb-12 sm:px-6 md:pb-6 lg:px-8">
      {/* Hero card */}
      <div className="border-gold-600/30 bg-void-500 relative rounded-3xl border shadow-xl sm:overflow-hidden">
        {/* Right background diagonal */}
        <svg
          className="text-void-500 absolute inset-y-0 right-1/4 z-20 h-full w-1/4"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <polygon points="0,0 100,0 0,100" />
        </svg>
        <div className="bg-void-700 absolute inset-y-0 left-1/2 z-10 h-full w-1/2 rounded-r-3xl" />

        {/* Hero card content */}
        <div className="relative mx-auto max-w-(--breakpoint-xl) px-4 py-14 sm:px-6 sm:py-18 lg:grid lg:auto-rows-max lg:grid-cols-2 lg:gap-x-10 lg:px-8 lg:py-24 xl:gap-x-12">
          {/* Text */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <div className="z-30 mx-auto w-full max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                UNLEASHED
              </h1>

              <div className="text-void-200 mt-6 space-y-4 text-left text-lg sm:text-xl lg:text-left">
                <p className="text-white/95">
                  <span className="font-semibold tracking-wide text-white">UNLEASHED</span> is a
                  movement of immersive experiences for women and women-aligned people ready to give
                  themselves permission to:
                </p>

                <ul className="mt-3 list-disc space-y-2 pl-6 text-white/95">
                  <li>Reconnect with their bodies</li>
                  <li>Explore desire and self-expression</li>
                  <li>Release what&apos;s been held back</li>
                </ul>

                <p className="mt-3 text-white/90">All within a safe, intentional container.</p>

                <p>
                  Guided by a curated lineup of women facilitators trained in psychology, somatics
                  and movement, coaching, and trauma-informed care.
                </p>

                <p>Move, connect, and explore together.</p>

                <p>Choose the depth and path that&apos;s calling you.</p>

                <p className="text-void-100 font-semibold">This is not passive listening.</p>

                <p className="font-semibold text-white">This is a lived, embodied experience.</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="z-30 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <PrimaryButton href="/next-up">Tickets &amp; Detailed Schedule</PrimaryButton>
              <SecondaryButton href="/about">Presenters</SecondaryButton>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto mt-12 flex w-full max-w-xl items-center justify-center sm:mt-16 lg:mt-0 lg:max-w-none">
            <Image
              src={imgBecome}
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
