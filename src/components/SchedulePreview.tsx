import Image, { type StaticImageData } from 'next/image'
import clsx from 'clsx'
import {
  IconCalendarEvent,
  IconClock,
  IconMicrophone,
  IconTools,
  IconUsers,
  IconSparkles,
  type Icon,
  type IconProps,
} from '@tabler/icons-react'
import imgMorning from '/public/stock/smoke-color.jpg'
import imgAfternoon from '/public/stock/fence.jpg'
import { Chip } from './ui/Chip'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

type IconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>

type ScheduleItem = {
  title: string
  subtitle?: string
  facilitator?: string
  icon?: IconComponent
}

type ScheduleSection = {
  tagline: string
  headline: string
  text: string
  image: { src: StaticImageData; alt: string }
  topCards: { label: string; icon: IconComponent }[]
  items: ScheduleItem[]
  extra?: React.ReactNode
}

const workshops = [
  'Releasing Shame — Dr. Shanta “Dr. K” Kanukollu, PhD',
  'From Surviving to Thriving — Dr. Shanta “Dr. K” Kanukollu, PhD',
  'Permission to Feel — Dr. Kres Ashford, PsyD, LCPC, CST',
  'Permission to Choose — Dr. Kres Ashford, PsyD, LCPC, CST',
  'People Pleasing to Self-Trust — Nicole Sonnefeldt, MA',
  'Tantra 101 — Josephine Lauer',
  'Primal Flow — Josephine Lauer',
  'Kinky Play 101 — Lady Sophia',
  'Expressive Arts: Smash Space — Albe Gutierrez, MAATC',
]

const sections: ScheduleSection[] = [
  {
    tagline: 'Morning',
    headline: 'MORNING: Grounding and Foundation',
    text: 'A progressive start centered on safety, nervous system regulation, and embodied self-trust.',
    image: { src: imgMorning, alt: 'Unleashed morning session' },
    topCards: [
      { label: 'Saturday, Feb 21, 2026', icon: IconCalendarEvent },
      { label: 'Full-day immersive retreat', icon: IconClock },
    ],
    items: [
      {
        title: 'Opening Ritual: Grounding and Collective Orientation',
        subtitle:
          'Sound, breath, and intention rooted in Mexica and Tewa cosmology.',
        facilitator: 'Albe Gutierrez, MAATC',
        icon: IconSparkles,
      },
      {
        title: 'Keynote: Unmasking the Self, Reclaiming Inner Wisdom',
        subtitle:
          'Exploring self-silencing, survival patterns, and embodied wisdom.',
        facilitator: 'Dr. Shanta “Dr. K” Kanukollu, PhD',
        icon: IconMicrophone,
      },
      {
        title: 'Intimacy and Attachment Foundations',
        subtitle: 'Attachment, desire, and connection through a somatic lens.',
        facilitator: 'Dr. Kres Ashford, PsyD, LCPC, CST',
        icon: IconUsers,
      },
      {
        title: 'Sensual Movement: Beyond Sexuality',
        subtitle: 'Expression, presence, and pleasure beyond performance.',
        facilitator: 'Albe Gutierrez, MAATC',
        icon: IconSparkles,
      },
      {
        title: 'Lunch and rest',
        subtitle: 'Includes a live Shibari demonstration by Miss Q.',
        icon: IconClock,
      },
    ],
    extra: (
      <div className="bg-void-500 mt-6 rounded-2xl px-5 py-6 ring-1 ring-white/10">
        <p className="text-base font-semibold text-white">
          Consent-centered and trauma-informed
        </p>
        <p className="text-void-200 mt-1 text-base">
          You choose your pace, your level of participation, and what you want
          to explore.
        </p>
      </div>
    ),
  },

  {
    tagline: 'Afternoon',
    headline: 'AFTERNOON: Exploration and Choice',
    text: 'Education, practical tools, and immersive rotations where you choose what to explore.',
    image: { src: imgAfternoon, alt: 'Unleashed workshop experience' },
    topCards: [
      { label: 'Education + hands-on practice', icon: IconTools },
      { label: 'Choose your experience', icon: IconUsers },
    ],
    items: [
      {
        title: '9 Kink Identities: Desire, Power, and Sensation',
        subtitle:
          'An educational exploration of kink identity, archetypes, and consent.',
        facilitator: 'Lady Sophia (Mistress Sophia Chase, MSW)',
        icon: IconMicrophone,
      },
      {
        title: 'Immersive workshop rotations',
        subtitle:
          'Choose three experiential workshops across embodiment, relation, and expression.',
        facilitator:
          'Nicole Sonnefeldt, Lady Sophia, Albe Gutierrez, Josephine Lauer, Dr. K, Dr. Kres Ashford',
        icon: IconTools,
      },
    ],
    extra: (
      <div className="bg-void-500 mt-6 rounded-2xl px-5 py-6 ring-1 ring-white/10">
        <p className="text-base font-semibold text-white">
          Workshop experiences include
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {workshops.map((w, i) => (
            <li
              key={`workshop-${i}`}
              className={clsx(
                'rounded-2xl px-4 py-3 ring-1 ring-white/10',
                i % 2 === 0 ? 'bg-blue-800/50' : 'bg-pink-800/50',
              )}
            >
              <p className="text-void-100 text-sm font-semibold">{w}</p>
            </li>
          ))}
        </ul>
      </div>
    ),
  },

  // {
  //   tagline: 'Closing',
  //   headline: 'Integration and community',
  //   text: 'A ceremonial close devoted to reflection, integration, and being seen.',
  //   image: { src: imgClosing, alt: 'Unleashed closing circle' },
  //   topCards: [
  //     { label: 'Closing ritual and integration', icon: IconSparkles },
  //     { label: 'Community-centered', icon: IconUsers },
  //   ],
  //   items: [
  //     {
  //       title: 'Sacred Circle: Witnessing and Feminine Wisdom',
  //       subtitle: 'Reflection, integration, and embodied closure in community.',
  //       facilitator: 'Josephine Lauer',
  //       icon: IconUsers,
  //     },
  //   ],
  //   extra: (
  //     <div className="bg-void-500 mt-6 rounded-2xl px-5 py-6 ring-1 ring-white/10">
  //       <p className="text-base font-semibold text-white">
  //         This experience is not about doing everything
  //       </p>
  //       <p className="text-void-200 mt-1 text-base">
  //         It’s about listening, choosing, and trusting your body.
  //       </p>
  //     </div>
  //   ),
  // },
]

