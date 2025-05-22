import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FaqContent() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl mb-4">
            Frequently Asked Questions About Business Insurance
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about business insurance coverage, costs, and claims.
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="coverage">Coverage</TabsTrigger>
            <TabsTrigger value="cost">Cost</TabsTrigger>
            <TabsTrigger value="claims">Claims</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  What is business insurance and why do I need it?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    Business insurance is a collection of coverage types designed to protect businesses from financial
                    losses resulting from events that may occur during the normal course of business. These events can
                    include property damage, liability claims, employee-related risks, and business interruption.
                  </p>
                  <p>
                    You need business insurance because it helps protect your company's financial assets, intellectual
                    and physical property from lawsuits, theft, property damage, employee injuries and illnesses, and
                    other covered events that could otherwise be devastating to your business.
                  </p>
                  <p>
                    In many cases, certain types of business insurance are required by law (such as workers'
                    compensation insurance) or by contract (such as professional liability insurance for certain service
                    providers).
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  What types of business insurance are available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>Common types of business insurance include:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">General Liability Insurance:</span> Covers third-party bodily
                      injury, property damage, and personal injury claims.
                    </li>
                    <li>
                      <span className="font-medium">Professional Liability Insurance:</span> Also known as Errors and
                      Omissions (E&O) insurance, it protects against claims of negligence or inadequate work.
                    </li>
                    <li>
                      <span className="font-medium">Commercial Property Insurance:</span> Covers damage to your business
                      property from fire, theft, and certain natural disasters.
                    </li>
                    <li>
                      <span className="font-medium">Business Interruption Insurance:</span> Compensates for lost income
                      if your business can't operate due to covered property damage.
                    </li>
                    <li>
                      <span className="font-medium">Workers' Compensation Insurance:</span> Covers medical expenses and
                      lost wages for employees who are injured on the job.
                    </li>
                    <li>
                      <span className="font-medium">Cyber Liability Insurance:</span> Protects against data breaches and
                      other cyber incidents.
                    </li>
                    <li>
                      <span className="font-medium">Commercial Auto Insurance:</span> Covers vehicles used for business
                      purposes.
                    </li>
                    <li>
                      <span className="font-medium">Product Liability Insurance:</span> Protects against claims related
                      to products your business sells or manufactures.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  Is business insurance required by law?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    Some types of business insurance are legally required, while others are optional but recommended.
                    Legal requirements vary by province, industry, and business structure. Common legally required
                    insurance includes:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Workers' Compensation Insurance:</span> Required in all Canadian
                      provinces if you have employees.
                    </li>
                    <li>
                      <span className="font-medium">Commercial Auto Insurance:</span> Required for any vehicles used for
                      business purposes.
                    </li>
                    <li>
                      <span className="font-medium">Professional Liability Insurance:</span> Required for certain
                      professions like healthcare providers, lawyers, and accountants.
                    </li>
                  </ul>
                  <p>
                    Additionally, certain contracts (like commercial leases, client contracts, or loan agreements) may
                    require you to maintain specific types of insurance coverage.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="coverage" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  What does general liability insurance cover?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>General Liability Insurance typically covers:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Bodily Injury:</span> If a customer or third party is injured on
                      your business premises or due to your operations.
                    </li>
                    <li>
                      <span className="font-medium">Property Damage:</span> If your business damages someone else's
                      property.
                    </li>
                    <li>
                      <span className="font-medium">Personal and Advertising Injury:</span> Including libel, slander,
                      copyright infringement, and false advertising claims.
                    </li>
                    <li>
                      <span className="font-medium">Legal Defense Costs:</span> If your business is sued for a covered
                      claim, including attorney fees, court costs, and settlements.
                    </li>
                    <li>
                      <span className="font-medium">Medical Payments:</span> Covers medical expenses for minor injuries
                      to third parties, regardless of fault.
                    </li>
                  </ul>
                  <p>
                    General liability insurance does not cover employee injuries, professional mistakes, damage to your
                    own property, or intentional acts.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  What's the difference between commercial property and business interruption insurance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    <span className="font-medium">Commercial Property Insurance</span> covers physical damage to your
                    business property, including buildings, equipment, inventory, furniture, and fixtures due to covered
                    perils like fire, theft, vandalism, and certain natural disasters.
                  </p>
                  <p>
                    <span className="font-medium">Business Interruption Insurance</span> (also called Business Income
                    Insurance) covers the loss of income and ongoing expenses when your business cannot operate due to
                    covered property damage. For example, if a fire damages your store and you need to close for
                    repairs, business interruption insurance would help cover lost profits and fixed expenses like rent
                    and payroll during the closure period.
                  </p>
                  <p>
                    While commercial property insurance pays for the physical damage to your property, business
                    interruption insurance addresses the financial impact of being unable to operate. These coverages
                    often work together, with business interruption typically being triggered by a covered property
                    claim.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  Does my business need cyber liability insurance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    If your business collects, stores, or processes sensitive information (such as customer data,
                    payment information, or employee records), you should strongly consider cyber liability insurance.
                    This is especially important if:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>You store customer information, including names, addresses, or payment details</li>
                    <li>Your business relies heavily on computer systems or digital technology</li>
                    <li>You have an e-commerce component or online presence</li>
                    <li>You store sensitive data in the cloud</li>
                    <li>Your business is subject to data protection regulations</li>
                  </ul>
                  <p>
                    Cyber liability insurance helps cover costs associated with data breaches, including notification
                    expenses, credit monitoring for affected customers, legal fees, regulatory fines, and potential
                    lawsuits. It may also cover business interruption losses and recovery costs resulting from cyber
                    attacks.
                  </p>
                  <p>
                    Even small businesses are targets for cyber criminals, and the cost of recovering from a data breach
                    without insurance can be financially devastating.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="cost" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  How much does business insurance cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    Business insurance costs vary widely based on several factors. For small businesses in , basic
                    coverage might start around $500 to $1,000 per year, while more comprehensive coverage or higher
                    risk businesses might pay several thousand dollars annually.
                  </p>
                  <p>Factors that affect the cost of business insurance include:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Industry and Risk Level:</span> Higher-risk industries like
                      construction typically pay more than lower-risk businesses like consulting.
                    </li>
                    <li>
                      <span className="font-medium">Coverage Types and Limits:</span> More coverage types and higher
                      coverage limits increase premiums.
                    </li>
                    <li>
                      <span className="font-medium">Business Size:</span> Larger businesses with more employees,
                      locations, or revenue generally pay more.
                    </li>
                    <li>
                      <span className="font-medium">Claims History:</span> Previous claims can increase your premiums.
                    </li>
                    <li>
                      <span className="font-medium">Location:</span> Your business location affects rates due to local
                      risks, regulations, and claim patterns.
                    </li>
                    <li>
                      <span className="font-medium">Deductible Amount:</span> Higher deductibles typically result in
                      lower premiums.
                    </li>
                    <li>
                      <span className="font-medium">Experience:</span> Newer businesses might pay more than established
                      ones with good track records.
                    </li>
                  </ul>
                  <p>
                    The best way to determine your specific cost is to get a customized quote based on your business's
                    unique characteristics and needs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  How can I reduce my business insurance costs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>There are several strategies to help reduce your business insurance costs:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Bundle Policies:</span> Consider a Business Owner's Policy (BOP) or
                      package that combines multiple coverage types, often at a discount.
                    </li>
                    <li>
                      <span className="font-medium">Increase Deductibles:</span> Opting for higher deductibles can lower
                      your premiums, but ensure you can afford the out-of-pocket costs if you need to file a claim.
                    </li>
                    <li>
                      <span className="font-medium">Implement Risk Management Practices:</span> Safety programs,
                      security systems, employee training, and other risk reduction measures may qualify you for
                      discounts.
                    </li>
                    <li>
                      <span className="font-medium">Pay Annually:</span> Many insurers offer discounts for paying your
                      premium in full rather than monthly.
                    </li>
                    <li>
                      <span className="font-medium">Review and Update Coverage Regularly:</span> Ensure you're not
                      over-insured or paying for coverage you no longer need.
                    </li>
                    <li>
                      <span className="font-medium">Maintain Good Credit:</span> In some cases, insurers consider credit
                      scores when determining premiums.
                    </li>
                    <li>
                      <span className="font-medium">Shop Around and Compare Quotes:</span> Different insurers may offer
                      significantly different rates for the same coverage.
                    </li>
                    <li>
                      <span className="font-medium">Work with an Independent Broker:</span> They can help you find the
                      best coverage at competitive rates across multiple insurance providers.
                    </li>
                  </ul>
                  <p>
                    Remember that while cost is important, it shouldn't be the only factor in your decision. Ensure
                    you're getting adequate coverage for your business risks, as being underinsured can be far more
                    costly in the long run.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  Are business insurance premiums tax deductible?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    Yes, in , business insurance premiums are generally considered a legitimate business expense
                    and are tax deductible. This includes premiums for:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>General liability insurance</li>
                    <li>Professional liability insurance</li>
                    <li>Commercial property insurance</li>
                    <li>Business interruption insurance</li>
                    <li>Cyber liability insurance</li>
                    <li>Commercial auto insurance (for business vehicles)</li>
                    <li>Workers' compensation insurance</li>
                  </ul>
                  <p>
                    However, there are some exceptions. For example, life insurance premiums where the business is the
                    beneficiary are typically not deductible. Additionally, if you work from home and have a home-based
                    business, you may be able to deduct a portion of your homeowner's insurance as a business expense,
                    based on the percentage of your home used for business purposes.
                  </p>
                  <p>
                    It's always recommended to consult with a qualified tax professional or accountant for specific
                    advice regarding your business's tax deductions, as tax laws and regulations can change and may vary
                    based on your specific situation.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="claims" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  How do I file a business insurance claim?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>To file a business insurance claim, follow these steps:</p>
                  <ol className="ml-6 list-decimal space-y-2">
                    <li>
                      <span className="font-medium">Document the Incident:</span> Take photos, gather witness
                      statements, and collect any relevant information about the incident or damage.
                    </li>
                    <li>
                      <span className="font-medium">Report the Claim Promptly:</span> Contact your insurance provider as
                      soon as possible. Most policies require timely reporting, and delays could affect your coverage.
                    </li>
                    <li>
                      <span className="font-medium">Provide Required Information:</span> Be prepared to provide details
                      about the incident, including date, time, location, parties involved, and a description of what
                      happened.
                    </li>
                    <li>
                      <span className="font-medium">Complete Claim Forms:</span> Fill out any required claim forms
                      provided by your insurer.
                    </li>
                    <li>
                      <span className="font-medium">Work with the Claims Adjuster:</span> An adjuster will be assigned
                      to your case to assess the damage or investigate the claim.
                    </li>
                    <li>
                      <span className="font-medium">Keep Detailed Records:</span> Maintain copies of all claim-related
                      documents, correspondence with your insurer, and expenses incurred due to the incident.
                    </li>
                    <li>
                      <span className="font-medium">Follow Up Regularly:</span> Stay in communication with your
                      insurance company about the status of your claim.
                    </li>
                  </ol>
                  <p>
                    At Gapsurance, we strive to make the claims process as smooth as possible. You can report a claim by
                    calling our dedicated claims line at 1-888-654-6030 or by emailing details to claims@gapsurance.com.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  Will filing a claim increase my insurance premiums?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    Filing a claim may affect your insurance premiums, but the impact varies depending on several
                    factors:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Claim Type and Severity:</span> Larger claims or claims indicating
                      higher risk may have a greater impact on premiums.
                    </li>
                    <li>
                      <span className="font-medium">Claim History:</span> Multiple claims within a short period
                      typically have a more significant effect than a single isolated claim.
                    </li>
                    <li>
                      <span className="font-medium">Fault or Preventability:</span> Claims resulting from preventable
                      incidents or where your business is at fault may lead to higher premium increases.
                    </li>
                    <li>
                      <span className="font-medium">Industry and Business Type:</span> Some industries have higher
                      expected claim rates, so the impact of a single claim may be less significant.
                    </li>
                    <li>
                      <span className="font-medium">Insurance Provider:</span> Different insurers have different
                      approaches to adjusting premiums after claims.
                    </li>
                  </ul>
                  <p>
                    Not all claims will result in premium increases. Some insurers offer claim forgiveness for first
                    claims or small claims. Additionally, if the claim is for a catastrophic event that affected many
                    businesses in your area, the individual impact on your premium might be minimal.
                  </p>
                  <p>
                    When deciding whether to file a claim, consider the claim amount versus your deductible and the
                    potential long-term cost of premium increases. For minor incidents where the cost is close to your
                    deductible, it might be more economical to handle the expense without filing a claim.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  What should I do if my claim is denied?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>If your business insurance claim is denied, take these steps:</p>
                  <ol className="ml-6 list-decimal space-y-2">
                    <li>
                      <span className="font-medium">Review the Denial Letter:</span> Carefully read the explanation for
                      the denial to understand the insurer's reasoning.
                    </li>
                    <li>
                      <span className="font-medium">Check Your Policy:</span> Review your policy to verify if the denial
                      aligns with your coverage terms and exclusions.
                    </li>
                    <li>
                      <span className="font-medium">Request Clarification:</span> If the denial reason is unclear, ask
                      your insurer for a more detailed explanation.
                    </li>
                    <li>
                      <span className="font-medium">Gather Supporting Evidence:</span> Collect additional documentation
                      or evidence that might support your claim.
                    </li>
                    <li>
                      <span className="font-medium">File an Appeal:</span> Most insurers have a formal appeals process.
                      Submit a written appeal with any new information or evidence.
                    </li>
                    <li>
                      <span className="font-medium">Seek Professional Help:</span> Consider consulting with an insurance
                      broker, public adjuster, or attorney who specializes in insurance claims.
                    </li>
                    <li>
                      <span className="font-medium">Contact Regulatory Authorities:</span> If you believe the denial was
                      unfair, you can file a complaint with your provincial insurance regulator.
                    </li>
                  </ol>
                  <p>
                    At Gapsurance, we advocate for our clients during the claims process. If your claim has been denied,
                    contact our claims support team, and we'll help you understand your options and next steps.
                  </p>
                  <p>
                    Remember that claim denials are sometimes the result of misunderstandings or incomplete information,
                    and many denied claims are ultimately approved after appeal or clarification.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
          <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-6">
            Our insurance experts are here to help you find the right coverage for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-md bg-teal-500 px-6 py-2 font-medium text-white hover:bg-teal-600">
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              className="rounded-md border-teal-500 px-6 py-2 font-medium text-teal-500 hover:bg-teal-50"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
