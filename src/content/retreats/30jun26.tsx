import {
  IconCalendarEvent,
  IconClock,
  IconHeartHandshake,
  IconLeaf,
  IconSparkles,
  IconStar,
  IconUsers,
} from '@tabler/icons-react'
import imgMain from '/public/stock/rozbot/bloodlust7664_websize.jpeg'
import imgCause from '/public/stock/rozbot/bloodlust7671_websize.jpeg'
import { LINKS } from '@/config/links'
import type { RetreatContent } from './types'

export const retreat: RetreatContent = {
  slug: '30jun26',
  name: 'Pride Drag Plant Bingo',
  date: 'June 30, 2026',
  dateShort: 'Jun 30, 2026',
  venue: 'Studio 205',
  city: 'Chicago, IL',
  status: 'upcoming',

  hero: {
    title: 'Pride Drag Plant Bingo',
    subtitle:
      "Get your daubers ready, plant lovers — we're bringing the PRIDE to the potting bench! An unforgettable evening of drag, bingo, plants, and pure charisma hosted by ROZBOT & Unleashed.",
    ticketUrl: LINKS.tickets,
  },

  scheduleHeader: {
    dateLabel: 'Monday, June 30, 2026 · 6:30–9:00 PM',
    formatLabel: 'Evening Fundraiser Event',
  },

  speakers: [],

  includedItems: [
    'All bingo games for the night',
    'Popcorn',
    'Live performances by ROZBOT, your Plant Princess host',
    'Plant-forward prizes — gorgeous plants and donated goodies',
    'Split the Pot drawing',
    'Raffle prizes throughout the night',
  ],

  schedule: [
    {
      tagline: 'The Night',
      headline: 'Drag, Plants & Pure Charisma',
      text: 'Join us for an unforgettable evening of Pride Drag Plant Bingo at Studio 205 on June 30th from 6:30–9PM, as we celebrate the end of Pride Month the most fabulous way we know how: plants, prizes, and pure charisma. The one, the only — ROZBOT takes the stage as your Plant Princess, hosting and performing all night long. Plus, keep your eyes open for special guest appearances throughout the evening.',
      image: { src: imgMain, alt: 'ROZBOT performing on stage' },
      topCards: [
        { label: 'Monday, June 30 · 6:30–9 PM', icon: IconCalendarEvent },
        { label: 'Studio 205 · West Loop', icon: IconClock },
      ],
      items: [
        {
          title: 'Bingo Games All Night',
          subtitle: 'All rounds included with your ticket — daubers at the ready!',
          icon: IconSparkles,
        },
        {
          title: 'Live Performances',
          subtitle: 'ROZBOT hosts and performs all night as your Plant Princess.',
          icon: IconStar,
        },
        {
          title: 'Special Guest Appearances',
          subtitle: "Keep your eyes open — you won't want to miss a moment.",
          icon: IconUsers,
        },
        {
          title: 'Plant-Forward Prizes',
          subtitle: 'Win gorgeous plants and other amazing donated goodies.',
          icon: IconLeaf,
        },
        {
          title: 'Popcorn Included',
          subtitle: 'Additional drinks & snacks available for purchase.',
          icon: IconClock,
        },
      ],
    },
    {
      tagline: 'The Cause',
      headline: "Benefiting Chicago's LGBTQ+ Community",
      text: 'This is a fundraiser benefiting two Chicago non-profits — Center On Halsted and Howard Brown — both dedicated to supporting the LGBTQ+ community. Every ticket, every split-the-pot entry, drink/snack sale, and raffle purchase goes directly towards a cause that matters.',
      image: { src: imgCause, alt: 'Drag performance at Studio 205' },
      topCards: [
        { label: 'Center On Halsted', icon: IconHeartHandshake },
        { label: 'Howard Brown', icon: IconHeartHandshake },
      ],
      items: [
        {
          title: 'Split the Pot Drawing',
          subtitle: 'Your chance to win big — and give back.',
          icon: IconStar,
        },
        {
          title: 'Raffle Prizes',
          subtitle: 'Prizes raffled throughout the evening.',
          icon: IconSparkles,
        },
        {
          title: 'All Proceeds to Charity',
          subtitle: 'Every dollar benefits Center On Halsted and Howard Brown.',
          icon: IconHeartHandshake,
        },
      ],
    },
  ],

  pricing: [
    { title: 'General Admission', price: '$25', icon: IconSparkles },
  ],

  faqs: [
    {
      question: 'Who can attend?',
      answer: (
        <>
          Everyone is welcome! This is an all-ages, all-identities celebration of Pride.
          Come as you are and bring your friends.
        </>
      ),
    },
    {
      question: 'Where is the event?',
      answer: (
        <>
          Studio 205 — 1821 W Hubbard St, Chicago, IL (West Loop).
        </>
      ),
    },
    {
      question: 'What charities benefit from this event?',
      answer: (
        <>
          All proceeds go to{' '}
          <span className="font-semibold text-white">Center On Halsted</span> and{' '}
          <span className="font-semibold text-white">Howard Brown</span> — two Chicago
          non-profits dedicated to supporting the LGBTQ+ community.
        </>
      ),
    },
    {
      question: 'Are tickets refundable?',
      answer: (
        <>
          Tickets are non-refundable but may be transferred. Email{' '}
          <a
            href="mailto:info@thisisunleashed.com"
            className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
          >
            info@thisisunleashed.com
          </a>{' '}
          if you need to transfer your ticket to a friend.
        </>
      ),
    },
    {
      question: 'Are there additional costs beyond the ticket?',
      answer: (
        <>
          Your $25 ticket includes all bingo games, popcorn, live performances, and prizes.
          Additional drinks and snacks will be available for purchase at the event.
        </>
      ),
    },
  ],
}
