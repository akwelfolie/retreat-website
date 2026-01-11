import { CallToActionTickets } from "@/components/CallToActionTickets"
import { FAQ } from "@/components/FAQ"
import { PracticalInfo } from "@/components/PracticalInfo"
import { Pricing } from "@/components/Pricing"
import { TicketsHero } from "@/components/TicketsHero"



export const metadata = {
  title: 'Details — Unleashed',
  description:
    '[Ticket details, pricing, and booking information will be available here.]',
}

export default function ContactPage() {
  return (
    <>
      <TicketsHero/>
      <PracticalInfo />
      <Pricing/>
      <FAQ/>
      <CallToActionTickets/>
    </>
  )
}
