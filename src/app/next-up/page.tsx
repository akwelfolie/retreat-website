import { retreat } from '@/content/retreats/30jun26'
import { getPeople } from '@/content/people'
import { TicketsHero } from '@/components/TicketsHero'
import { PracticalInfo } from '@/components/PracticalInfo'
import { Pricing } from '@/components/Pricing'
import { SpeakerDetails } from '@/components/SpeakerDetails'
import { LocationPreview } from '@/components/LocationPreview'
import { SchedulePreview } from '@/components/SchedulePreview'
import { CallToActionTickets } from '@/components/CallToActionTickets'

export const metadata = {
  title: 'Next Up — UNLEASHED',
  description:
    "Pricing, what's included, and everything you'll want to know before buying a ticket to the next UNLEASHED event.",
}

export default function NextUpPage() {
  const speakers = retreat.speakers.length > 0 ? getPeople(...retreat.speakers) : []

  return (
    <>
      <TicketsHero
        title={retreat.hero.title}
        subtitle={retreat.hero.subtitle}
        ticketUrl={retreat.hero.ticketUrl}
      />
      <PracticalInfo includedItems={retreat.includedItems} />
      <Pricing
        tiers={retreat.pricing}
        heading="A night of drag, plants & giving back"
        description="Your $25 ticket covers all bingo games, live performances by ROZBOT, and popcorn. Every dollar goes directly to Center On Halsted and Howard Brown. Additional drinks, snacks, raffle tickets, and split-the-pot entries are available at the door."
      />
      {speakers.length > 0 && <SpeakerDetails people={speakers} />}
      <LocationPreview />
      <SchedulePreview
        dateLabel={retreat.scheduleHeader.dateLabel}
        formatLabel={retreat.scheduleHeader.formatLabel}
        sections={retreat.schedule}
      />
      <CallToActionTickets />
    </>
  )
}
