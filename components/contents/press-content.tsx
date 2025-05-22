import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MainNav from "@/components/main-nav"
import { Card, CardContent } from "@/components/ui/card"

export default function PressContentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl">
                Press & Media
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                The latest news, announcements, and media coverage about Gapsurance.
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="bg-gray-50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter text-gray-800 sm:text-3xl mb-12">Press Releases</h2>
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/4">
                      <p className="text-sm text-gray-500">May 15, 2023</p>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Gapsurance Announces $10 Million Series B Funding to Accelerate Growth
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Funding will be used to expand product offerings and enhance technology platform to better serve
                        Canadian small businesses.
                      </p>
                      <Link
                        href="#"
                        className="text-teal-500 font-medium hover:text-teal-600 hover:underline inline-flex items-center"
                      >
                        Read More
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
                          className="ml-1 h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/4">
                      <p className="text-sm text-gray-500">March 8, 2023</p>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Gapsurance Launches New Cyber Insurance Product for Small Businesses
                      </h3>
                      <p className="text-gray-600 mb-4">
                        New offering provides affordable protection against growing cyber threats for Canadian small
                        businesses.
                      </p>
                      <Link
                        href="#"
                        className="text-teal-500 font-medium hover:text-teal-600 hover:underline inline-flex items-center"
                      >
                        Read More
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
                          className="ml-1 h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/4">
                      <p className="text-sm text-gray-500">January 12, 2023</p>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Gapsurance Named One of 's Top Growing Companies
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Recognition highlights company's rapid growth and innovation in the insurtech sector.
                      </p>
                      <Link
                        href="#"
                        className="text-teal-500 font-medium hover:text-teal-600 hover:underline inline-flex items-center"
                      >
                        Read More
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
                          className="ml-1 h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Media Coverage Section */}
        <section className="bg-white py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter text-gray-800 sm:text-3xl mb-12">Media Coverage</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden border-0 shadow-md">
                <div className="relative h-[200px] w-full">
                  <Image src="/press/media-1.png" alt="Media coverage" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">The Globe and Mail • April 2023</p>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    How Gapsurance is Disrupting the Traditional Insurance Industry
                  </h3>
                  <p className="text-gray-600 mb-4">
                    An in-depth look at how Gapsurance is leveraging technology to transform insurance for small
                    businesses.
                  </p>
                  <Link
                    href="#"
                    className="text-teal-500 font-medium hover:text-teal-600 hover:underline inline-flex items-center"
                  >
                    Read Article
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
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-0 shadow-md">
                <div className="relative h-[200px] w-full">
                  <Image src="/press/media-2.png" alt="Media coverage" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">BetaKit • February 2023</p>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Gapsurance CEO Discusses the Future of Insurtech in 
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Interview with Danish Yusuf on the challenges and opportunities in the Canadian insurtech landscape.
                  </p>
                  <Link
                    href="#"
                    className="text-teal-500 font-medium hover:text-teal-600 hover:underline inline-flex items-center"
                  >
                    Read Article
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
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-0 shadow-md">
                <div className="relative h-[200px] w-full">
                  <Image src="/press/media-3.png" alt="Media coverage" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">Financial Post • December 2022</p>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    The Rise of Digital Insurance Solutions for Small Businesses
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Feature on how companies like Gapsurance are making insurance more accessible for entrepreneurs.
                  </p>
                  <Link
                    href="#"
                    className="text-teal-500 font-medium hover:text-teal-600 hover:underline inline-flex items-center"
                  >
                    Read Article
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
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Media Contact Section */}
        <section className="bg-gray-50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tighter text-gray-800 sm:text-3xl mb-6">Media Contact</h2>
              <p className="text-gray-600 mb-8">
                For press inquiries, interview requests, or additional information, please contact our media relations
                team.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Media Relations</h3>
                <p className="text-gray-600 mb-1">Email: press@gapsurance.com</p>
                <p className="text-gray-600 mb-6">Phone: (416) 555-0123</p>
                <Button className="rounded-md bg-teal-500 text-white hover:bg-teal-600">Contact Media Team</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
