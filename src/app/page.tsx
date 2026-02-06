import { HomeHero } from '@/components/HomeHero'
import { TopicsAndThemes } from '@/components/TopicsAndThemes'
import { CallToAction } from '@/components/CallToAction'
import { WhatIsIt } from '@/components/WhatIsIt'
import { EmailCapture } from '@/components/EmailCapture'
import { ServiceList } from '@/components/ServiceList'
import { Team } from '@/components/Team'
import { SchedulePreviewShort } from '@/components/SchedulePreviewShort'
import { LocationTeaser } from '@/components/LocationTeaser'
import { WhyUnleashed } from '@/components/WhyUnleashed'
import { SchedulePreview } from '@/components/SchedulePreview'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyUnleashed />
      <SchedulePreviewShort />
      <WhatIsIt />
      <EmailCapture />
      <ServiceList />
      <Team />
      <LocationTeaser />
      <CallToAction />
    </>
  )
}
