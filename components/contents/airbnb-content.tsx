import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, Zap } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AirbnbContent() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl">
                Airbnb Insurance
              </h1>
              <div className="space-y-4 text-gray-700">
                <p>
                  Property owners who are Airbnb hosts face liability risks. Protect your rental property with
                  customized Airbnb insurance.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                  <MapPin className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Trusted by over 350,000 Canadian small business owners!</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                  <DollarSign className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Save up to 35% on your insurance</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                  <Zap className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Get the best insurance quote in a few clicks!</p>
                </div>
              </div>
            </div>
            <div>
              <Button className="rounded-md bg-teal-500 px-8 py-6 text-lg font-medium text-white hover:bg-teal-600">
                Get a Free Quote
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-[400px]">
              <Image src="/airbnb-mascot.png" alt="Airbnb Insurance Mascot" fill className="object-contain" priority />
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="mb-8 text-2xl font-bold text-gray-800">
            Partnerships with over 50 leading Canadian insurance providers
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="h-12 w-24 grayscale transition-all hover:grayscale-0">
              <Image src="/partners/lloyds.png" alt="Lloyds" width={96} height={48} className="object-contain" />
            </div>
            <div className="h-12 w-24 grayscale transition-all hover:grayscale-0">
              <Image src="/partners/travelers.png" alt="Travelers" width={96} height={48} className="object-contain" />
            </div>
            <div className="h-12 w-24 grayscale transition-all hover:grayscale-0">
              <Image src="/partners/chubb.png" alt="Chubb" width={96} height={48} className="object-contain" />
            </div>
            <div className="h-12 w-24 grayscale transition-all hover:grayscale-0">
              <Image src="/partners/beazley.png" alt="Beazley" width={96} height={48} className="object-contain" />
            </div>
            <div className="h-12 w-24 grayscale transition-all hover:grayscale-0">
              <Image
                src="/partners/portage.png"
                alt="Portage Mutual"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="h-12 w-24 grayscale transition-all hover:grayscale-0">
              <Image src="/partners/cfc.png" alt="CFC" width={96} height={48} className="object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-center text-gray-800">Airbnb Insurance Information</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  Why Do Airbnb Hosts Need Insurance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    While Airbnb offers some protection through their AirCover program, it has significant limitations
                    and doesn't replace proper insurance. Here's why dedicated Airbnb insurance is essential:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Coverage Gaps:</span> Airbnb's coverage doesn't protect against many
                      common risks, including liability for guest injuries outside specific circumstances.
                    </li>
                    <li>
                      <span className="font-medium">Homeowner's Insurance Limitations:</span> Standard homeowner's
                      policies typically exclude or severely limit coverage for commercial activities like short-term
                      rentals.
                    </li>
                    <li>
                      <span className="font-medium">Property Damage:</span> While AirCover provides some property
                      protection, it may not cover all types of damage or the full replacement value.
                    </li>
                    <li>
                      <span className="font-medium">Liability Protection:</span> If a guest is injured on your property,
                      you could face significant legal and medical costs that exceed Airbnb's coverage.
                    </li>
                    <li>
                      <span className="font-medium">Business Income:</span> If your property becomes uninhabitable due
                      to damage, specialized insurance can cover lost rental income.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">
                  What Insurance Coverage Do Airbnb Hosts Need?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>Airbnb hosts typically need the following types of insurance coverage:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Short-Term Rental Insurance:</span> Specialized coverage designed
                      specifically for properties used as short-term rentals.
                    </li>
                    <li>
                      <span className="font-medium">Commercial General Liability:</span> Protects against claims of
                      bodily injury or property damage that guests might suffer during their stay.
                    </li>
                    <li>
                      <span className="font-medium">Property Insurance:</span> Covers damage to your building,
                      furnishings, and other contents from perils like fire, water damage, and theft.
                    </li>
                    <li>
                      <span className="font-medium">Business Income Coverage:</span> Replaces lost rental income if your
                      property becomes uninhabitable due to a covered loss.
                    </li>
                    <li>
                      <span className="font-medium">Personal Liability Umbrella Policy:</span> Provides additional
                      liability coverage beyond the limits of your primary policy.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold">
                  Understanding Airbnb's AirCover Program
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    Airbnb's AirCover program provides some protection, but it's important to understand its
                    limitations:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Host Damage Protection:</span> Covers up to $3 million in damage
                      protection, but has specific exclusions and may require extensive documentation.
                    </li>
                    <li>
                      <span className="font-medium">Liability Insurance:</span> Provides up to $1 million in liability
                      coverage, but only for bodily injury or property damage claims directly related to an Airbnb stay.
                    </li>
                    <li>
                      <span className="font-medium">Exclusions:</span> Doesn't cover wear and tear, damage to common
                      areas, certain valuables, or damage caused by pets.
                    </li>
                    <li>
                      <span className="font-medium">Claims Process:</span> Requires hosts to attempt to resolve issues
                      with guests first and file claims within 14 days of guest checkout.
                    </li>
                    <li>
                      <span className="font-medium">Not Comprehensive Insurance:</span> AirCover is not a replacement
                      for proper insurance and doesn't protect against many risks that hosts face.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-semibold">Common Risks for Airbnb Hosts</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>Airbnb hosts face several unique risks that proper insurance can help mitigate:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Property Damage:</span> Guests may accidentally or intentionally
                      damage your property, furnishings, or appliances.
                    </li>
                    <li>
                      <span className="font-medium">Liability Claims:</span> Guests could be injured on your property
                      and sue for medical expenses, pain and suffering, or other damages.
                    </li>
                    <li>
                      <span className="font-medium">Theft:</span> Guests or their visitors might steal valuable items
                      from your property.
                    </li>
                    <li>
                      <span className="font-medium">Loss of Income:</span> Property damage or other issues might prevent
                      you from renting your property, resulting in lost income.
                    </li>
                    <li>
                      <span className="font-medium">Third-Party Claims:</span> Neighbors might file claims for nuisance,
                      property damage, or other issues caused by your guests.
                    </li>
                    <li>
                      <span className="font-medium">Identity Theft:</span> Hosts may be vulnerable to identity theft if
                      personal information is accessible to guests.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl font-semibold">How to Get Airbnb Host Insurance</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>Getting insurance for your Airbnb property is a straightforward process:</p>
                  <ol className="ml-6 list-decimal space-y-2">
                    <li>
                      <span className="font-medium">Assess Your Needs:</span> Consider your property type, location,
                      rental frequency, and specific risks to determine what coverage you need.
                    </li>
                    <li>
                      <span className="font-medium">Get a Quote:</span> Fill out our online form to receive a customized
                      quote tailored to your specific property and hosting situation.
                    </li>
                    <li>
                      <span className="font-medium">Review Your Options:</span> Our insurance experts will help you
                      understand your coverage options and select the right policy.
                    </li>
                    <li>
                      <span className="font-medium">Purchase Your Policy:</span> Once you've selected the right
                      coverage, you can purchase your policy online or with the help of our team.
                    </li>
                    <li>
                      <span className="font-medium">Update Your Airbnb Profile:</span> Consider mentioning that you have
                      proper insurance coverage in your listing to reassure potential guests.
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-xl font-semibold">Frequently Asked Questions</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium">Isn't Airbnb's AirCover program enough to protect my property?</h4>
                      <p>
                        While AirCover provides some protection, it has significant limitations and exclusions. It's not
                        a substitute for proper insurance that covers all the risks associated with short-term rentals.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Will my homeowner's or landlord insurance cover my Airbnb rental?</h4>
                      <p>
                        Most standard homeowner's and landlord policies exclude or severely limit coverage for
                        short-term rentals. Some insurers may even cancel your policy if they discover you're hosting on
                        Airbnb without proper coverage.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">How much does Airbnb host insurance cost?</h4>
                      <p>
                        The cost varies depending on factors such as your property value, location, rental frequency,
                        and coverage needs. However, specialized short-term rental insurance is often more affordable
                        than many hosts expect, especially considering the protection it provides.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Do I need insurance if I only rent my property occasionally?</h4>
                      <p>
                        Yes. Even occasional rentals expose you to significant risks. Most homeowner's policies won't
                        cover commercial activities, regardless of frequency. The potential financial impact of an
                        uncovered claim can be substantial, even from a single rental.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        What if I rent out just a room in my home, not the entire property?
                      </h4>
                      <p>
                        You still need proper insurance. Renting out a room still constitutes a commercial activity that
                        most standard policies won't cover. Additionally, having guests in your home while you're
                        present creates its own set of liability risks.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 text-center">
              <Button className="rounded-md bg-teal-500 px-8 py-6 text-lg font-medium text-white hover:bg-teal-600">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
