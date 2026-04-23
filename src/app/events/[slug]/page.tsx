import { notFound } from 'next/navigation'
import { retreat as retreat21feb26 } from '@/content/retreats/21feb26'
import { pastRetreats } from '@/content/retreats'
import type { RetreatContent } from '@/content/retreats/types'
import { PastEventHero } from '@/components/PastEventHero'
import { PastEventInfo } from '@/components/PastEventInfo'
import { PastEventSchedule } from '@/components/PastEventSchedule'
import { PastEventPricing } from '@/components/PastEventPricing'
import { PastEventFaq } from '@/components/PastEventFaq'
import { CallToAction } from '@/components/CallToAction'

// Add each past retreat here as new events are archived
const retreatMap: Record<string, RetreatContent> = {
  '21feb26': retreat21feb26,
}

export function generateStaticParams() {
  return pastRetreats.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const retreat = retreatMap[slug]
  if (!retreat) return {}
  return {
    title: `${retreat.name} — UNLEASHED`,
    description: retreat.hero.subtitle,
  }
}

export default async function PastEventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const retreat = retreatMap[slug]
  if (!retreat) notFound()

  return (
    <>
      <PastEventHero
        title={retreat.hero.title}
        subtitle={retreat.hero.subtitle}
        date={retreat.date}
        venue={retreat.venue}
        city={retreat.city}
      />
      <PastEventInfo includedItems={retreat.includedItems} />
      <PastEventSchedule
        dateLabel={retreat.scheduleHeader.dateLabel}
        formatLabel={retreat.scheduleHeader.formatLabel}
        sections={retreat.schedule}
      />
    </>
  )
}
