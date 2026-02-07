import { LINKS } from '@/config/links'
import { SecondaryButton } from './ui/buttons/SecondaryButton'
import { Chip } from './ui/Chip'

export const TicketsHero = () => {
  return (
    <section className="px-4 pt-12 sm:px-6 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="mx-auto w-full max-w-4xl text-center lg:max-w-5xl">
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:mt-5 md:text-6xl">
            Reserve your spot for UNLEASHED
          </h1>

          <p className="text-void-200 mx-auto mt-4 max-w-lg text-xl md:mt-5 md:max-w-3xl">
            Pricing, what’s included, and everything you’ll want to know before
            buying a ticket and becoming UNLEASHED.
          </p>

          <SecondaryButton
            className="mt-5 inline-flex justify-center"
            href={LINKS.tickets}
          >
            I want a ticket
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
