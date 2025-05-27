import { ComponentType } from "react"

import BuildersRiskContent from '@/components/contents/builders-risk'
import CommercialPropertyContent from '@/components/contents/commercial-property'
import AmazonSellerContent from '@/components/contents/amazon-seller'
import AirbnbContent from '@/components/contents/airbnb-content'
import FaqPage from '@/components/contents/faq-content'
import BlogPage from '@/components/contents/blog-content'
import ClaimsContent from '@/components/contents/claims-content'
import ContactUsContent from '@/components/contents/contact-content'
import OurStroryContent from '@/components/contents/story-content'
import PressContentPage from '@/components/contents/press-content'
import CareersContent from '@/components/contents/careers-content'
import ReviewsContent from '@/components/contents/reviews-content'

export default async function BusinessInsurancePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const slugs = {
    'builders-risk-insurance': <BuildersRiskContent />,
    'commercial-property-insurance': <CommercialPropertyContent />,
    'amazon-seller-insurance': <AmazonSellerContent />,
    'airbnb-insurance': <AirbnbContent />,
    'faq': <FaqPage />,
    'blog': <BlogPage />,
    'claims': <ClaimsContent />,
    'contact': <ContactUsContent />,
    'story': <OurStroryContent />,
    'press': <PressContentPage />,
    'careers': <CareersContent />,
    'reviews': <ReviewsContent />,
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {slugs[slug as keyof typeof slugs]}
      </main>
    </div>
  )
}