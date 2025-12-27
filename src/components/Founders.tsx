import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'
import { Chip } from '@/components/ui/Chip'
import { SocialLink } from '@/components/SocialLink'
import { getFounders } from '@/content/people'


export const Founders = () => {
  const founders = getFounders()

  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-56 lg:pb-24">
          {founders.map((founder, index) => (
            <div
              key={`founder-${index}`}
              className="relative mx-auto max-w-lg lg:mx-0 lg:max-w-none"
            >
              {/* Image */}
              <div
                className={clsx(
                  'relative h-64 w-full rounded-t-3xl shadow-xl lg:h-full lg:w-[90%] lg:rounded-3xl lg:pt-[46%]',
                  index % 2 === 1 && 'lg:ml-auto',
                )}
              >
                <Image
                  src={founder.bigImage}
                  alt={founder.name}
                  fill
                  className="absolute inset-0 rounded-t-3xl object-cover lg:rounded-3xl"
                  sizes="(min-width: 1024px) 72rem, 100vw"
                  priority={index === 0}
                />

                {/* Mobile chip */}
                <div className="ml-6 mt-4 lg:hidden">
                  <Chip>{founder.role}</Chip>
                </div>
              </div>

              {/* Content card */}
              <div
                className={clsx(
                  'relative z-20 w-full rounded-b-3xl bg-void-500 p-6 shadow-xl sm:p-8 lg:absolute lg:-bottom-25 lg:h-full lg:w-1/3 lg:rounded-3xl lg:p-12',
                  index % 2 === 0 ? 'right-0' : 'left-0',
                )}
              >
                <div className="flex h-full flex-col justify-between">
                  {/* Desktop chip */}
                  <div className="hidden lg:block">
                    <Chip>{founder.role}</Chip>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white lg:text-4xl">
                      {founder.name}
                    </h3>
                    <p className="mt-4 text-base text-void-200 md:text-lg">
                      {founder.bio}
                    </p>
                  </div>

                  {/* Social links — reused from Team */}
                  <div className="mt-6 flex gap-2">
                    {founder.socials.map((social, i) => (
                      <SocialLink
                        key={`founder-${index}-social-${i}`}
                        size="lg"
                        href={social.href}
                        icon={social.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
