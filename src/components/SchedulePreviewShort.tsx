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
import imgMorning from '/public/stock/speaking-room.jpg'
import { Chip } from './ui/Chip'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

type IconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>

type Block = {
  title: string
  subtitle: string
  image: { src: StaticImageData; alt: string }
  highlights: { label: string; icon: IconComponent }[]
  sections: {
    tagline: string
    headline: string
    intro?: string
    items: {
      title: string
      subtitle?: string
      facilitator?: string
      icon: IconComponent
    }[]
    themes?: string[]
  }[]
}

const block: Block = {
  title: 'The experience: a day designed with intention',
  subtitle:
    'A full-day immersive container designed to help you arrive in your body, reconnect with self-trust, and choose your depth with support.',
  image: { src: imgMorning, alt: 'Unleashed schedule preview' },
  highlights: [
    { label: 'Saturday, Feb 21, 2026', icon: IconCalendarEvent },
    { label: 'Full-day program', icon: IconClock },
  ],
  sections: [
    {
      tagline: 'The Morning',
      headline: 'Gather + Move',
      intro:
        'A guided arc to ground, open, and connect before moving into deeper personal exploration.',
      items: [
        {
          title: 'Opening Ritual: Grounding + Collective Orientation',
          facilitator: 'Albe Gutierrez, MAATC',
          subtitle:
            'A sound- and presence-based ritual to regulate the nervous system and arrive together.',
          icon: IconSparkles,
        },
        {
          title: 'Unmasking the Self: Reclaiming Inner Wisdom',
          facilitator: 'Dr. Shanta “Dr. K” Kanukollu, PhD',
          subtitle:
            'Releasing self-silencing and reconnecting with embodied intuition and self-trust.',
          icon: IconMicrophone,
        },
        {
          title: 'Intimacy + Attachment Foundations',
          facilitator: 'Dr. Kres Ashford, PsyD, LCPC, CST',
          subtitle:
            'A shared framework for attachment, desire, boundaries, and connection.',
          icon: IconUsers,
        },
        {
          title: 'Sensual Movement: Beyond Sexuality',
          facilitator: 'Albe Gutierrez, MAATC',
          subtitle:
            'Exploring sensuality as embodied awareness and authentic expression.',
          icon: IconSparkles,
        },
      ],
    },
    {
      tagline: 'The Afternoon',
      headline: 'Choose Your Depth',
      intro:
        'In the afternoon, the experience becomes yours to shape. You’ll choose from immersive, small-group workshops led by our facilitators.',
      items: [
        {
          title: 'Choose-your-path workshop rotations',
          subtitle:
            'This format honors your autonomy, curiosity, and capacity in the moment. No one-size-fits-all. No forcing. Just permission.',
          icon: IconTools,
        },
      ],
      themes: [
        'Releasing shame and self-judgment',
        'Reconnecting to your body through movement',
        'Redefining intimacy and self-trust',
        'Rediscovering sensual and expressive self-connection',
        'Unlearning people-pleasing and reclaiming your voice',
        'Exploring the mind–body connection',
      ],
    },
  ],
}

function Highlight({
  label,
  icon: IconCmp,
}: {
  label: string
  icon: IconComponent
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="from-void-400 to-void-500 flex h-11 w-11 items-center justify-center rounded-3xl bg-linear-to-r">
        <IconCmp className="text-gold-600 h-5 w-5" stroke={1.5} />
      </div>
      <div className="text-base font-semibold text-white">{label}</div>
    </div>
  )
}

function Row({
  title,
  subtitle,
  facilitator,
  icon: IconCmp,
}: {
  title: string
  subtitle?: string
  facilitator?: string
  icon: IconComponent
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="from-void-400 to-void-500 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-3xl bg-linear-to-r">
        <IconCmp className="text-gold-600 h-4.5 w-4.5" stroke={1.5} />
      </div>

      <div className="min-w-0">
        <div className="text-base font-semibold text-white">{title}</div>

        {facilitator ? (
          <div className="text-void-200 mt-1 text-sm">{facilitator}</div>
        ) : null}

        {subtitle ? (
          <div className="text-void-300 mt-2 text-sm leading-relaxed">
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export const SchedulePreviewShort = () => {
  return (
    <section className="px-4 pb-10 sm:px-6 md:pt-12 md:pb-16 lg:px-8">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        {/* Header */}
        <div className="mx-auto w-full max-w-3xl text-center">
          <Chip>Schedule</Chip>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            {block.title}
          </h2>
          <p className="text-void-200 mt-4 text-lg md:text-xl">
            {block.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-12 grid max-w-2xl items-stretch gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-12 lg:gap-10">
          {/* Highlights: full width on desktop so image aligns with cards */}
          <div className="lg:col-span-12">
            <div className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row sm:justify-center lg:mx-0 lg:max-w-none lg:justify-start">
              {block.highlights.map((h, i) => (
                <Highlight key={`sched-h-${i}`} label={h.label} icon={h.icon} />
              ))}
            </div>
          </div>

          {/* Left */}
          <div className="lg:col-span-7">
            <div className="mt-2 space-y-6">
              {block.sections.map((s, i) => (
                <div
                  key={`sched-sec-${i}`}
                  className={clsx(
                    'rounded-3xl px-6 py-7 shadow-xl ring-1 ring-white/10',
                    i % 2 === 0 ? 'bg-blue-800/45' : 'bg-pink-800/45',
                  )}
                >
                  <div className="text-void-100 text-xl font-bold tracking-wide">
                    {s.tagline}
                  </div>
                  <div className="mt-1 text-xl font-extrabold text-white">
                    {s.headline}
                  </div>

                  {s.intro ? (
                    <p className="text-void-200 mt-3 text-sm leading-relaxed">
                      {s.intro}
                    </p>
                  ) : null}

                  <div className="mt-6 space-y-5">
                    {s.items.map((it, j) => (
                      <Row
                        key={`sched-row-${i}-${j}`}
                        title={it.title}
                        subtitle={it.subtitle}
                        facilitator={it.facilitator}
                        icon={it.icon}
                      />
                    ))}
                  </div>

                  {s.themes?.length ? (
                    <div className="bg-void-700/40 mt-6 rounded-2xl p-5 ring-1 ring-white/10">
                      <div className="text-sm font-bold tracking-wide text-white">
                        Workshop themes
                      </div>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {s.themes.map((t, k) => (
                          <li
                            key={`theme-${i}-${k}`}
                            className="text-void-200 flex items-start gap-2 text-sm leading-relaxed"
                          >
                            <span className="bg-gold-600 mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <p className="text-void-200 mt-8 text-sm">
              **Schedule subject to change
            </p>
          </div>

          {/* Right image */}
          <div className="flex items-center lg:col-span-5">
            <div className="ring-void-300/20 relative mx-auto aspect-2/3 w-full max-w-xl overflow-hidden rounded-3xl shadow-xl ring-1 lg:mx-0 lg:max-w-none">
              <Image
                src={block.image.src}
                alt={block.image.alt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
