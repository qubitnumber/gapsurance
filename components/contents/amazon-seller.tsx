import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, Zap } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AmazonSellerContent() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl">
                Amazon Seller Insurance
              </h1>
              <p className="text-xl font-medium text-teal-500">
                Coverage Available For Canadian Domiciled Sellers Only
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  Product liability insurance for Amazon sellers provides financial protection for retailers from the
                  risks and costs associated with third-party claims or lawsuits.
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
                src="/amazon-seller-mascot.png"
                alt="Amazon Seller Insurance Mascot"
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
            <h2 className="mb-8 text-2xl font-bold text-center text-gray-800">Amazon Seller Insurance Information</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  Why Do Amazon Sellers Need Insurance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    Amazon requires sellers to have product liability insurance if they exceed certain sales thresholds.
                    Specifically, Amazon's terms of service require sellers to obtain commercial liability insurance
                    with limits of at least $1 million per occurrence and in aggregate if their sales exceed $10,000 in
                    any month.
                  </p>
                  <p>
                    Beyond Amazon's requirements, having proper insurance is essential for protecting your business from
                    potential claims related to products you sell. Even if you're not manufacturing the products
                    yourself, as a seller, you can be held liable for damages or injuries caused by products you
                    distribute.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">
                  What Insurance Coverage Do Amazon Sellers Need?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>Amazon sellers typically need the following types of insurance coverage:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Product Liability Insurance:</span> Covers claims related to bodily
                      injury or property damage caused by products you sell.
                    </li>
                    <li>
                      <span className="font-medium">Commercial General Liability (CGL):</span> Provides broader coverage
                      for various business risks, including third-party bodily injury, property damage, and advertising
                      injury.
                    </li>
                    <li>
                      <span className="font-medium">Product Recall Insurance:</span> Covers costs associated with
                      recalling defective or unsafe products from the market.
                    </li>
                    <li>
                      <span className="font-medium">Cyber Liability Insurance:</span> Protects against data breaches and
                      cyber attacks that could compromise customer information.
                    </li>
                    <li>
                      <span className="font-medium">Business Interruption Insurance:</span> Covers lost income if your
                      business operations are disrupted due to a covered event.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold">Amazon's Insurance Requirements</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>Amazon requires sellers to have insurance that meets the following criteria:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      Commercial General Liability (CGL) coverage with limits of at least $1 million per occurrence and
                      in aggregate
                    </li>
                    <li>Coverage for product liability, bodily injury, and property damage</li>
                    <li>Amazon.com, Inc., and its affiliates must be named as additional insureds on the policy</li>
                    <li>The insurance must cover all products you sell on Amazon's platform</li>
                    <li>
                      The policy must be issued by an insurance company with global claim handling capability and a
                      financial rating of S&P A- and/or AM Best A- or better
                    </li>
                  </ul>
                  <p>
                    Meeting these requirements not only keeps you compliant with Amazon's terms of service but also
                    provides essential protection for your business.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-semibold">
                  How to Get Amazon Seller Insurance
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>Getting insurance for your Amazon business is a straightforward process:</p>
                  <ol className="ml-6 list-decimal space-y-2">
                    <li>
                      <span className="font-medium">Assess Your Needs:</span> Determine what types of coverage you need
                      based on your products, sales volume, and business operations.
                    </li>
                    <li>
                      <span className="font-medium">Get a Quote:</span> Fill out our online form to receive a customized
                      quote tailored to your specific business needs.
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
                      <span className="font-medium">Submit Proof to Amazon:</span> After obtaining your policy, you'll
                      need to submit proof of insurance to Amazon through your Seller Central account.
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl font-semibold">
                  Common Insurance Claims for Amazon Sellers
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>Amazon sellers commonly face the following types of claims:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Product Liability Claims:</span> A customer is injured by a product
                      you sold, such as an electronic device that overheats and causes burns.
                    </li>
                    <li>
                      <span className="font-medium">Property Damage Claims:</span> A product you sold damages a
                      customer's property, such as a defective appliance that causes water damage.
                    </li>
                    <li>
                      <span className="font-medium">Product Recall Expenses:</span> You need to recall a product due to
                      a safety issue or defect.
                    </li>
                    <li>
                      <span className="font-medium">Intellectual Property Claims:</span> You're accused of selling
                      products that infringe on someone else's copyright, trademark, or patent.
                    </li>
                    <li>
                      <span className="font-medium">Business Interruption:</span> Your business operations are disrupted
                      due to a covered event, such as a fire at your warehouse.
                    </li>
                  </ul>
                  <p>
                    Having the right insurance coverage can help protect your business from the financial impact of
                    these and other potential claims.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-xl font-semibold">Frequently Asked Questions</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium">Do I need insurance if I'm a small Amazon seller?</h4>
                      <p>
                        If your sales exceed $10,000 in any month, Amazon requires you to have insurance. Even if you
                        don't meet this threshold, insurance is still recommended to protect your business from
                        potential claims.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">How much does Amazon seller insurance cost?</h4>
                      <p>
                        The cost varies depending on factors such as your sales volume, product types, and coverage
                        needs. Small sellers might pay as little as $500 to $1,000 per year for basic coverage.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Does my homeowner's or renter's insurance cover my Amazon business?
                      </h4>
                      <p>
                        Typically, no. Personal insurance policies usually exclude business activities. You'll need a
                        separate commercial policy to cover your Amazon selling business.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">What if I sell on multiple platforms, not just Amazon?</h4>
                      <p>
                        Your insurance policy can be designed to cover all your e-commerce activities across different
                        platforms. Be sure to disclose all your sales channels when applying for insurance.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">How do I prove to Amazon that I have insurance?</h4>
                      <p>
                        You'll need to upload a Certificate of Insurance (COI) to your Amazon Seller Central account.
                        The certificate must show that your policy meets Amazon's requirements, including naming Amazon
                        as an additional insured.
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
