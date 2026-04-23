import Image from 'next/image'
import { Chip } from '@/components/ui/Chip'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton'
import { SocialLink } from '@/components/SocialLink'
import { LocationPreview } from '@/components/LocationPreview'
import { getPeople } from '@/content/people'
import { LINKS } from '@/config/links'
import { retreat } from '@/content/retreats/06may26'

const featured = getPeople(...retreat.speakers)

export const NextPreview = () => {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Chip>May 6 · 6:30–9:30 PM · Chicago, IL</Chip>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Mini-UNLEASHED: Awaken Your Senses
          </h2>

          <p className="text-void-200 mt-4 text-xl">
            Step out of the noise and into your body. A 3-hour guided journey through connection,
            presence, and raw expression — consent-based, safely held, and designed to reconnect
            you to yourself and others.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href={LINKS.tickets}>Buy Tickets</PrimaryButton>
            <SecondaryButton href="/next-up">More Details</SecondaryButton>
          </div>
        </div>

        {/* Featured facilitators */}
        <div className="mx-auto mt-14 grid max-w-2xl gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-12">
          {featured.map((member, i) => (
            <div key={`next-preview-member-${i}`} className="flex flex-col items-center">
              <Image
                src={member.squareImage}
                alt={member.name}
                width={256}
                height={256}
                className="ring-void-300/20 h-64 w-64 rounded-3xl object-cover object-center shadow-xl ring-1"
                sizes="16rem"
              />
              <div className="mt-4 text-center">
                <div className="text-xl font-semibold text-white">{member.name}</div>
                <div className="text-void-300 text-lg font-medium">{member.role}</div>
                <div className="mt-2 flex justify-center space-x-2">
                  {member.socials.map((socialLink, j) => (
                    <SocialLink
                      key={`next-preview-member-${i}-social-${j}`}
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

        {/* Location */}
        <LocationPreview />
      </div>
    </section>
  )
}
