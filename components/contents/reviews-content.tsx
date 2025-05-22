import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MainNav from "@/components/main-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"

export default function ReviewsContent() {
  return (
    <div className="flex flex-col min-h-screen mt-20">
      <main className="flex-1">
      <section className="bg-white py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl">
                Reviews
              </h1>
              <p className="mt-4 text-xl text-gray-600">
              Read some of the reviews from our clients across 
              </p>
            </div>
          </div>
        </section>
        {/* Client Reviews Section */}
        <section className="py-3 md:py-6">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-8">
                <Card className="overflow-hidden border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      "I had a great experience with Gapsurance. The process was quick and easy, and I was able to get
                      the coverage I needed for my small business at a competitive price. The customer service was
                      excellent, and they answered all my questions promptly."
                    </p>
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-500 font-bold">
                        JD
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-800">John Doe</h3>
                        <p className="text-xs text-gray-500">Toronto, ON</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      "As a small business owner, finding the right insurance coverage can be overwhelming. Gapsurance
                      made it simple and straightforward. Their online platform is user-friendly, and I was able to get
                      a quote in minutes. Highly recommend!"
                    </p>
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-500 font-bold">
                        JS
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-800">Jane Smith</h3>
                        <p className="text-xs text-gray-500">Vancouver, BC</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      "I've been with Gapsurance for over two years now, and I couldn't be happier with their service.
                      They've helped me adjust my coverage as my business has grown, and their team is always responsive
                      and helpful. The online platform makes managing my policy a breeze."
                    </p>
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-500 font-bold">
                        RJ
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-800">Robert Johnson</h3>
                        <p className="text-xs text-gray-500">Calgary, AB</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      "I was pleasantly surprised by how easy it was to get insurance through Gapsurance. The whole
                      process took less than 15 minutes, and I received my policy documents the same day. The rates were
                      better than what I was quoted elsewhere, and the coverage is exactly what I needed for my
                      consulting business."
                    </p>
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-500 font-bold">
                        ML
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-800">Maria Lee</h3>
                        <p className="text-xs text-gray-500">Montreal, QC</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-12 text-center">
                <Button className="rounded-md bg-teal-500 px-8 py-3 text-lg font-medium text-white hover:bg-teal-600">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Video Section */}
        <section className="bg-white py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tighter text-gray-800 sm:text-3xl mb-8">
                Hear From Our Customers
              </h2>
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <div className="text-center text-white">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 mx-auto">
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
                        className="h-8 w-8"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Watch Customer Testimonials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
