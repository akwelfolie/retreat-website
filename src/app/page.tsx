import { HomeHero } from '@/components/HomeHero'
import { WhyUnleashed } from '@/components/WhyUnleashed'
import { NextPreview } from '@/components/NextPreview'
import { WhatIsIt } from '@/components/WhatIsIt'
import { EmailCapture } from '@/components/EmailCapture'
import { TopicsAndThemes } from '@/components/TopicsAndThemes'
import { CallToAction } from '@/components/CallToAction'
import { PromoPopup } from '@/components/PromoPopup'

export default function HomePage() {
  return (
    <>
      <PromoPopup />
      <HomeHero />
      <NextPreview />
      <WhyUnleashed />
      <WhatIsIt />
      <EmailCapture />
      <TopicsAndThemes />
      <CallToAction />
    </>
  )
}
