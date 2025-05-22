import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ClaimsContent() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">Claims</h1>

        <div className="space-y-6 text-gray-700">
          <h2 className="text-xl font-semibold text-teal-600">Welcome to Gapsurance Claims!</h2>

          <p>
            We understand that dealing with insurance claims can be a stressful and overwhelming experience. From
            property damage to liability issues, unexpected incidents can disrupt your business and leave you uncertain.
            But don't worry. Our team is here to support you every step of the way.
          </p>

          <p>
            In addition to the reporting process (outlined below), we have compiled a comprehensive claims FAQ to
            address any questions or concerns you may have.
          </p>

          <p>Contact our team today, and let us guide you through the claims process with care and expertise.</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex justify-center">
            <div className="relative h-64 w-64">
              <Image src="/claim-document.png" alt="Insurance Claim Document" fill className="object-contain" />
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Reporting a Claim</h2>

            <p className="mb-4 text-gray-700">
              To submit a claim, please call us at <span className="font-semibold">1-888-654-6030</span> and have the
              following information handy:
            </p>

            <ol className="ml-6 list-decimal space-y-2 text-gray-700">
              <li>Business name or full name of business owner</li>
              <li>A description of events</li>
              <li>A police record (if applicable)</li>
              <li>Relevant photos or videos of the damage (if applicable)</li>
            </ol>

            <p className="mt-4 text-gray-700">
              You can also email details of your claims to us at{" "}
              <a href="mailto:claims@gapsurance.com" className="text-teal-500 hover:underline">
                claims@gapsurance.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-800">Claims FAQs</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">
                What should I do immediately after an incident?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  First, ensure everyone's safety and address any immediate concerns. Document the incident by taking
                  photos and notes about what happened. Then, contact us as soon as possible to report the claim, even
                  if you don't have all the details yet.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium">
                How quickly should I report a claim?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  You should report a claim as soon as possible after an incident occurs. Most policies require prompt
                  reporting, and delays can sometimes affect the claims process. We recommend reporting within 24-48
                  hours whenever possible.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium">What happens after I file a claim?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  After you file a claim, a claims adjuster will be assigned to your case. They'll review the details,
                  may request additional information, and will guide you through the next steps. The adjuster will
                  assess the damage, determine coverage, and work toward resolving your claim as quickly as possible.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium">
                How long does the claims process take?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  The timeline varies depending on the complexity of the claim. Simple claims might be resolved in a few
                  days, while more complex situations could take several weeks. We strive to process all claims
                  efficiently while ensuring thorough and fair assessments.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium">
                Will filing a claim affect my premium?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  The impact on your premium depends on various factors, including the nature of the claim, your claims
                  history, and your policy specifics. Not all claims result in premium increases. We're happy to discuss
                  any concerns you have about this during the claims process.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
