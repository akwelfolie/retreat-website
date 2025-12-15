import { HomeHero } from '@/components/HomeHero'
import { LogoCloud } from '@/components/LogoCloud'
import { ServicesOverview } from '@/components/ServicesOverview'
import { Process } from '@/components/Process'
import { SocialProof } from '@/components/SocialProof'
import { CallToAction } from '@/components/CallToAction'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <LogoCloud />

      {/* Diagonal section separator */}
      <div className="relative h-16 w-full md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-dark-800"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 0,100 100,100" />
        </svg>
      </div>

      <ServicesOverview />

      {/* Diagonal section separator */}
      <div className="relative h-16 w-full bg-dark-800 md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-dark-900"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>

      <section className="bg-linear-to-b from-dark-900 to-dark-800 pb-12 pt-10 md:pb-16 md:pt-12">
        <Process />
      </section>

      {/* Featured work wrapper */}
      <section className="bg-dark-800 px-4 pb-10 pt-12 sm:px-6 md:pb-12 md:pt-16 lg:px-8">
        <div className="mx-auto w-full max-w-(--breakpoint-xl)">
          {/* Featured work section header */}
          <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
            <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-dark-600 to-dark-700 px-6 py-2 text-sm font-medium tracking-wide text-white">
              Our work
            </p>
            <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Check out some of our recent & current work
            </h2>
          </div>

        </div>
      </section>

      {/* Diagonal section separator */}
      <div className="relative h-16 w-full bg-dark-800 md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-dark-900"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>

      <SocialProof />
      <CallToAction />
    </>
  )
}
