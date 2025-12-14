import { PrimaryButton } from '@/components/buttons/PrimaryButton'

export const CallToAction = () => {
  return (
    <section className="mx-auto max-w-(--breakpoint-xl) px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* CTA card */}
      <div className="relative rounded-3xl bg-dark-700 py-16 lg:py-20">
        {/* Right background diagonal */}
        <svg
          className="absolute inset-y-0 right-1/4 top-0 z-20 h-full w-1/4 text-dark-700"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 100,0 0,100" />
        </svg>
        <div className="absolute inset-y-0 left-1/2 z-10 h-full w-1/2 rounded-r-3xl bg-dark-800" />
        {/* CTA content */}
        <div className="relative z-30 mx-auto flex flex-col items-center justify-center px-4 text-center sm:px-16 lg:flex-row lg:text-left">
          <div className="max-w-lg text-2xl font-bold sm:text-4xl lg:w-1/2">
            <h5 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let's make something great together.
            </h5>
          </div>
          <div className="mt-10 flex max-w-lg justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
            <PrimaryButton href="#0">Let's connect</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
