import { AboutHero } from '@/components/AboutHero'
import { CallToAction } from '@/components/CallToAction'
import { Founders } from '@/components/Founders'
import { SpeakerDetails } from '@/components/SpeakerDetails'
import { ValuesAndSafety } from '@/components/ValuesAndSafety'
import { getPeople } from '@/content/people'

export const metadata = {
  title: 'About us - UNLEASHED',
  description:
    'Learn about UNLEASHED — the vision, founders, and values behind our immersive events for women and women-aligned communities.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <Founders />

      <ValuesAndSafety />

      <CallToAction />
    </>
  )
}
