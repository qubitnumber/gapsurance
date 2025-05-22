import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, Zap } from "lucide-react"

export default function BuildersRiskContent() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl">
                Builder's Risk Insurance
              </h1>
              <div className="space-y-4 text-gray-700">
                <p>
                  Are you building a dream home? Are you doing a significant renovation to your home or commercial
                  space?
                </p>
                <p>Protect your dream with Builder's Risk Insurance while your home/space is under construction.</p>
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
                src="/builder-mascot.png"
                alt="Builder Insurance Mascot"
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
            <h2 className="mb-6 text-2xl font-bold text-gray-800">What is Builder's Risk Insurance?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Builder's Risk Insurance, also known as Course of Construction Insurance, is a specialized type of
                property insurance that covers buildings or structures while they are under construction, renovation, or
                repair.
              </p>
              <p>
                This insurance protects against damage to the structure and materials during the construction phase,
                including damage from fire, wind, theft, vandalism, and other covered perils.
              </p>
              <p>
                Whether you're a homeowner building your dream house, a contractor working on a renovation project, or a
                developer constructing a commercial building, Builder's Risk Insurance provides essential protection for
                your investment during the vulnerable construction period.
              </p>
            </div>

            <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-800">What Does Builder's Risk Insurance Cover?</h2>
            <div className="space-y-4 text-gray-700">
              <p>A typical Builder's Risk Insurance policy covers:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>The structure under construction</li>
                <li>Materials and supplies being used in construction</li>
                <li>Temporary structures at the construction site</li>
                <li>Damage from fire, wind, theft, and vandalism</li>
                <li>
                  Some policies may include coverage for soft costs such as architectural fees, legal fees, and permits
                </li>
              </ul>
              <p>
                It's important to note that Builder's Risk Insurance typically does not cover accidents or injuries at
                the construction site, damage to tools or equipment, or design flaws. These would require separate
                insurance policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
