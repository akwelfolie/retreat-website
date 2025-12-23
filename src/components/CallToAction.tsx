import { PrimaryButton } from '@/components/buttons/PrimaryButton'

export const CallToAction = () => {
  return (
    <section className="mx-auto max-w-(--breakpoint-2xl) px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* CTA card */}
      <div className="relative rounded-3xl bg-void-500 border border-void-500 hover:border-gold-600/30 py-16 lg:py-20 shadow-xl sm:overflow-hidden">
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
              February 21–22, 2026 · Hotel L7 by LOTTE — Chicago, IL
            </p>
            <h5 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Join us for Unleashed
            </h5>
            <p className="mt-4 text-xl text-void-200">
              Two days of connection, embodiment, and exploration — designed to
              leave a lasting impact long after the weekend ends.
            </p>
          </div>

          <div className="mt-10 flex max-w-lg justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
            <PrimaryButton href="/tickets">
              Buy your ticket
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
