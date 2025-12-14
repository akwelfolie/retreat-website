import {
  IconBox,
  IconCircles,
  IconCircleSquare,
  IconDiamond,
  IconStack,
  IconTriangle,
} from '@tabler/icons-react'
import { SecondaryButton } from '@/components/buttons/SecondaryButton'

const services = [
  {
    service: 'UI/UX Design',
    text: 'Transforming ideas into visually compelling and functional designs that users love.',
    icon: IconBox,
  },
  {
    service: 'Web Development',
    text: 'Crafting robust and responsive websites that seamlessly operate across devices.',
    icon: IconCircles,
  },
  {
    service: 'Mobile App Development',
    text: 'Creating intuitive, feature-rich mobile apps that engage and retain users.',
    icon: IconCircleSquare,
  },
  {
    service: 'Digital Marketing',
    text: 'Driving brand awareness and growth through tailored digital marketing strategies.',
    icon: IconDiamond,
  },
  {
    service: 'Branding Services',
    text: 'Building strong, cohesive brand identities that resonate with target audiences.',
    icon: IconStack,
  },
  {
    service: 'SEO Optimization',
    text: 'Enhancing your online visibility and ranking through proven SEO strategies.',
    icon: IconTriangle,
  },
]

export const ServiceList = () => {
  return (
    <section className="bg-dark-900 px-4 pb-10 pt-10 sm:px-6 md:pb-12 md:pt-12 lg:px-8">
      <div className="mx-auto flex w-full max-w-(--breakpoint-xl) flex-wrap items-center">
        <div className="flex w-full flex-wrap">
          {/* Section header with button */}
          <div className="relative flex w-full lg:w-1/3">
            <div className="relative flex w-full">
              <div className="relative flex w-full flex-wrap lg:flex-col">
                <div className="relative w-full">
                  <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-dark-600 to-dark-700 px-6 py-2 text-sm font-medium tracking-wide text-white">
                    What we offer
                  </p>
                  <h2 className="relative mt-6 w-full text-left text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                    We've Got You <br /> Covered
                  </h2>
                </div>
                <div className="mt-8 flex text-left lg:mt-10">
                  <SecondaryButton
                    size="sm"
                    gradient="from-dark-600 to-dark-700"
                    href="/work"
                  >
                    View work
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
          {/* 2x6 features grid */}
          <div className="relative mt-16 flex w-full lg:w-2/3 lg:pl-8">
            <div className="grid w-full gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
              {services.map((item, index) => (
                <div
                  key={`service-${index}`}
                  className="relative flex w-full flex-col"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-r from-dark-600 to-dark-700 shadow-xl">
                    <item.icon className="h-8 w-8 text-dark-300" stroke={1.5} />
                  </span>
                  <h4 className="mt-4 text-2xl font-semibold text-white">
                    {item.service}
                  </h4>
                  <p className="mt-1 max-w-sm text-lg leading-relaxed text-dark-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
