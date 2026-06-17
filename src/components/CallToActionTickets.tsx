import { CTACard } from '@/components/ui/CTACard'
import { LINKS } from '@/config/links'

export const CallToActionTickets = () => (
  <CTACard
    eyebrow="Tickets available now · Space is limited"
    title="Get your daubers ready."
    body="Grab your ticket before they're gone — Pride Drag Plant Bingo with ROZBOT is one night only. All proceeds benefit Center On Halsted and Howard Brown."
    buttonLabel="Get Tickets"
    buttonHref={LINKS.tickets}
  />
)
