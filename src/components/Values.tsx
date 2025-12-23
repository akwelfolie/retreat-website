import { IconFlame, IconTrendingUp, IconUsers } from '@tabler/icons-react'

const values = [
  {
    value: 'Quality',
    text: 'We strive for excellence in all facets of our work, assuring high-end results.',
    icon: IconFlame,
  },
  {
    value: 'Improvement',
    text: 'We are committed to learning, adapting, and constantly elevating our game.',
    icon: IconTrendingUp,
  },
  {
    value: 'Team work',
    text: 'We believe in collective efforts, fostering a culture of collaboration and support.',
    icon: IconUsers,
  },
]

export const Values = () => {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 md:pb-16 md:pt-12 lg:px-8">
      <div className="max-w-(--breakpoint-xl) mx-auto w-full">
        {/* Section text */}
        <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <p className="bg-linear-to-r from-void-600 to-void-700 inline-flex items-center justify-center rounded-r-full rounded-tl-full px-6 py-2 text-sm font-medium tracking-wide text-white">
            Our values
          </p>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            The values that guide and define our work
          </h2>
          <p className="text-void-300 mt-6 text-xl">
            We are driven by a unique ethos, firmly rooted in a cohesive set of
            shared values that guide all our decisions and actions.
          </p>
        </div>

        {/* Value cards */}
        <div className="mt-12 grid gap-y-8 lg:mt-16 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-12">
          {values.slice(0, 3).map((item, index) => (
            <div
              key={`value-${index}`}
              className="bg-void-700 mx-auto w-full max-w-lg rounded-3xl px-4 py-14 shadow-xl lg:px-6 lg:py-16 xl:px-12"
            >
              <div className="mx-auto max-w-sm text-center">
                <span className="size-18 bg-linear-to-r from-void-800 to-void-900 mx-auto flex items-center justify-center rounded-3xl shadow-inner">
                  <item.icon
                    className="text-void-300 mx-auto h-10 w-10"
                    stroke={1.5}
                  />
                </span>
                <div className="mt-8 text-2xl font-bold text-white">
                  {item.value}
                </div>
                <p className="text-void-300 mt-3 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
