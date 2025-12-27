import clsx from 'clsx'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { SocialLink } from '@/components/SocialLink'

const addresses = [
  {
    street: '123 West Kanye Street',
    city: 'Los Angeles',
    state: 'CA',
    zip: 90001,
  },
  {
    street: '456 East Drake Street',
    city: 'San Francisco',
    state: 'CA',
    zip: 94111,
  },
  {
    street: '789 North Weezy Street',
    city: 'New York',
    state: 'NY',
    zip: 10001,
  },
  {
    street: '101 South Hova Street',
    city: 'Miami',
    state: 'FL',
    zip: 33101,
  },
]

const formFields = [
  {
    name: 'name',
    label: 'Name *',
    type: 'text',
    placeholder: 'John Doe',
    required: true,
  },
  {
    name: 'email',
    label: 'Email *',
    type: 'email',
    placeholder: 'john@email.com',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    placeholder: '(123) 456-789',
    required: false,
  },
  {
    name: 'message',
    label: 'Message *',
    type: 'textarea',
    placeholder: 'Message',
    required: true,
  },
]

export const metadata = {
  title: 'Tickets — Unleashed',
  description:
    '[Placeholder — ticket details, pricing, and booking information will be available here.]',
}

export default function ContactPage() {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-16">
          <div className="flex flex-col items-start justify-between sm:items-center lg:items-start">
            {/* Section header */}
            <div>
              <div className="w-full text-left sm:text-center lg:text-left">
                <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-linear-to-r from-void-600 to-void-700 px-6 py-2 text-sm font-medium tracking-wide text-white">
                  Contact
                </p>
              </div>
              <div className="mt-4 w-full text-left sm:text-center md:mt-5 lg:text-left">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                  Get in touch
                </h1>
                <p className="mx-auto mt-3 max-w-lg text-xl text-void-300 sm:max-w-2xl md:mt-5">
                  We'd love to hear from you. Fill in the form and we'll get
                  back to you shortly.
                </p>
              </div>
            </div>
            {/* Company locations */}
            <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:grid-rows-2 sm:gap-12 lg:mt-0">
              {addresses.map((address, index) => (
                <div key={`address-${index}`}>
                  <h5 className="text-lg font-bold text-white">
                    {address.city}
                  </h5>
                  <p className="mt-1 text-base text-void-300">
                    {address.street}
                    <br />
                    {address.city}, {address.state} {address.zip}
                  </p>
                </div>
              ))}
            </div>
            {/* Social media links */}
            <div className="mt-8 w-full sm:mt-10 lg:mt-0">
              <h6 className="text-left text-lg font-semibold text-white sm:text-center lg:text-left">
                Follow us
              </h6>
              {/* Links container */}
              <div className="mt-3 flex justify-start space-x-4 sm:justify-center lg:justify-start">
                <SocialLink href="#0" icon="instagram" />
                <SocialLink href="#0" icon="facebook" />
                <SocialLink href="#0" icon="twitter" />
              </div>
            </div>
          </div>
          {/* Contact form card */}
          <div className="mt-12 w-full lg:mt-0">
            <div className="mx-auto w-full rounded-3xl bg-void-700 px-4 py-12 shadow-xl sm:p-16 lg:ml-auto lg:mr-0 lg:p-14 xl:p-16">
              {/* Contact form */}
              <form action="#">
                {formFields.map((field, index) => (
                  <div
                    key={`contact-form-field-${index}}`}
                    className={clsx(index > 0 && 'mt-6')}
                  >
                    <label
                      htmlFor={field.name}
                      className="ml-0.5 text-sm font-medium text-void-300"
                    >
                      {field.label}
                    </label>

                    {field.type == 'textarea' && (
                      <textarea
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        rows={5}
                        className="mt-2 w-full rounded-2xl border-2 border-solid border-void-800 bg-void-800 p-4 text-sm font-medium text-white outline-hidden transition duration-200 ease-in-out focus:border-void-600 focus:outline-hidden"
                        required={field.required}
                      />
                    )}

                    {['text', 'email'].includes(field.type) && (
                      <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="mt-2 h-14 w-full rounded-2xl border-2 border-solid border-void-800 bg-void-800 p-4 text-sm font-medium text-white outline-hidden transition duration-200 ease-in-out focus:border-void-600 focus:outline-hidden"
                        required={field.required}
                      />
                    )}
                  </div>
                ))}

                <div className="mt-6 flex justify-start">
                  <PrimaryButton type="submit">Send message</PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
