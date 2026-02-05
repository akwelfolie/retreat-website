import { HomeHero } from '@/components/HomeHero'
import { TopicsAndThemes } from '@/components/TopicsAndThemes'
import { CallToAction } from '@/components/CallToAction'
import { WhatIsIt } from '@/components/WhatIsIt'
import { EmailCapture } from '@/components/EmailCapture'
import { ServiceList } from '@/components/ServiceList'
import { Team } from '@/components/Team'
import { SchedulePreviewShort } from '@/components/SchedulePreviewShort'
import { LocationTeaser } from '@/components/LocationTeaser'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <EmailCapture />
      <WhatIsIt />
      <ServiceList />
      {/* <TopicsAndThemes />    */}
      <Team />
      <SchedulePreviewShort />
      <LocationTeaser />
      <CallToAction />
    </>
  )
}
