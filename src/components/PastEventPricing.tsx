import { Chip } from '@/components/ui/Chip'
import type { PricingTier } from '@/content/retreats/types'

type Props = {
  tiers: PricingTier[]
}

export const PastEventPricing = ({ tiers }: Props) => {
  return (
    <section className="mt-10 px-4 pt-10 pb-12 sm:px-6 md:pt-12 md:pb-16 lg:px-8">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <Chip>Pricing</Chip>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            What attendees paid
          </h2>

          <p className="text-void-200 mt-6 text-xl">
            UNLEASHED was held in an intentionally capped, consent-centered container. All sessions
            were optional — attendees chose their own level of participation throughout the day.
          </p>
        </div>

        <div className="mt-12 grid gap-y-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-6 2xl:gap-x-12">
          {tiers.map((item, index) => (
            <div
              key={`pricing-${index}`}
              className="bg-void-500 ring-void-300/20 mx-auto w-full max-w-lg rounded-3xl px-6 py-12 text-center shadow-xl ring-1"
            >
              <span className="from-void-400 to-void-500 mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-r shadow-xl">
                <item.icon className="text-gold-600 h-8 w-8" stroke={1.5} />
              </span>

              <div className="mt-6 text-2xl font-semibold text-white">{item.title}</div>
              <div className="mt-3 text-4xl font-extrabold text-white">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
