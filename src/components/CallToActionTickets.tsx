import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { LINKS } from '@/config/links'

export const CallToActionTickets = () => {
  return (
    <section className="mx-auto max-w-(--breakpoint-2xl) px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* CTA card */}
      <div className="relative rounded-3xl bg-void-500 border border-gold-600/30 py-16 shadow-xl sm:overflow-hidden lg:py-20">
        {/* Right background diagonal */}
        <svg
          className="absolute inset-y-0 right-1/4 z-20 h-full w-1/4 text-void-500"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 100,0 0,100" />
        </svg>
        <div className="absolute inset-y-0 left-1/2 z-10 h-full w-1/2 rounded-r-3xl bg-void-700" />

        {/* CTA content */}
        <div className="relative z-30 mx-auto flex flex-col items-center justify-center px-4 text-center sm:px-16 lg:flex-row lg:text-left">
          <div className="max-w-lg lg:w-1/2">
            <p className="mb-3 text-base font-medium tracking-wide text-void-200">
              Tickets available now · Limited capacity
            </p>
            <h5 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Tickets are live. Become Unleashed.
            </h5>
            <p className="mt-4 text-xl text-void-200">
              Secure your spot for Unleashed — an immersive retreat
              designed for connection, embodiment, and self-expression.
            </p>
          </div>

          <div className="mt-10 flex max-w-lg justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
            <PrimaryButton
              href={LINKS.tickets}
            >
              I want a ticket
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}