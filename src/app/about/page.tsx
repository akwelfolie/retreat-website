import { AboutHero } from '@/components/AboutHero'
import { CallToAction } from '@/components/CallToAction'
import { Founders } from '@/components/Founders'
import { SpeakerDetails } from '@/components/SpeakerDetails'
import { ValuesAndSafety } from '@/components/ValuesAndSafety'
import { getPeople } from '@/content/people'

export const metadata = {
  title: 'About us - UNLEASHED',
  description:
    '[This page will introduce the vision behind UNLEASHED, its founders, and the intention of the retreat.]',
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
