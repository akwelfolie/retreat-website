import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'
import {
  IconCalendarEvent,
  IconClock,
  IconMicrophone,
  IconTools,
  IconUsers,
  IconSparkles,
  Icon,
  IconProps,
} from '@tabler/icons-react'
import imgClosing from '/public/stock/meditation.jpg'
import imgMorning from '/public/stock/speaking-room.jpg'
import imgAfternoon from '/public/stock/group-hug.jpg'
import { Chip } from './ui/Chip'
import type {ForwardRefExoticComponent, RefAttributes } from 'react'


type ScheduleItem = {
  time: string
  title: string
  subtitle?: string
  facilitator?: string
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
}

type ScheduleSection = {
  tagline: string
  headline: string
  text: string
  image: { src: StaticImageData; alt: string }
  topCards: { label: string; icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>> }[]
  items: ScheduleItem[]
  extra?: React.ReactNode
}

const unleashedArc = [
  {
    title: 'RELEASE',
    text: 'Grounding, safety, de-shaming, nervous system settling',
  },
  {
    title: 'EMBODY',
    text: 'Somatic awareness, movement, sensation, embodied confidence',
  },
  {
    title: 'CONNECT / EXPRESS',
    text: 'Communication, desire, power, creativity, relational expression',
  },
  {
    title: 'INTEGRATE',
    text: 'Reflection, meaning-making, closure, real-world application',
  },
]

const workshops = [
  'Shibari Rope as Consent & Connection',
  'Somatic Play & Emotional Release',
  'Trauma-Informed Embodiment & Intimacy',
  'Kinky Play 101 & Advanced: Bondage, Sensory & Impact Play',
  'Advanced Kink Play: Flogging and edging',
  'Relational Expression & Community Integration',
  'Exploring Tantric',
  'Sensual Woman Activation',
]

