import { Chip } from '@/components/ui/Chip'
import { IconTicket, IconSparkles, IconStar } from '@tabler/icons-react'

const pricing = [
  {
    title: 'Early Bird',
    price: '$425',
    icon: IconSparkles,
  },
  {
    title: 'Second Release',
    price: '$475',
    icon: IconStar,
  },
  {
    title: 'Standard',
    price: '$550',
    icon: IconTicket,
  },
]

export const Pricing = () => {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 md:pb-16 md:pt-12 lg:px-8 mt-10">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        {/* Section header */}
        <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <Chip>Pricing</Chip>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Choose your ticket
          </h2>

          <p className="mt-6 text-xl text-void-200">
            Ticket prices increase as the event approaches. Secure your spot
            early.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-y-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-12">
          {pricing.map((item, index) => (
            <div
              key={`pricing-${index}`}
              className="mx-auto w-full max-w-lg rounded-3xl bg-void-500 px-6 py-12 text-center shadow-xl ring-1 ring-void-300/20"
            >
              {/* Icon */}
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-r from-void-400 to-void-500 shadow-xl">
                <item.icon className="h-8 w-8 text-gold-600" stroke={1.5} />
              </span>

              <div className="mt-6 text-2xl font-semibold text-white">
                {item.title}
              </div>

              <div className="mt-3 text-4xl font-extrabold text-white">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
