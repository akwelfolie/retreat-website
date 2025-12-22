import { HomeHero } from '@/components/HomeHero'
import { TopicsAndThemes } from '@/components/TopicsAndThemes'
import { CallToAction } from '@/components/CallToAction'
import {SimpleFeaturesAlternating} from '@/components/SimpleFeaturesAlternating'
import { EmailCapture } from '@/components/EmailCapture'
import { ServiceList } from '@/components/ServiceList'
import { Team } from '@/components/Team'
import { SchedulePreview } from '@/components/SchedulePreview'
import { LocationTeaser } from '@/components/LocationTeaser'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      {/* Diagonal section separator */}
      <div className="relative h-16 w-full md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-void-800"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 0,100 100,100" />
        </svg>
      </div>
      <SimpleFeaturesAlternating />

{/* Diagonal section separator */}
{/* <div className="relative h-16 w-full md:h-32 lg:h-48">
  <svg
    className="absolute h-full w-full text-dark-800"
    preserveAspectRatio="none"
    viewBox="0 0 100 100"
    fill="currentcolor"
  >
    <polygon points="0,0 0,100 100,100" />
  </svg>
</div> */}
<div className="relative h-16 w-full bg-void-800 md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-void-900"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>
      <EmailCapture />



      <ServiceList />

      {/* Diagonal section separator
      <div className="relative h-16 w-full bg-dark-800 md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-dark-900"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div> */}

      {/* Diagonal section separator */}
<div className="relative h-16 w-full md:h-32 lg:h-48">
  <svg
    className="absolute h-full w-full text-void-800"
    preserveAspectRatio="none"
    viewBox="0 0 100 100"
    fill="currentcolor"
  >
    <polygon points="0,0 0,100 100,100" />
  </svg>
</div>

      <TopicsAndThemes />

      <div className="relative h-16 w-full bg-void-800 md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-void-900"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>

      <section className="bg-linear-to-b from-void-900 to-void-800 pb-12 pt-10 md:pb-16 md:pt-12">
        <Team />
      </section>

      {/* Diagonal section separator */}
      {/* <div className="relative h-16 w-full bg-void-800 md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-dark-900"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div> */}
      <SchedulePreview/>
      <div className="relative h-16 w-full bg-void-800 md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-void-900"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>
      <LocationTeaser/>
      <CallToAction />
    </>
  )
}
