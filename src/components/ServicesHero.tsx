import Image from 'next/image'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import image1 from '/public/stock/hero-services-01.jpg'
import image2 from '/public/stock/hero-services-02.jpg'

export const ServicesHero = () => {
  return (
    <section className="bg-void-900 px-4 pb-10 pt-12 sm:px-6 md:pb-20 md:pt-16 lg:px-8 lg:pb-64">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        {/* Hero header */}
        <div>
          <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-void-600 to-void-700 px-6 py-2 text-sm font-medium tracking-wide text-white">
            Our services
          </p>
          <h1 className="mt-6 text-left text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            We Create meaningful digital solutions that level up your business
          </h1>
        </div>
        {/* Hero content */}
        <div className="relative mt-6 md:mt-8 lg:mt-12 xl:mt-16">
          <div className="z-10 grid gap-x-8 lg:absolute lg:grid-cols-2">
            <div>
              <p className="max-w-lg text-xl text-void-300 sm:max-w-3xl lg:mx-auto">
                [Placeholder text — this section will describe the retreat experience, workshops, and themes.]

              </p>
              <div className="mt-8 sm:flex sm:justify-start">
                <PrimaryButton
                  className="h-14 hover:bg-void-700"
                  href="/contact"
                >
                  Let's get started
                </PrimaryButton>
              </div>
            </div>
            {/* Hero images */}
            <div className="mx-auto mt-10 grid sm:mx-0 sm:grid-cols-2 sm:gap-x-4 md:mt-12 lg:mt-0">
              <Image
                src={image1}
                alt="Service 01"
                className="w-full rounded-3xl object-cover object-center shadow-xl lg:h-96"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 640px) calc(50vw - 2rem), calc(100vw - 2rem)"
              />
              <Image
                src={image2}
                alt="Service 02"
                className="mt-6 hidden w-full rounded-3xl object-cover object-center shadow-xl sm:mt-0 sm:block lg:h-96"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 640px) calc(50vw - 2rem), calc(100vw - 2rem)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
