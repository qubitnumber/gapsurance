import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function OurStroryContent() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">About Gapsurance</h1>

        <div className="space-y-6 text-gray-700">
          <p>
            Innovative insurance solutions for businesses
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex justify-center">
            <div className="relative h-64 w-64">
              <Image src="/claim-document.png" alt="Insurance Claim Document" fill className="object-contain" />
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Our Story</h2>

            <p className="mb-4 text-gray-700">
              Founded in 2016, Gapsurance is a Toronto-based technology company and leading source for business insurance.
            </p>

            <p className="mt-4 text-gray-700">
              Through our partner network of more than 50 insurance providers, and our highly regarded licensed brokers and client support team, we provide our customers with the protection they need with savings of up to 35% less than what our competitors offer, giving our customers the confidence they need to thrive in today's market.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-800">Our Mission</h2>

          <p>With over 250 employees located nationwide, our mission is simple: To empower small businesses across  to thrive by offering an honest, simplified, and modern approach to insurance.</p>
        </div>
      </div>
    </div>
  )
}
