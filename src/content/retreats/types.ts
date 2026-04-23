import type { ReactNode } from 'react'
import type { StaticImageData } from 'next/image'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { Icon, IconProps } from '@tabler/icons-react'

export type IconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>

export type ScheduleItem = {
  title: string
  subtitle?: string
  facilitator?: string
  icon?: IconComponent
}

export type ScheduleSection = {
  tagline: string
  headline: string
  text: string
  image: { src: StaticImageData; alt: string }
  topCards: { label: string; icon: IconComponent }[]
  items: ScheduleItem[]
  extra?: ReactNode
}

export type PricingTier = {
  title: string
  price: string
  icon: IconComponent
}

export type FaqItem = {
  question: string
  answer: ReactNode
}

export type RetreatMeta = {
  slug: string
  name: string
  date: string
  dateShort: string
  venue: string
  city: string
  status: 'past' | 'upcoming'
}

export type RetreatContent = RetreatMeta & {
  hero: {
    title: string
    subtitle: string
    ticketUrl?: string
  }
  scheduleHeader: {
    dateLabel: string
    formatLabel: string
  }
  speakers: string[]
  includedItems: string[]
  schedule: ScheduleSection[]
  pricing: PricingTier[]
  faqs: FaqItem[]
}
