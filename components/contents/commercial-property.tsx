import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, Zap } from "lucide-react"

export default function CommercialPropertyContent() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl">
                Commercial Property Insurance
              </h1>
              <div className="space-y-4 text-gray-700">
                <p>
                  Whether you rent or own your business space, having commercial property insurance can provide
                  financial coverage for physical loss or damage to your building, property and contents.
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
              <Image
                src="/property-mascot.png"
                alt="Commercial Property Insurance Mascot"
                fill
                className="object-contain"
                priority
              />
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
            <h2 className="mb-6 text-2xl font-bold text-gray-800">What is Commercial Property Insurance?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Commercial Property Insurance is a type of business insurance that provides coverage for physical assets
                such as buildings, equipment, inventory, furniture, and other property owned or used by a business.
              </p>
              <p>
                This insurance helps protect your business from financial losses due to damage or destruction of
                property caused by covered perils such as fire, theft, vandalism, and certain natural disasters.
              </p>
              <p>
                Whether you own your business premises or rent a space, commercial property insurance is essential for
                safeguarding your physical assets and ensuring business continuity in the event of property damage or
                loss.
              </p>
            </div>

            <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-800">
              What Does Commercial Property Insurance Cover?
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>A typical Commercial Property Insurance policy covers:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Buildings and structures owned or leased by your business</li>
                <li>Business equipment, tools, and machinery</li>
                <li>Inventory and merchandise</li>
                <li>Office furniture, fixtures, and supplies</li>
                <li>Computers, electronics, and data</li>
                <li>Outdoor signs, fencing, and landscaping</li>
                <li>
                  Loss of income or additional expenses incurred if your business is temporarily unable to operate due
                  to covered property damage (with business interruption coverage)
                </li>
              </ul>
              <p>
                Commercial Property Insurance typically covers losses caused by fire, lightning, explosion, windstorm,
                hail, smoke, theft, vandalism, and certain water damage. However, coverage for floods, earthquakes, and
                other specific perils may require additional policies or endorsements.
              </p>
            </div>

            <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-800">Who Needs Commercial Property Insurance?</h2>
            <div className="space-y-4 text-gray-700">
              <p>Commercial Property Insurance is essential for:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Business owners who own their commercial building or office space</li>
                <li>
                  Businesses that lease or rent space (to protect equipment, inventory, and improvements made to the
                  rented space)
                </li>
                <li>Retail stores with inventory and fixtures</li>
                <li>Offices with computers, furniture, and equipment</li>
                <li>Manufacturers with machinery, tools, and raw materials</li>
                <li>Restaurants with kitchen equipment, furniture, and food inventory</li>
                <li>Service businesses with specialized equipment</li>
              </ul>
              <p>
                Even if you operate your business from home, your homeowner's insurance may not provide adequate
                coverage for business property, making commercial property insurance a necessary consideration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
