import {
  IconHeart,
  IconSparkles,
  IconUsers,
  IconRipple,
} from '@tabler/icons-react'
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton'
import { Chip } from './ui/Chip'
import { LINKS } from '@/config/links'

const experiences = [
  {
    title: 'Two full days',
    text: "Unleashed provides two full days of holistic experiences focused on breaking down limiting beliefs about womanhood and sexuality, exploring and owning your own unique sensuality and desires, and creating supportive and lasting relationships.",
    icon: IconSparkles,
  },
  {
    title: 'Mind, body, and spirit',
    text: 'From keynote speakers addressing topics such working through shame and asking for what you want, to movement based workshops focused on connecting with your body and embodying your authentic sensuality, our programming approaches sexual empowerment holistically- involving mind, body and spirit.',
    icon: IconRipple,
  },
  {
    title: 'Connection & play',
    text: 'The weekend is filled with opportunities to form new connections and rejuvenate existing ones- small group workshops which facilitate vulnerability and sharing, a community dinner to facilitate continued conversation, and a dance party to let loose and play.',
    icon: IconUsers,
  },
  {
    title: 'Lasting impact',
    text: 'Anyone who attends Unleashed should expect its impact to last long after the weekend ends.',
    icon: IconHeart,
  },
]

export const ServiceList = () => {
  return (
    <section className="px-4 pb-10 pt-10 sm:px-6 md:pb-12 md:pt-12 lg:px-8">
      <div className="mx-auto flex w-full max-w-(--breakpoint-xl) flex-wrap items-center">
        <div className="flex w-full flex-wrap">
          {/* Section header with button */}
          <div className="relative flex w-full lg:w-1/3">
            <div className="relative flex w-full">
              <div className="relative flex w-full flex-wrap lg:flex-col">
                <div className="relative w-full">
                  <Chip>
                    What you’ll experience
                  </Chip> 
                  <h2 className="relative mt-6 w-full text-left text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                    A weekend designed to stay with you
                  </h2>
                </div>

                <div className="mt-8 flex text-left lg:mt-10">
                  <SecondaryButton
                    size="sm"
                    href={LINKS.tickets}
                  >
                    Buy Tickets
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="relative mt-16 flex w-full lg:w-2/3 lg:pl-8">
            <div className="grid w-full gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
              {experiences.map((item, index) => (
                <div
                  key={`experience-${index}`}
                  className="relative flex w-full flex-col"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-r from-void-400 to-void-500 shadow-xl">
                    <item.icon className="h-8 w-8 text-gold-600" stroke={1.5} />
                  </span>

                  <h4 className="mt-4 text-2xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-1 max-w-sm text-lg leading-relaxed text-void-200">
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
