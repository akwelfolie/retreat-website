import Image from 'next/image'
import clsx from 'clsx'
import { IconArtboard, IconCode, IconTool } from '@tabler/icons-react'
import portraitImage from '/public/stock/what-we-do-image-01.jpg'
import squareImage1 from '/public/stock/what-we-do-image-02.jpg'
import squareImage2 from '/public/stock/what-we-do-image-03.jpg'

const services = [
  {
    label: 'Web Design',
    description:
      'We craft visually stunning, unforgettable experiences with responsive design at the forefront.',
    icon: IconArtboard,
  },
  {
    label: 'Web Development',
    description:
      'We excell at converting eye-catching designs into high-functioning, user-friendly web applications.',
    icon: IconCode,
  },
  {
    label: 'Maintenance & Optimization',
    description:
      'We ensure your site remains an effective, optimized tool for your business needs, goals and growth.',
    icon: IconTool,
  },
]

export const ServicesOverview = () => {
  return (
    <section className="bg-dark-800 px-4 py-10 sm:px-6 md:py-12 lg:px-8">
      {/* Section text */}
      <div className="mx-auto max-w-xl text-center md:max-w-2xl lg:max-w-(--breakpoint-xl) lg:text-left">
        <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-dark-600 to-dark-700 px-6 py-2 text-sm font-medium tracking-wide text-white">
          What we do
        </p>
        <div className="mt-6 grid w-full gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              We create digital products that help you get ahead
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xl text-dark-300">
              From fresh ideas to fully-realized designs, we cover every aspect
              of your digital presence.
            </p>
          </div>
        </div>
      </div>
      {/* Section content */}
      <div className="mx-auto mt-12 grid w-full justify-center gap-12 lg:mt-16 lg:max-w-(--breakpoint-xl) lg:grid-cols-2 lg:justify-start lg:gap-8 xl:max-w-(--breakpoint-xl)">
        {/* Features list */}
        <div>
          {/* Item */}
          {services.slice(0, 3).map((service, index) => (
            <div
              key={`service-${index}`}
              className={clsx(
                'w-full',
                index === 1 &&
                  'mt-8 lg:mt-5 xl:mt-8 xl:pr-18 2xl:mt-10 2xl:pr-28',
                index === 2 && 'mt-8 lg:mt-5 xl:mt-8 2xl:mt-10',
              )}
            >
              <div className="mx-auto max-w-lg lg:mr-auto xl:mx-auto">
                <div className="relative flex w-full rounded-3xl bg-dark-700 px-8 py-6 shadow-xl sm:px-10">
                  <div className="text-center sm:flex sm:text-left">
                    <div className="w-full sm:w-1/5">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-dark-800 to-dark-900 sm:mx-0">
                        <service.icon
                          className="h-6 w-6 text-dark-300"
                          stroke={1.5}
                        />
                      </div>
                    </div>
                    <div className="mt-3 w-full sm:mt-0">
                      <h5 className="text-lg font-semibold text-white">
                        {service.label}
                      </h5>
                      <p className="mt-1 text-base text-dark-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Image collage */}
        <div className="flex max-w-(--breakpoint-md) items-center justify-center lg:max-w-full">
          <div className="grid h-full w-full grid-flow-col grid-rows-2 gap-4">
            <div className="relative row-span-2 rounded-3xl shadow-xl">
              <Image
                src={portraitImage}
                alt="Office work"
                className="h-full w-full rounded-3xl object-cover object-right"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
              />
            </div>
            <div className="relative rounded-3xl shadow-xl">
              <Image
                src={squareImage1}
                alt="More office work"
                className="h-full w-full rounded-3xl object-cover object-center"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
              />
            </div>
            <div className="relative rounded-3xl shadow-xl">
              <Image
                src={squareImage2}
                alt="Group brainstorming"
                className="h-full w-full rounded-3xl object-cover object-center"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