function ItemRow({ item }: { item: ScheduleItem }) {
  const IconCmp = item.icon

  return (
    <div className="flex items-start gap-4">
      {IconCmp ? (
        <div className="from-void-400 to-void-500 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-linear-to-r">
          <IconCmp className="text-gold-600 h-4.5 w-4.5" stroke={1.5} />
        </div>
      ) : null}

      <div className="min-w-0">
        <div className="text-base font-semibold text-white">{item.title}</div>

        {item.subtitle ? (
          <div className="text-void-200 mt-0.5 text-sm">{item.subtitle}</div>
        ) : null}

        {item.facilitator ? (
          <div className="text-void-300 mt-1 text-xs">{item.facilitator}</div>
        ) : null}
      </div>
    </div>
  )
}

export const SchedulePreview = () => {
  return (
    <section className="px-4 pb-8 sm:px-6 md:pb-12 lg:px-8">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        <div className="mx-auto max-w-3xl text-center">
          <Chip className="text-[1.8rem]">
            Saturday, Feb 21, 2026 <br /> One-Day Full Immersion
          </Chip>
        </div>

        {sections.map((section, i) => (
          <div
            key={`schedule-${i}`}
            className={clsx(
              'mx-auto mt-12 max-w-xl lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-x-14',
            )}
          >
            <div className={clsx(i % 2 === 1 && 'lg:order-2', 'col-span-2')}>
              <div
                className={clsx(
                  'mt-3 rounded-2xl px-5 py-5 shadow-xl ring-1 ring-white/10',
                  i === 0 ? 'bg-blue-500/55' : 'bg-pink-500/55',
                )}
              >
                <h3 className="text-3xl font-extrabold text-white">
                  {section.headline}
                </h3>

                <p className="text-void-200 mt-3 text-lg">{section.text}</p>
              </div>

              <div className="bg-void-500 mt-6 space-y-4 rounded-2xl px-5 py-6 ring-1 ring-white/10">
                {section.items.map((item, j) => (
                  <ItemRow key={j} item={item} />
                ))}
              </div>

              {section.extra}

              {i === sections.length - 1 && (
                <p className="text-void-200 mt-6 text-xs">
                  **Schedule subject to change
                </p>
              )}
            </div>

            <div className="col-span-1 mt-8 flex items-center lg:mt-0">
              <div className="relative aspect-2/3 w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
