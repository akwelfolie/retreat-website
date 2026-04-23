import { CTACard } from '@/components/ui/CTACard'
import { LINKS } from '@/config/links'

export const CallToAction = () => (
  <CTACard
    eyebrow="May 6, 2026 · 6:30–9:30 PM · Chicago, IL"
    title="Awaken Your Senses"
    body="Step out of the noise and into your body. A 3-hour immersive experience guided by Josephine Lauer and Ash Summers — consent-based, safely held, and designed to reconnect you to yourself and others."
    buttonLabel="Buy Tickets"
    buttonHref={LINKS.tickets}
    secondButtonLabel="More Details"
    secondButtonHref="/next-up"
  />
)
