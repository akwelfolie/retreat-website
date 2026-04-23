import { CTACard } from '@/components/ui/CTACard'
import { LINKS } from '@/config/links'

export const CallToActionTickets = () => (
  <CTACard
    eyebrow="Tickets available now · Limited capacity"
    title="Tickets are live. Become UNLEASHED."
    body="Secure your spot for UNLEASHED — an immersive retreat designed for connection, embodiment, and self-expression."
    buttonLabel="I want a ticket"
    buttonHref={LINKS.tickets}
  />
)
