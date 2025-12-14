import Image from 'next/image'
import teamImage from '/public/stock/team/team.jpg'

export const AboutHero = () => {
  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 md:pb-12 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        {/* Hero text */}
        <div className="mx-auto w-full max-w-4xl text-center lg:max-w-5xl">
          <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-dark-600 to-dark-700 px-6 py-2 text-sm font-medium tracking-wide text-white">
            About us
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:mt-5 md:text-6xl">
            A small creative team excited to create beautiful things
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-xl text-dark-300 md:mt-5 md:max-w-3xl">
            Born out of a shared passion for design and innovation, we're a
            dedicated team committed to turning visions into impactful digital
            realities.
          </p>
        </div>
        {/* Hero image */}
        <div className="mx-auto mt-12 max-w-(--breakpoint-lg) rounded-3xl shadow-xl">
          <Image
            className="rounded-3xl"
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
