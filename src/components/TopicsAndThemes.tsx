import clsx from 'clsx'
import { Chip } from './Chip'

const topics = [
  'Community building, unlearning “female rivalry”',
  'Releasing shame, reclaiming womanhood & femininity',
  'Sexuality & body literacy',
  'Pelvic health & safer sex',
  'Hormones, aging & sexuality',
  'Consent, boundaries & communication skills',
  'Dating, relationships, alternative relationship structures',
  'Sensuality and embodied movement',
  'Sacred sexuality & tantra foundations',
  'Kink/BDSM foundations',
]

type TopicColumn = {
  items: string[]
  offsetClassName?: string
}

function splitIntoColumns(items: string[]): TopicColumn[] {
  // 10 items -> 3 / 4 / 3 (looks balanced)
  return [
    { items: items.slice(0, 3) },
    { items: items.slice(3, 7) },
    { items: items.slice(7, 10) },
  ]
}

const columns = splitIntoColumns(topics)

export const TopicsAndThemes = () => {
  return (
    <section className="px-4 py-10 sm:px-6 md:py-12 lg:px-8">
      {/* Section text */}
      <div className="mx-auto max-w-xl text-center md:max-w-2xl lg:max-w-(--breakpoint-xl) lg:text-left">
        <Chip>
          Topics & Themes
        </Chip> 

        <div className="mt-6 grid w-full gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              What we’ll explore together
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xl text-void-200">
              These are themes that will show up throughout the weekend — not
              rigid “sessions”.
            </p>
          </div>
        </div>
      </div>

      {/* Topics grid */}
      <div className="mx-auto mt-12 w-full max-w-(--breakpoint-xl) lg:mt-16">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {columns.map((col, colIndex) => (
            <div
              key={`topics-col-${colIndex}`}
              className={clsx(
                // Subtle “stagger” like the original component’s offsets
                colIndex === 0 && 'lg:pt-6',
                colIndex === 2 && 'lg:pt-10',
              )}
            >
              <div className="space-y-6">
              {col.items.map((topic, index) => (
                <div
                  key={`topic-${colIndex}-${index}`}
                  className={`
                    rounded-3xl bg-void-500 px-8 py-6 shadow-xl sm:px-10
                    ring-1 ring-white/10
                    transition-all duration-300
                    hover:-translate-y-3
                    ${index % 2 === 0 ? 'hover:bg-blue-800/80' : 'hover:bg-pink-800/80'}
                  `}
                >
                  <p className="text-lg font-semibold text-void-100">{topic}</p>
                </div>
              ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
