import Image from 'next/image'
import clsx from 'clsx'
import {
  IconShieldCheck,
  IconBulb,
  IconUser,
  IconPhone,
} from '@tabler/icons-react'
import valuesImage from '/public/stock/values.jpg'
import handbookImage from '/public/stock/handbook.jpg'

const features = [
  {
    tagline: 'Our vision',
    headline: 'We believe in the power of creative ideas',
    text: 'In the heart of our company lies a strong belief in the transformative power of ideas. Leveraging innovation and originality, we aim to deliver results that exceed expectations.',
    image: {
      src: valuesImage,
      alt: 'Woman point at computer screen',
    },
    items: [
      {
        label: 'Full transparency',
        text: 'Trust is key; we uphold honesty. Every step is communicated for clarity.',
        icon: IconShieldCheck,
      },
      {
        label: 'Product Mindset',
        text: 'Our focus: user-centric, engaging, and valuable products with purpose.',
        icon: IconBulb,
      },
    ],
  },
  {
    tagline: 'Our handbook',
    headline: 'How we work and collaborate with our clients',
    text: 'Our work philosophy revolves around active collaboration and open dialogue. We engage with clients every step of the way, ensuring their vision is at the heart of our designs and strategies.',
    image: {
      src: handbookImage,
      alt: 'Office workers looking at post-its on wall',
    },
    items: [
      {
        label: 'User focused',
        text: 'User experience is paramount. We build for impact, intuitiveness, and joy.',
        icon: IconUser,
      },
      {
        label: 'Clear communication',
        text: "Clarity guides our interactions. We ensure you're informed and involved.",
        icon: IconPhone,
      },
    ],
  },
]

export const FeaturesAlternatingWithIcons = () => {
  return (
    <section className="bg-dark-800 px-4 pb-10 sm:px-6 md:pb-16 md:pt-12 lg:px-8">
      {/* Features container */}
      <div className="max-w-(--breakpoint-xl) mx-auto w-full">
        {features.map((feature, i) => (
          <div
            key={`alternating-feature-with-icons-${i}`}
            className={clsx(
              'mx-auto max-w-xl md:max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24',
              i % 2 === 1 && 'mt-24 lg:mt-32',
            )}
          >
            {/* Feature text with icons */}
            <div className={clsx(i % 2 === 1 && 'lg:order-2', 'col-span-2')}>
              <div className="text-center lg:text-left">
                <p className="bg-linear-to-r from-dark-600 to-dark-700 inline-flex items-center justify-center rounded-r-full rounded-tl-full px-6 py-2 text-sm font-medium tracking-wide text-white">
                  {feature.tagline}
                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:mt-6">
                  {feature.headline}
                </h2>
                <p className="text-dark-300 mt-4 text-xl lg:mt-6">
                  {feature.text}
                </p>
                <div className="mx-auto mt-8 flex max-w-xs flex-col space-y-8 sm:mx-0 sm:mt-10 sm:max-w-none sm:flex-row sm:space-x-4 sm:space-y-0 lg:space-x-6">
                  {feature.items.slice(0, 2).map((item, j) => (
                    <div
                      key={`feature-list-with-icon-${j}`}
                      className="flex flex-col items-center lg:items-start"
                    >
                      <div className="flex flex-col items-center sm:flex-row">
                        <div className="bg-linear-to-r from-dark-600 to-dark-700 flex h-12 w-12 items-center justify-center rounded-2xl">
                          <item.icon
                            className="text-dark-300 h-6 w-6"
                            stroke={1.5}
                          />
                        </div>
                        <div className="mt-3 text-xl font-semibold text-white sm:ml-3 sm:mt-0">
                          {item.label}
                        </div>
                      </div>
                      <p className="text-dark-300 mt-1 text-lg leading-relaxed sm:mt-3">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Feature image */}
            <div className="col-span-1 mt-10 flex items-center lg:order-1 lg:mt-0">
              <div className="aspect-2/3 relative w-full rounded-3xl text-center shadow-xl">
                <Image
                  className="absolute inset-0 size-full rounded-3xl object-cover object-center align-middle"
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  sizes="(min-width: 1280px) 23.5rem, (min-width: 1024px) 33vw, (min-width: 768px) 42rem, (min-width: 640px) 36rem, calc(100vw - 2rem)"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
