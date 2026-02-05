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
    items: { title: string; icon: IconComponent }[]
  }[]
  note?: string
}

const block: Block = {
  title: 'One-day full immersion',
  subtitle:
    'A full-day immersive experience centered on embodiment, choice, and self-trust in a consent-centered, trauma-informed space.',
  image: { src: imgMorning, alt: 'Unleashed schedule preview' },
  highlights: [
    { label: 'Saturday, Feb 21, 2026', icon: IconCalendarEvent },
    { label: 'Full-day program', icon: IconClock },
  ],
  sections: [
    {
      tagline: 'Morning',
      headline: 'Grounding and foundation',
      items: [
        {
          title: 'Opening ritual + grounding orientation',
          icon: IconSparkles,
        },
        {
          title: 'Keynote: reclaiming inner wisdom',
          icon: IconMicrophone,
        },
        {
          title: 'Intimacy and attachment foundations',
          icon: IconUsers,
        },
        {
          title: 'Sensual movement beyond sexuality',
          icon: IconSparkles,
        },
      ],
    },
    {
      tagline: 'Midday + Afternoon',
      headline: 'Exploration and choice',
      items: [
        {
          title: 'Lunch and rest (includes live Shibari demo)',
          icon: IconClock,
        },
        {
          title: '9 kink identities: desire, power, sensation',
          icon: IconMicrophone,
        },
        {
          title: 'Immersive workshop rotations',
          icon: IconTools,
        },
        {
          title: 'Closing sacred circle + integration',
          icon: IconUsers,
        },
      ],
    },
  ],
  note: 'This experience is not about doing everything. It’s about listening, choosing, and trusting your body. All sessions are optional.',
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

function Row({ title, icon: IconCmp }: { title: string; icon: IconComponent }) {
  return (
    <div className="flex items-center gap-4">
      {/* removed mt-1 so icon and text align nicely */}
      <div className="from-void-400 to-void-500 flex h-9 w-9 shrink-0 items-center justify-center rounded-3xl bg-linear-to-r">
        <IconCmp className="text-gold-600 h-4.5 w-4.5" stroke={1.5} />
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <div className="text-base font-semibold text-white">{title}</div>
        </div>
      </div>
    </div>
  )
}

export const SchedulePreviewShort = () => {
  return (
    <section className="px-4 pb-10 sm:px-6 md:pb-16 md:pt-12 lg:px-8">
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
            {/* Two compact cards */}
            <div className="mt-2 space-y-6">
              {block.sections.map((s, i) => (
                <div
                  key={`sched-sec-${i}`}
                  className={clsx(
                    'rounded-3xl px-6 py-7 shadow-xl ring-1 ring-white/10',
                    i % 2 === 0 ? 'bg-blue-800/45' : 'bg-pink-800/45',
                  )}
                >
                  <div className="text-void-100 text-sm font-bold tracking-wide">
                    {s.tagline}
                  </div>
                  <div className="mt-1 text-xl font-extrabold text-white">
                    {s.headline}
                  </div>

                  <div className="mt-6 space-y-4">
                    {s.items.map((it, j) => (
                      <Row
                        key={`sched-row-${i}-${j}`}
                        title={it.title}
                        icon={it.icon}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {block.note ? (
              <div className="bg-void-700/50 mt-8 rounded-3xl p-5 shadow-xl ring-1 ring-white/10">
                <p className="text-base font-semibold text-white">
                  {block.note}
                </p>
              </div>
            ) : null}

            <p className="text-void-200 mt-8 text-sm">
              **Schedule subject to change
            </p>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5">
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
