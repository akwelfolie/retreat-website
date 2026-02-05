import { AboutHero } from '@/components/AboutHero'
import { CallToAction } from '@/components/CallToAction'
import { Founders } from '@/components/Founders'
import { SpeakerDetails } from '@/components/SpeakerDetails'
import { ValuesAndSafety } from '@/components/ValuesAndSafety'

export const metadata = {
  title: 'About us - Unleashed',
  description:
    '[This page will introduce the vision behind Unleashed, its founders, and the intention of the retreat.]',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <SpeakerDetails />

      <Founders />

      <ValuesAndSafety />

      <CallToAction />
    </>
  )
}
