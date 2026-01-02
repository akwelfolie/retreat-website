import { LINKS } from '@/config/links'
import { SecondaryButton } from './ui/buttons/SecondaryButton'
import { Chip } from './ui/Chip'

export const TicketsHero = () => {
  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 md:pb-12 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="mx-auto w-full max-w-4xl text-center lg:max-w-5xl">
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:mt-5 md:text-6xl">
            Reserve your spot for Unleashed
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-xl text-void-200 md:mt-5 md:max-w-3xl">
            Pricing, what’s included, and everything you’ll want to know before
            heading to Eventbrite.
          </p>

          <SecondaryButton
            className="inline-flex mt-5 justify-center"
            href={LINKS.tickets}
            >
            Go to Evenbrite
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