const sections: ScheduleSection[] = [
  {
    tagline: 'Morning',
    headline: 'Arrival & Somatic Release',
    text: 'We start slow on purpose — nervous system safety first, then depth.',
    image: {
      src: imgMorning,
      alt: 'Unleashed morning schedule',
    },
    topCards: [
      { label: 'Saturday, February 21, 2026', icon: IconCalendarEvent },
      { label: 'One-Day Full Immersion Retreat', icon: IconSparkles },
    ],
    items: [
      {
        time: '8:00–9:00 AM',
        title: 'Check-in',
        icon: IconClock,
      },
      {
        time: '9:00–9:15 AM',
        title: 'Welcome & Consent Orientation',
        facilitator: 'Nicole Sonnefeldt & Ashley Summers',
        icon: IconUsers,
      },
      {
        time: '9:15–9:50 AM',
        title: 'Grounding & Collective Orientation',
        subtitle: 'Facilitated somatic grounding, sound, and intention setting',
        facilitator: 'Albe Gutierrez',
        icon: IconSparkles,
      },
      {
        time: '9:50–10:20 AM',
        title: 'Keynote: Letting Go of Shame, Becoming Unleashed',
        subtitle: 'A reflective, embodied exploration of self-trust and desire',
        facilitator: 'Shanta Kanukollu, PhD (Dr. K)',
        icon: IconMicrophone,
      },
      {
        time: '10:20–11:15 AM',
        title: 'Feminine Dominance 101: Power, Archetypes & Consent',
        subtitle: 'Foundations of ethical power, desire, and consent',
        facilitator: 'Mistress Sophia Chase, MSW — Pro-Domme',
        icon: IconTools,
      },
      {
        time: '11:15–12:00 PM',
        title: 'Sensual Movement: Beyond Sexuality',
        subtitle: 'Somatic movement, sensation, and expressive play',
        facilitator: 'Albe Gutierrez, MAATC',
        icon: IconSparkles,
      },
      {
        time: '12:00–1:00 PM',
        title: 'Lunch & Rest',
        icon: IconClock,
      },
    ],
    extra: (
      <div className="mt-10 rounded-3xl bg-void-500 px-6 py-8 shadow-xl ring-1 ring-white/10 sm:px-8">
        <p className="text-lg font-semibold text-white">Designed as an arc</p>
        <p className="mt-2 text-lg leading-relaxed text-void-200">
          A progressive experiential flow that supports nervous system safety,
          embodied depth, and real-world integration.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {unleashedArc.map((step, i) => (
            <div
              key={`arc-${i}`}
              className={clsx(
                'rounded-3xl px-6 py-5 shadow-xl ring-1 ring-white/10',
                i % 2 === 0 ? 'bg-blue-800/60' : 'bg-pink-800/60',
              )}
            >
              <div className="text-base font-extrabold tracking-wide text-void-100">
                {step.title}
              </div>
              <p className="mt-2 text-base leading-relaxed text-void-200">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    tagline: 'Afternoon',
    headline: 'Connection & Practice',
    text: 'Mind–body foundations, then hands-on experiential rotation.',
    image: {
      src: imgAfternoon,
      alt: 'Unleashed afternoon schedule',
    },
    topCards: [
      { label: '1:00 PM–4:00 PM workshops', icon: IconTools },
      { label: 'Experiential rotation format', icon: IconUsers },
    ],
    items: [
      {
        time: '1:00–1:20 PM',
        title: 'Intimacy & Attachment Foundations',
        subtitle: 'Mind–body approaches to connection',
        facilitator: 'Dr. Kres Ashford',
        icon: IconMicrophone,
      },
      {
        time: '1:30–4:00 PM',
        title: 'Rotational Workshops (45-minute sessions)',
        subtitle:
          'Participants rotate through three experiential, hands-on workshops.',
        facilitator:
          '',
        icon: IconTools,
      },
    ],
    extra: (
      <div className="mt-10 rounded-3xl bg-void-500 px-6 py-8 shadow-xl ring-1 ring-void-300/20 sm:px-8">
        <p className="text-lg font-semibold text-white">Workshop rotation includes</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {workshops.map((w, i) => (
            <li
              key={`workshop-${i}`}
              className={clsx(
                'rounded-3xl px-5 py-4 shadow-xl ring-1 ring-white/10',
                i % 2 === 0 ? 'bg-blue-800/50' : 'bg-pink-800/50',
              )}
            >
              <p className="text-base font-semibold text-void-100">{w}</p>
            </li>
          ))}
        </ul>
      </div>
    ),
  },

  {
    tagline: 'Closing',
    headline: 'Integration',
    text: 'Reflection, nervous system settling, and embodied closure.',
    image: {
      src: imgClosing,
      alt: 'Unleashed closing integration',
    },
    topCards: [
      { label: '4:15–5:00 PM', icon: IconClock },
      { label: 'Closing ritual + integration', icon: IconSparkles },
    ],
    items: [
      {
        time: '4:15–5:00 PM',
        title: 'Closing Integration & Ritual',
        subtitle: 'Reflection, meaning-making, and real-world application',
        facilitator: 'Nicole Sonnefeldt & Dr. Kanukollu',
        icon: IconUsers,
      },
    ],
    extra: (
      <div className="mt-10 rounded-3xl bg-void-500 px-6 py-8 shadow-xl ring-1 ring-white/10 sm:px-8">
        <p className="text-lg font-semibold text-white">
          One day. Strong container. Deep work. Real integration.
        </p>
      </div>
    ),
  },
]

function ItemRow({ item }: { item: ScheduleItem }) {
  const Icon = item.icon

  return (
    <div className="flex items-start gap-4">
      {Icon ? (
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-3xl bg-linear-to-r from-void-400 to-void-500">
          <Icon className="h-5 w-5 text-gold-600" stroke={1.5} />
        </div>
      ) : null}

      <div className="min-w-0 text-left">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <div className="text-sm font-semibold tracking-wide text-void-200">
            {item.time}
          </div>
          <div className="text-lg font-semibold text-white">{item.title}</div>
        </div>

        {item.subtitle ? (
          <div className="mt-1 text-base text-void-200">{item.subtitle}</div>
        ) : null}

        {item.facilitator ? (
          <div className="mt-2 text-sm text-void-300">{item.facilitator}</div>
        ) : null}
      </div>
    </div>
  )
}

export const SchedulePreview = () => {
  return (
    <section className="px-4 pb-10 sm:px-6 md:pb-16 md:pt-12 lg:px-8">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        {/* Page-level header */}
        <div className="mx-auto w-full max-w-3xl text-center">
          <Chip>Schedule</Chip>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            One-day full immersion
          </h2>
          <p className="mt-4 text-lg text-void-200 md:text-xl">
            Designed with a progressive experiential arc that supports nervous
            system safety, embodied depth, and real-world integration.
          </p>
        </div>

        {sections.map((section, i) => (
          <div
            key={`schedule-preview-${i}`}
            className={clsx(
              'mx-auto mt-14 max-w-xl md:max-w-2xl lg:mx-0 lg:mt-20 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24',
              i % 2 === 1 && 'lg:mt-28',
            )}
          >
            {/* Text */}
            <div className={clsx(i % 2 === 1 && 'lg:order-2', 'col-span-2')}>
              <div className="text-center lg:text-left">
                <Chip>{section.tagline}</Chip>

                <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:mt-6">
                  {section.headline}
                </h3>

                <p className="mt-4 text-xl text-void-200 lg:mt-6">
                  {section.text}
                </p>

                {/* Two quick highlight cards */}
                <div className="mx-auto mt-8 flex max-w-xs flex-col space-y-8 sm:mx-0 sm:mt-10 sm:max-w-none sm:flex-row sm:space-x-4 sm:space-y-0 lg:space-x-6">
                  {section.topCards.map((c, j) => (
                    <div
                      key={`schedule-top-${i}-${j}`}
                      className="flex flex-col items-center lg:items-start"
                    >
                      <div className="flex flex-col items-center sm:flex-row">
                        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-linear-to-r from-void-400 to-void-500">
                          <c.icon className="h-6 w-6 text-gold-600" stroke={1.5} />
                        </div>
                        <div className="mt-3 text-xl font-semibold text-white sm:ml-3 sm:mt-0">
                          {c.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main schedule list */}
                <div className="mt-10 space-y-6 rounded-3xl bg-void-500 px-6 py-8 shadow-xl ring-1 ring-white/10 sm:px-8">
                  {section.items.map((item, j) => (
                    <ItemRow key={`schedule-item-${i}-${j}`} item={item} />
                  ))}
                </div>

                {/* Extra content (arc / workshops / closing note) */}
                {section.extra}

                {i === sections.length - 1 && (
                  <p className="mt-10 text-sm text-void-200">
                    **Schedule subject to change
                  </p>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="col-span-1 mt-10 flex items-center lg:order-1 lg:mt-0">
              <div className="relative aspect-2/3 w-full rounded-3xl text-center shadow-xl">
                <Image
                  className="absolute inset-0 size-full rounded-3xl ring-1 ring-void-300/20 object-cover object-center align-middle"
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(min-width: 1280px) 23.5rem, (min-width: 1024px) 33vw, (min-width: 768px) 42rem, (min-width: 640px) 36rem, calc(100vw - 2rem)"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
