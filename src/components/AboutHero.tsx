import Image from 'next/image'
import teamImage from '/public/stock/UL-hero-home.png'
import { Chip } from './ui/Chip'

export const AboutHero = () => {
  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 md:pb-12 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        {/* Hero text */}
        <div className="mx-auto w-full max-w-4xl text-center lg:max-w-5xl">
          <Chip>            
            Our story
          </Chip>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:mt-5 md:text-6xl">
            Unleashed is guided by lived experience, not theory
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-xl text-void-200 md:mt-5 md:max-w-3xl">
            Unleashed grew out of years of work in embodiment, sexuality, education, 
            and community building — and a shared belief that spaces like this 
            should be intentional, safe, and deeply human.
          </p>
        </div>
        {/* Hero image */}
        <div className="mx-auto mt-12 max-w-(--breakpoint-lg) text-center rounded-3xl shadow-xl">
          <Image
            className="block mx-auto rounded-3xl ring-1 ring-void-300/20 "
            src={teamImage}
            alt="Agency team"
            sizes="(min-width: 1024px) 64rem, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
