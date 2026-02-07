import Image from 'next/image'
import { SocialLink } from '@/components/SocialLink'
import { Chip } from './ui/Chip'
import { getAllPeople } from '@/content/people'

const team = getAllPeople()

export const Team = () => {
  return (
    <section className="px-4 pt-12 pb-14 sm:px-6 md:pt-16 md:pb-20 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        {/* Section text */}
        <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <Chip>Who will guide you</Chip>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Meet the voices of UNLEASHED
          </h2>
          <p className="text-void-200 mt-6 text-xl">
            Our speakers and guides are licensed clinicians, somatic
            practitioners, educators, and community leaders grounded in safety,
            curiosity, and care.
          </p>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 lg:gap-x-12 lg:gap-y-16">
          {team.map((member, i) => (
            <div
              key={`team-member-${i}`}
              className="flex flex-col items-center"
            >
              <Image
                src={member.squareImage}
                alt={member.name}
                className="ring-void-300/20 h-64 w-64 rounded-3xl object-cover object-center shadow-xl ring-1"
                sizes="16rem"
              />
              <div className="mt-4 text-center">
                <div className="text-xl font-semibold text-white">
                  {member.name}
                </div>
                <div className="text-void-300 text-lg font-medium">
                  {member.role}
                </div>

                {/* Social media links */}
                <div className="mt-2 flex justify-center space-x-2">
                  {member.socials.map((socialLink, j) => (
                    <SocialLink
                      key={`member-${i}-social-link-${j}`}
                      size="sm"
                      href={socialLink.href}
                      icon={socialLink.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
