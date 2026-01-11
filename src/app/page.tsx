import { HomeHero } from '@/components/HomeHero'
import { TopicsAndThemes } from '@/components/TopicsAndThemes'
import { CallToAction } from '@/components/CallToAction'
import {WhatIsIt} from '@/components/WhatIsIt'
import { EmailCapture } from '@/components/EmailCapture'
import { ServiceList } from '@/components/ServiceList'
import { Team } from '@/components/Team'
import { SchedulePreview } from '@/components/SchedulePreview'
import { LocationTeaser } from '@/components/LocationTeaser'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <EmailCapture />
      <WhatIsIt/>
      <ServiceList />
      <TopicsAndThemes />   
      <Team />
      <SchedulePreview/>
      <LocationTeaser/>
      <CallToAction /> 
    </>
  )
}
