import {
  IconCalendarEvent,
  IconClock,
  IconEye,
  IconFlame,
  IconHeartHandshake,
  IconMusicHeart,
  IconSparkles,
  IconStar,
  IconUsers,
  IconWind,
} from '@tabler/icons-react'
import imgJourney from '/public/stock/smoke-color.jpg'
import imgIntegration from '/public/stock/color-spiral.jpg'
import { LINKS } from '@/config/links'
import type { RetreatContent } from './types'

export const retreat: RetreatContent = {
  slug: '06may26',
  name: 'UNLEASHED May 2026',
  date: 'May 6, 2026',
  dateShort: 'May 6, 2026',
  venue: 'Studio 205',
  city: 'Chicago, IL',
  status: 'past',

  hero: {
    title: 'Mini-UNLEASHED : Awaken Your Senses',
    subtitle:
      'Step out of the noise and into your body. A 3-hour guided journey through connection, presence, and raw expression — consent-based, safely held, and designed to reconnect you to yourself and others.',
    ticketUrl: LINKS.tickets,
  },

  scheduleHeader: {
    dateLabel: 'Wednesday, May 6, 2026 · 6:30–9:30 PM',
    formatLabel: '3-Hour Immersive Experience',
  },

  speakers: ['Ashley Summers', 'Josephine Lauer'],

  includedItems: [
    'A guided sensory journey through sound, scent, taste, touch, and movement',
    'Consent-based, trauma-informed facilitation at every step',
    '3 hours of immersive experiences in a curated, intimate space',
    'A safe container designed to reconnect you to your body and others',
  ],

  schedule: [
    {
      tagline: 'The Journey',
      headline: 'Awaken: Sensory Immersion',
      text: 'A carefully layered journey through your senses — opening your body, your presence, and your connection to others.',
      image: { src: imgJourney, alt: 'Unleashed sensory journey' },
      topCards: [
        { label: 'Wednesday, May 6 · 6:30 PM', icon: IconCalendarEvent },
        { label: '3-Hour Immersive Experience', icon: IconClock },
      ],
      items: [
        {
          title: 'Opening Ceremony',
          subtitle: 'Ground in intention. Set the tone together.',
          icon: IconSparkles,
        },
        {
          title: 'Sound Bath',
          subtitle: 'Let vibration carry you inward.',
          icon: IconMusicHeart,
        },
        {
          title: 'Eye Gazing',
          subtitle: 'Be truly seen. Connect beyond words.',
          icon: IconEye,
        },
        {
          title: 'Sensory Taste',
          subtitle: 'Awaken your palate and your presence.',
          icon: IconFlame,
        },
        {
          title: 'Elemental Touch',
          subtitle: 'Consent-based touch exploration — grounding, safe, and intentional.',
          icon: IconHeartHandshake,
        },
      ],
      extra: (
        <div className="bg-void-500 mt-6 rounded-2xl px-5 py-6 ring-1 ring-white/10">
          <p className="text-base font-semibold text-white">Consent-centered at every step</p>
          <p className="text-void-200 mt-1 text-base">
            Every activity is an invitation, not a requirement. You choose your pace and your level
            of participation.
          </p>
        </div>
      ),
    },
    {
      tagline: 'Integration',
      headline: 'Release and Connect',
      text: 'Move through what was stirred, land together, and carry the evening home in your body.',
      image: { src: imgIntegration, alt: 'Unleashed movement and closing' },
      topCards: [
        { label: 'Movement + Connection', icon: IconWind },
        { label: 'Closing Circle + Open Mingle', icon: IconUsers },
      ],
      items: [
        {
          title: 'Primal Movement',
          subtitle: 'Let your body lead. Shake, sway, release.',
          icon: IconWind,
        },
        {
          title: 'Closing Circle',
          subtitle: 'Witness and be witnessed. Seal the container together.',
          icon: IconSparkles,
        },
        {
          title: 'Open Mingle',
          subtitle: 'Stay, connect, and linger in the afterglow.',
          icon: IconUsers,
        },
      ],
    },
  ],

  pricing: [
    { title: 'Early Bird', price: '$65', icon: IconSparkles },
    { title: 'General', price: '$75', icon: IconStar },
  ],

  faqs: [
    {
      question: 'Who can attend?',
      answer: (
        <>
          All women and woman-aligned individuals, including non-binary and trans women, 21+. This
          event is not open to cis-gendered males. We do not make exceptions for the age
          requirement.
        </>
      ),
    },
    {
      question: 'Do I need any prior experience?',
      answer: (
        <>
          Not at all. This experience is designed for all levels — whether you are brand new to
          somatic or sensory work, or deeply practiced. All you need is an open heart and a
          willingness to be present.
        </>
      ),
    },
    {
      question: 'Are all activities mandatory?',
      answer: (
        <>
          No. Every activity is an invitation. You are always free to observe, pause, or skip
          anything that does not feel right for you. Consent and personal boundaries are honored
          at every step.
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
          if you need to transfer your ticket to a friend. In cases of serious illness, injury, or
          family emergency, refunds may be provided at the discretion of the organizers.
        </>
      ),
    },
    {
      question: 'Do you offer need-based pricing?',
      answer: (
        <>
          We do not currently offer need-based discounts for this event, but keep an eye on future
          announcements. Questions? Email{' '}
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
  ],
}
