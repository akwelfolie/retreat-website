import Image from 'next/image'
import { PrimaryButton } from '@/components/buttons/PrimaryButton'
import { SecondaryButton } from '@/components/buttons/SecondaryButton'
import heroImage from '/public/stock/hero-home.jpg'

export const HomeHero = () => {
  return (
    <section className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-12 pt-2 sm:px-6 md:pb-16 lg:px-8">
      {/* Hero card */}
      <div className="relative rounded-3xl bg-dark-700 shadow-xl sm:overflow-hidden">
        {/* Right background diagonal */}
        <svg
          className="absolute inset-y-0 right-1/4 z-20 h-full w-1/4 text-dark-700"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 100,0 0,100" />
        </svg>
        <div className="absolute inset-y-0 left-1/2 z-10 h-full w-1/2 rounded-r-3xl bg-dark-800" />
        {/* Hero card content */}
        <div className="relative mx-auto max-w-(--breakpoint-xl) px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:auto-rows-max lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-12">
          {/* Card content text*/}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <p className="z-30 inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-dark-800 to-dark-900 px-6 py-2 text-sm font-medium tracking-wide text-white">
              Welcome
            </p>
            <div className="z-30 mx-auto mt-6 w-full max-w-lg text-center md:max-w-2xl lg:max-w-none lg:text-left">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                Let’s make your product a success
              </h1>
              <p className="mt-6 text-xl text-dark-300">
                Crator is your partner in digital innovation. We fuse strategic
                thinking with standout design and development to deliver
                uniquely tailored solutions.
              </p>
            </div>
            {/* Hero buttons */}
            <div className="z-30 mt-10 sm:flex sm:justify-center lg:justify-start">
              <PrimaryButton href="/contact">Let's get started</PrimaryButton>
              <SecondaryButton
                className="ml-0 mt-5 sm:ml-4 sm:mt-0"
                href="/services"
              >
                Learn more
              </SecondaryButton>
            </div>
          </div>
          {/* Hero image */}
          <div className="relative mx-auto mt-12 flex w-full max-w-xl items-center justify-center sm:mt-16 lg:mt-0 lg:max-w-none">
            <Image
              src={heroImage}
              alt="Crator studio office"
              priority
              className="z-30 h-full w-auto rounded-3xl object-cover shadow-md"
              sizes="(min-width: 1280px) 36.5rem, (min-width: 1024px) calc(50vw - 5rem), (min-width: 640px) 36rem, calc(100vw - 4rem)"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
