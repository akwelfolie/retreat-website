import {
  IconArtboard,
  IconRocket,
  IconClipboardList,
} from '@tabler/icons-react'

const steps = [
  {
    label: '1. Collect Ideas',
    description:
      'We gather comprehensive insights about your product to fully understand your unique needs and vision.',
    icon: IconClipboardList,
  },
  {
    label: '2. Design Concept',
    description:
      'We creatively transform your vision and ideas into design drafts. We iterate until you are satisfied.',
    icon: IconArtboard,
  },
  {
    label: '3. Finalize Product',
    description:
      'Upon your approval, we finalize and refine the design and launch your uniquely tailored product to the market.',
    icon: IconRocket,
  },
]

export const Process = () => {
  return (
    <div className="max-w-(--breakpoint-xl) mx-auto w-full px-4 sm:px-6 lg:px-8">
      {/* Section text */}
      <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
        <p className="bg-linear-to-r from-void-600 to-void-700 inline-flex items-center justify-center rounded-r-full rounded-tl-full px-6 py-2 text-sm font-medium tracking-wide text-white">
          Our process
        </p>
        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Experience our simple design process
        </h2>
        <p className="text-void-300 mt-6 text-xl">
          Uncover the essence of your brand, through our highly collaborative
          and intuitively structured design process.
        </p>
      </div>
      {/* Process steps */}
      <div className="mx-auto mt-12 grid max-w-xl gap-10 lg:mt-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-12">
        {steps.slice(0, 3).map((step, index) => (
          <div key={`service-process-setp-${index}`} className="w-full">
            <span className="size-18 bg-linear-to-r from-void-600 to-void-700 mx-auto flex items-center justify-center rounded-3xl shadow-xl">
              {/* TablerIcon name: clipboard-list */}
              <step.icon className="text-void-300 h-10 w-10" stroke={1.5} />
            </span>
            <h3 className="mt-5 text-center text-2xl font-semibold text-white">
              {step.label}
            </h3>
            <p className="text-void-300 mt-2 text-center text-lg leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
