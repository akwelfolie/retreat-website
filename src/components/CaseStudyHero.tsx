import Image from 'next/image'
import { IconPuzzle, IconStack, IconBulb } from '@tabler/icons-react'
import type { CaseStudy } from '@/lib/caseStudies'
import type { IconProps } from '@tabler/icons-react'

export const CaseStudyHero = ({ data }: { data: CaseStudy }) => {
  const icons: Record<string, React.ComponentType<IconProps>> = {
    puzzle: IconPuzzle,
    stack: IconStack,
    bulb: IconBulb,
  }

  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        {/* Hero text */}
        <div className="mx-auto w-full max-w-3xl text-center lg:max-w-5xl">
          <p className="bg-linear-to-r from-dark-600 to-dark-700 inline-flex items-center justify-center rounded-r-full rounded-tl-full px-6 py-2 text-sm font-medium tracking-wide text-white">
            {data.hero.tagline}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:mt-5 md:text-6xl">
            {data.hero.headline}
          </h1>
        </div>
        {/* Features container */}
        <div className="mx-auto mt-12 grid w-full max-w-lg gap-10 lg:mt-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-12">
          {data.hero.keyPoints.slice(0, 3).map((item, index) => {
            const Icon = icons[item.icon]

            return (
              <div key={`case-study-key-point-${index}`} className="w-full">
                <span className="bg-linear-to-r from-dark-600 to-dark-700 mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-xl">
                  <Icon
                    name={item.icon}
                    className="text-dark-300 h-9 w-9"
                    stroke={1.5}
                  />
                </span>
                <h3 className="mt-5 text-center text-2xl font-semibold text-white">
                  {item.label}
                </h3>
                <p className="text-dark-300 mt-2 text-center text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
        {/* Hero image */}
        <div className="aspect-2/1 relative mx-auto mt-12 rounded-3xl shadow-xl lg:mt-16">
          <Image
            className="absolute inset-0 size-full rounded-3xl object-cover object-center align-middle"
            fill
            src={data.image}
            alt={data.name}
            sizes="(min-width: 1280px) 80rem, (min-width: 1024px) calc(100vw - 4rem), calc(100vw - 3rem), calc(100vw - 2rem)"
          />
        </div>
      </div>
    </section>
  )
}
