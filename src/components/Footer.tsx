import Link from 'next/link'
import { SocialLink } from '@/components/SocialLink'
import { LINKS, NAV_LINKS } from '@/config/links'

const contact = {
  address: {
    street: 'Based out of',
    city: 'Chicago',
    state: 'IL',
  },
  phone: '(708) 522-3520',
  email: 'info@thisisunleashed.com',
}

const footerLinks = NAV_LINKS

export const Footer = () => {
  return (
    <footer className="bg-void-900 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto grid gap-8 sm:max-w-3xl md:grid-cols-3 md:gap-y-12 lg:max-w-(--breakpoint-xl) lg:grid-cols-4">
        {/* Logo and copyright text */}
        <div className="flex flex-col lg:mx-auto">
          <div className="flex items-center">
            <Link href="/" className="group text-2xl font-black lg:block">
              <span className="text-white transition duration-200 ease-in-out group-hover:text-void-300">
                UNLEASHED
              </span>
            </Link>
          </div>
          <div className="mt-6 text-lg text-void-300 md:mt-8">
            © {new Date().getFullYear()} UNLEASHED.
            <br /> All rights reserved.
          </div>
        </div>
        {/* Contact information */}
        <div className="lg:mx-auto">
          <h6 className="text-xl font-semibold text-white">Get in touch</h6>
          <p className="mt-2 text-lg text-void-300">
            {contact.address.street}
            <br />
            {contact.address.city}, {contact.address.state}
          </p>
          <p className="mt-6 text-lg text-void-300">{contact.phone}</p>
          <p className="text-lg text-void-300">{contact.email}</p>
        </div>
        {/* Site links */}
        <div className="lg:mx-auto">
          <h6 className="text-xl font-semibold text-white">Company</h6>
          <ul className="mt-2 space-y-1 text-lg">
            {footerLinks.map((link, index) => (
              <li
                key={`footer-links-${index}`}
                className="font-medium text-void-300 hover:text-white"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Social links */}
        <div className="sm:col-span-3 lg:col-span-1 lg:mx-auto">
          <h6 className="text-xl font-semibold text-white">
            Follow us on social media
          </h6>
          <p className="mt-2 text-lg text-void-300">
            Stay connected and updated on our latest gatherings.
          </p>
          <div className="mt-4 w-full lg:mt-6">
            {/* Social links container */}
            <div className="flex justify-start space-x-4">
              <SocialLink href="https://www.instagram.com/unleashedmovement" icon="instagram" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
