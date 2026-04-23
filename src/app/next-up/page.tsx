import { retreat } from '@/content/retreats/06may26'
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
    "Pricing, what's included, and everything you'll want to know before buying a ticket to the next UNLEASHED retreat.",
}

export default function NextUpPage() {
  return (
    <>
      <TicketsHero
        title={retreat.hero.title}
        subtitle={retreat.hero.subtitle}
        ticketUrl={retreat.hero.ticketUrl}
      />
      <PracticalInfo includedItems={retreat.includedItems} />
      <Pricing tiers={retreat.pricing} />
      <SpeakerDetails people={getPeople(...retreat.speakers)} />
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
