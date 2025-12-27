import Image, { type StaticImageData } from 'next/image'
import clsx from 'clsx'
import { Chip } from './ui/Chip'
import image1 from '/public/stock/UL-example-image-1920x1280.png'

const features = [
  {
    tagline: 'What this is',
    headline: 'Break the barriers. Own your embodiment.',
    text: "Unleashed aims to break down limiting beliefs and barriers holding women and women-aligned individuals back from owning their most embodied, authentic expressions of themselves and their sexuality.",
    image: {
      src: image1,
      alt: 'Unleashed retreat atmosphere',
    },
  },
  {
    tagline: 'What this is',
    headline: 'A container for connection — built to last.',
    text: "The experience curates a unique container for the participants to connect, create and play. Unlike typical retreat experiences which often feel fleeting, Unleashed gives its participants new knowledge and awareness to integrate into their day to day lives, with the hopes of fostering new relationships among the participants that too continue beyond the weekend.",
    image: {
      src: image1,
      alt: 'Women connecting in a retreat setting',
    },
  },
  {
    tagline: "Who it's for",
    headline: 'Who Unleashed welcomes.',
    text:
      "Unleashed welcomes all women (21+), including trans women, as well as non-binary and gender-nonconforming individuals who feel connected to womanhood. This retreat is for every stage of their life or sexual journey whether exploring desire for the first time, deepening pleasure, healing shame, or seeking community.\n\n" +
      'We are seeking women who are curious to learn more about themselves and others, who value supportive connections with other women, and who feel comfortable being vulnerable within a safe container.',
    image: {
      src: image1,
      alt: 'Supportive group setting',
    },
  },
  {
    tagline: 'Safety & boundaries',
    headline: 'A trauma-informed, respectful container.',
    text: 'Unleashed is a trauma-informed experience. Although there will be mental health providers on site to assist with grounding and containment, we are not providing mental health services.',
    image: {
      src: image1,
      alt: 'Safe and respectful retreat environment',
    },
  },
  {
    tagline: "Who it's not for",
    headline: 'Who this retreat is not open to.',
    text:
      'Racism, homophobia, transphobia, misogyny, slut-shaming, kink-shaming and discrimination or bullying of any kind will not be tolerated at Unleashed, and will warrant automatic dismissal from the retreat, without refund.\n\n' +
      'This retreat is not open to cisgender men, although we hope to provide an opportunity for a similar experience for men in the future.',
    image: {
      src: image1,
      alt: 'Unleashed retreat details',
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
    <section className="pb-10 pt-10 md:pb-12 md:pt-20 lg:pt-36">
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
                  'absolute inset-0 size-full ring-1 ring-void-300/20 object-cover object-center shadow-xl',
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
