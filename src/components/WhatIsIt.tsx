import Image, { type StaticImageData } from 'next/image'
import clsx from 'clsx'
import { Chip } from './ui/Chip'
import imgBreakBarriers from '/public/stock/break-barrier.png'
import imgAshAndNora from '/public/stock/ashandnora.png'
import imgCovers from '/public/stock/under-covers.jpg'
import imgSpiral from '/public/stock/color-spiral.jpg'
import imgChurch from '/public/stock/spiritual-church-2.png'

const features = [
  {
    tagline: 'The Retreat',
    headline: 'What makes UNLEASHED different',
    text: 'UNLEASHED is not a one-size-fits-all retreat. It’s a carefully held container that offers structure and choice, guidance and permission, depth and regulation. Come for the facilitators. Stay for the movement. Choose the depth that’s calling you.',
    image: {
      src: imgBreakBarriers,
      alt: 'Women connecting in a retreat setting',
    },
  },
  {
    tagline: 'The Experience',
    headline: 'A container for connection — built to last.',
    text: 'UNLEASHED is an immersive experience designed to help women move beyond internal limits and into embodied self-trust. Rather than offering a fleeting retreat high, it creates space for depth, connection, and honest exploration. Participants leave with experiences, language, and insight meant to integrate into real life — long after each event ends.',
    image: {
      src: imgSpiral,
      alt: 'Women connecting in a retreat setting',
    },
  },
  {
    tagline: "Who it's for",
    headline: 'Who UNLEASHED welcomes.',
    text: 'UNLEASHED welcomes women 21+, including trans women and non-binary or gender-nonconforming individuals who feel connected to womanhood. This experience is for those at any stage of their journey — whether exploring desire for the first time, deepening embodiment, or seeking meaningful connection. Curiosity, openness, and a willingness to be present are the only prerequisites.',
    image: {
      src: imgChurch,
      alt: 'Supportive group setting',
    },
  },
  {
    tagline: 'The Container',
    headline: 'Trauma-informed. Consent-forward. Held with care.',
    text: 'UNLEASHED is intentionally designed as a trauma-informed, consent-forward space. Emotional safety, autonomy, and respect are non-negotiable. Mental health providers will be on-site for grounding and support, and discrimination, boundary violations, or harmful behavior of any kind will result in immediate removal.',
    image: {
      src: imgCovers,
      alt: 'Safe and respectful retreat environment',
    },
  },
] satisfies Array<{
  tagline: string
  headline: string
  text: string
  image: { src: StaticImageData; alt: string }
}>

function RenderParagraphs({ text }: { text: string }) {
  return (
    <>
      {text.split('\n\n').map((paragraph, idx) => (
        <p
          key={idx}
          className={clsx(idx > 0 && 'mt-5', 'text-void-200 text-xl')}
        >
          {paragraph}
        </p>
      ))}
    </>
  )
}

export const WhatIsIt = () => {
  return (
    <section className="pt-10 pb-10 md:pt-20 md:pb-12 lg:pt-36">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        {features.map((item, index) => (
          <div
            key={`what-is-it-${index}`}
            className={clsx(
              'w-full px-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-x-12 lg:px-6 xl:gap-x-36',
              index > 0 && 'mt-10 md:mt-12 lg:mt-16',
            )}
          >
            {/* Text */}
            <div
              className={clsx(
                'flex flex-col justify-center px-4 sm:px-6 lg:px-0',
                index % 2 === 0 ? 'md:order-2 md:pl-0' : 'md:pr-0',
              )}
            >
              <div>
                <Chip>{item.tagline}</Chip>
              </div>

              <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:mt-6 lg:text-5xl">
                {item.headline}
              </h3>

              <div className="mt-4 md:mt-6">
                <RenderParagraphs text={item.text} />
              </div>
            </div>

            {/* Image */}
            <div
              className={clsx(
                'relative mt-10 aspect-12/11 w-full md:mt-0',
                index % 2 === 0
                  ? 'md:order-1 md:rounded-r-3xl lg:rounded-l-3xl'
                  : 'md:rounded-l-3xl lg:rounded-r-3xl',
              )}
            >
              <Image
                src={item.image.src}
                fill
                alt={item.image.alt}
                className={clsx(
                  'ring-void-300/20 absolute inset-0 size-full object-cover object-center shadow-xl ring-1',
                  index % 2 === 0
                    ? 'md:rounded-r-3xl lg:rounded-l-3xl'
                    : 'md:rounded-l-3xl lg:rounded-r-3xl',
                )}
                sizes="(min-width: 1280px) 34rem, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
