import clsx from 'clsx'
import {
  IconCalendarEvent,
  IconClock,
  IconMicrophone,
  IconTools,
  IconUsers,
  IconSparkles,
  IconStar,
} from '@tabler/icons-react'
import imgMorning from '/public/stock/smoke-color.jpg'
import imgAfternoon from '/public/stock/fence.jpg'
import type { FaqItem, RetreatContent } from './types'

const workshops = [
  'Releasing Shame — Dr. Shanta "Dr. K" Kanukollu, PhD',
  'From Surviving to Thriving — Dr. Shanta "Dr. K" Kanukollu, PhD',
  'Permission to Feel — Dr. Kres Ashford, PsyD, LCPC, CST',
  'Permission to Choose — Dr. Kres Ashford, PsyD, LCPC, CST',
  'People Pleasing to Self-Trust — Nicole Sonnefeldt, MA',
  'Tantra 101 — Josephine Lauer',
  'Primal Flow — Josephine Lauer',
  'Kinky Play 101 — Lady Sophia',
  'Expressive Arts: Smash Space — Albe Gutierrez, MAATC',
]

export const faqs: FaqItem[] = [
  {
    question: 'Who can attend UNLEASHED?',
    answer: (
      <>
        All women and woman-aligned individuals, including non-binary and trans women, 21+.
        This retreat is not open to cis-gendered males (we hope to offer a similar experience
        in the future). We do not make exceptions for the age requirement.
      </>
    ),
  },
  {
    question: 'Do I need previous experience in kink, tantra, or sex-forward workshops to attend?',
    answer: (
      <>
        No. This experience is curated for women with all levels of experience, wherever they are
        in their sexual journey. All you need is an open heart and mind.
      </>
    ),
  },
  {
    question: 'Is this event ADA accessible?',
    answer: (
      <>
        Unfortunately the venue space is on the second floor, so it is not fully ADA accessible.
        If you have a question about specific accommodations for programming, email{' '}
        <a
          href="mailto:info@thisisunleashed.com"
          className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          info@thisisunleashed.com
        </a>
        .
      </>
    ),
  },
  {
    question: 'Do you provide need-based discounts for the retreat?',
    answer: (
      <>
        We do not, but we provide opportunities to volunteer in exchange for a discounted rate and
        limited scholarships to attend for free. If you&apos;re interested, fill out{' '}
        <a
          href="https://forms.gle/hLY62tzS1spkZJvD9"
          className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          this form
        </a>
        .
      </>
    ),
  },
  {
    question: 'Do you provide ticket refunds or transfers?',
    answer: (
      <>
        We allow ticket transfers. Email{' '}
        <a
          href="mailto:info@thisisunleashed.com"
          className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          info@thisisunleashed.com
        </a>{' '}
        if you need to transfer your ticket to a friend or are looking for someone from the
        waitlist. In cases of serious illness, injury, or family emergency, refunds may be
        provided at the discretion of the organizers.
      </>
    ),
  },
]

export const retreat: RetreatContent = {
  slug: '21feb26',
  name: 'UNLEASHED February 2026',
  date: 'February 21, 2026',
  dateShort: 'Feb 21, 2026',
  venue: 'Le Loft',
  city: 'Chicago, IL',
  status: 'past',

  hero: {
    title: 'UNLEASHED — February 21, 2026',
    subtitle:
      "Our inaugural women's empowerment retreat in Chicago. A full-day immersion of embodiment, connection, and self-trust.",
  },

  scheduleHeader: {
    dateLabel: 'Saturday, Feb 21, 2026',
    formatLabel: 'One-Day Full Immersion',
  },

  speakers: [
    'Shanta',
    'Kres Ashford',
    'Nicole Sonnefeldt',
    'Josephine Lauer',
    'Lady Sophia',
    'Albe Gutierrez',
  ],

  includedItems: [
    'A powerhouse lineup blending licensed clinicians, somatic/intimacy practitioners, and consent-centered educators',
    'Immersive workshops that look to release, embody, connect and integrate',
    'Catered lunch, coffee, tea & snacks throughout the day',
    'Swag bag with goodies from our sponsors',
  ],

  schedule: [
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
          subtitle: 'Sound, breath, and intention rooted in Mexica and Tewa cosmology.',
          facilitator: 'Albe Gutierrez, MAATC',
          icon: IconSparkles,
        },
        {
          title: 'Keynote: Unmasking the Self, Reclaiming Inner Wisdom',
          subtitle: 'Exploring self-silencing, survival patterns, and embodied wisdom.',
          facilitator: 'Dr. Shanta "Dr. K" Kanukollu, PhD',
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
          <p className="text-base font-semibold text-white">Consent-centered and trauma-informed</p>
          <p className="text-void-200 mt-1 text-base">
            You choose your pace, your level of participation, and what you want to explore.
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
          subtitle: 'An educational exploration of kink identity, archetypes, and consent.',
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
          <p className="text-base font-semibold text-white">Workshop experiences include</p>
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
  ],

  pricing: [
    { title: 'Early Bird', price: '$275*', icon: IconSparkles },
    { title: 'Standard', price: '$325*', icon: IconStar },
  ],

  faqs,
}
