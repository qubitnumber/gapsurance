'use client'

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-white ml-3">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32 ml-">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Save More When It Matters Most
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Your deductible just got lighter. With our smart insurance solutions, you can save on out-of-pocket costs and keep more money where it belongs — in your wallet. Because peace of mind shouldn’t come with a high price tag.
              </p>
              <Button
                className="rounded-md bg-teal-500 px-8 py-3 text-lg font-medium text-white hover:bg-teal-600"
                asChild
              >
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[200px] w-[200px] md:h-[300px] md:w-[300px]">
                <Image src="/save-deductible.png" alt="Gapsurance Mascot" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-white border-t border-b border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              We’re helping policyholders reduce their deductibles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              So when the unexpected happens, you're not hit twice. Let’s make coverage more affordable, together. Because peace of mind shouldn’t break the bank.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-teal-500 mb-2">35%</div>
                <p className="text-gray-600">Average savings on insurance</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-teal-500 mb-2">4.8/5</div>
                <p className="text-gray-600">Customer satisfaction rating</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-teal-500 mb-2">5 min</div>
                <p className="text-gray-600">Average time to get a quote</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dedicated Claims Service Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Dedicated Claims Service</h2>
                <p className="text-lg text-gray-600 mb-8">
                  When you need us most, our dedicated claims team is here to help. We provide personalized support
                  throughout the entire claims process, ensuring a smooth and stress-free experience.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-700">24/7 claims reporting by phone or email</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-700">Personalized claims advocate assigned to your case</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-gray-700">Fast and fair claims resolution process</p>
                  </li>
                </ul>
                <Button
                  className="rounded-md bg-teal-500 px-8 py-3 text-lg font-medium text-white hover:bg-teal-600"
                  asChild
                >
                  <Link href="/claims">Learn More About Claims</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                  <Image src="/claims.png" alt="Dedicated Claims Service" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Most Recent Reviews Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Most Recent Reviews</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See what our customers are saying about their experience with Gapsurance
              </p>
              <div className="flex justify-center items-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-lg font-medium">4.8 out of 5 based on 4,000+ reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-md border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">
                    "Great experience with Gapsurance! The process was quick and easy, and I was able to get the
                    coverage I needed for my small business at a competitive price. Highly recommend!"
                  </p>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-500 font-bold">
                      JD
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-800">John D.</h3>
                      <p className="text-xs text-gray-500">Toronto, ON • 2 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">
                    "As a small business owner, finding the right insurance coverage can be overwhelming. Gapsurance
                    made it simple and straightforward. Their online platform is user-friendly, and I was able to get a
                    quote in minutes."
                  </p>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-500 font-bold">
                      SM
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-800">Sarah M.</h3>
                      <p className="text-xs text-gray-500">Vancouver, BC • 1 week ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md border-0 hidden lg:block">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">
                    "I've been with Gapsurance for over two years now, and I couldn't be happier with their service.
                    They've helped me adjust my coverage as my business has grown, and their team is always responsive
                    and helpful."
                  </p>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-500 font-bold">
                      RJ
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-800">Robert J.</h3>
                      <p className="text-xs text-gray-500">Calgary, AB • 2 weeks ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 text-center">
              <Button
                variant="outline"
                className="rounded-md border-teal-500 text-teal-500 hover:bg-teal-50 hover:text-teal-600"
                asChild
              >
                <Link href="/about/reviews">View All Reviews</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* We Love Small Business Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">We Love Saving Deductibles</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Gapsurance is dedicated to supporting entrepreneurs with affordable insurance solutions tailored to their unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-teal-500"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Affordable Coverage</h3>
                <p className="text-gray-600">
                  We work with over 50 insurance providers to find you the best rates for your business needs.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-teal-500"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tailored Solutions</h3>
                <p className="text-gray-600">
                  Every business is unique. We provide customized insurance packages that fit your specific industry and needs.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-teal-500"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dedicated Support</h3>
                <p className="text-gray-600">
                  Our team of licensed insurance advisors is here to help you every step of the way, from quote to claim.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                className="rounded-md bg-teal-500 px-8 py-3 text-lg font-medium text-white hover:bg-teal-600"
                asChild
              >
                <Link href="/quote">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}
