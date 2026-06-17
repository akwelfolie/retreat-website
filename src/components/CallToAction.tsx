import { CTACard } from '@/components/ui/CTACard'
import { LINKS } from '@/config/links'

export const CallToAction = () => (
  <CTACard
    eyebrow="Something is always brewing"
    title="Don't miss what's next."
    body="UNLEASHED keeps growing — new events, new experiences, new ways to connect. Check out what's coming up and grab your spot before it's gone."
    buttonLabel="See What's Next"
    buttonHref="/next-up"
    secondButtonLabel="About Us"
    secondButtonHref="/about"
  />
)
