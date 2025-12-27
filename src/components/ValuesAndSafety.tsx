import {
  IconShieldCheck,
  IconHandStop,
  IconHeartHandshake,
  IconAlertTriangle,
  IconUsers,
  IconLock,
} from '@tabler/icons-react'
import { Chip } from '@/components/ui/Chip'

const values = [
  {
    title: 'Consent-first culture',
    text:
      'All activities are optional. Participation is always a choice, and boundaries are respected without question.',
    icon: IconHandStop,
  },
  {
    title: 'Trauma-informed approach',
    text:
      'Programming is designed with nervous system awareness. Mental health providers are available for grounding and support.',
    icon: IconShieldCheck,
  },
  {
    title: 'Respect & inclusion',
    text:
      'Transphobia, racism, misogyny, slut-shaming, kink-shaming, or discrimination of any kind are not tolerated.',
    icon: IconHeartHandshake,
  },
  {
    title: 'Clear boundaries',
    text:
      'Violations of community agreements result in immediate removal from the retreat without refund.',
    icon: IconAlertTriangle,
  },
  {
    title: 'Community accountability',
    text:
      'Safety is upheld collectively. Participants are encouraged to speak up and support one another.',
    icon: IconUsers,
  },
  {
    title: 'Privacy & autonomy',
    text:
      'No one is expected to disclose, perform, or share beyond their comfort level. Your experience is yours.',
    icon: IconLock,
  },
]

export const ValuesAndSafety = () => {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 md:pb-16 md:pt-12 lg:px-8">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        {/* Section header */}
        <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <Chip>Values & Safety</Chip>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            A container built on trust, consent, and care
          </h2>
          <p className="mt-6 text-xl text-void-200">
            Unleashed is intentionally designed as a respectful, trauma-informed
            space where autonomy, safety, and dignity come first.
          </p>
        </div>

        {/* Value cards */}
        <div className="mt-12 grid gap-y-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-12">
          {values.map((item, index) => (
            <div
              key={`value-${index}`}
              className="mx-auto w-full max-w-lg rounded-3xl bg-void-500 px-6 py-12 shadow-xl ring-1 ring-void-300/20"
            >
              <div className="mx-auto max-w-sm text-center">
                {/* Icon */}
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-r from-void-400 to-void-500 shadow-xl">
                <item.icon
                    className="h-8 w-8 text-gold-600"
                    stroke={1.5}
                  />
                </span>

                <div className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </div>
                <p className="mt-3 text-lg leading-relaxed text-void-200">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
