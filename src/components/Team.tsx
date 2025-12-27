import Image from 'next/image'
import { SocialLink } from '@/components/SocialLink'
import { Chip } from './ui/Chip'
import { getAllPeople } from '@/content/people'

const team = getAllPeople()

export const Team = () => {
  return (
    <section className="px-4 pb-14 pt-12 sm:px-6 md:pb-20 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        {/* Section text */}
        <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <Chip>
            Who will guide you
          </Chip> 
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Meet the voices of Unleashed – TODO: revise this text
          </h2>
          <p className="mt-6 text-xl text-void-200">
            Our speakers and guides bring diverse backgrounds in embodiment, sexuality,
            education, and community building — all aligned around safety, curiosity, and care. – TODO: revise this text
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
                className="h-64 w-64 rounded-3xl ring-1 ring-void-300/20 hover:ring-1 hover:ring-gold-700 hover:-translate-y-2 object-cover object-center shadow-xl"
                sizes="16rem"
              />
              <div className="mt-4 text-center">
                <div className="text-xl font-semibold text-white">
                  {member.name}
                </div>
                <div className="text-lg font-medium text-void-300">
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
