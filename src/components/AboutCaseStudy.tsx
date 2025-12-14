import type { CaseStudyAbout } from '@/lib/caseStudies'

export const AboutCaseStudy = ({ data }: { data: CaseStudyAbout }) => {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-md) text-center lg:max-w-(--breakpoint-xl)">
        <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-dark-600 to-dark-700 px-6 py-2 text-sm font-medium tracking-wide text-white">
          {data.tagline}
        </p>
        {/* Project description */}
        <div className="mx-auto mt-6 flex w-full flex-wrap text-center">
          <div className="mx-auto w-full lg:w-4/5">
            <p className="text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-tight">
              {data.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
