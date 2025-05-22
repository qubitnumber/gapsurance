import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MainNav from "@/components/main-nav"
import { Card, CardContent } from "@/components/ui/card"

export default function CareersContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl">
                    Join Our Team
                  </h1>
                  <p className="text-xl text-gray-600">
                    Be part of a team that's revolutionizing the insurance industry for Canadian small businesses.
                  </p>
                  <Button className="rounded-md bg-teal-500 px-8 py-6 text-lg font-medium text-white hover:bg-teal-600 w-fit">
                    View Open Positions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="bg-gray-50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tighter text-gray-800 sm:text-3xl md:text-4xl">
                Why Join Gapsurance?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                We offer a dynamic work environment with opportunities for growth and innovation.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 mb-4">
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
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">
                    We invest in our team's professional development with ongoing training, workshops, and educational
                    opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 mb-4">
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Collaborative Culture</h3>
                  <p className="text-gray-600">
                    Work in a supportive environment where teamwork is valued and diverse perspectives are encouraged.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 mb-4">
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
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Innovation Focus</h3>
                  <p className="text-gray-600">
                    Be part of a team that's constantly pushing boundaries and finding new ways to improve the insurance
                    experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 mb-4">
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
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Comprehensive Benefits</h3>
                  <p className="text-gray-600">
                    Enjoy competitive compensation, health benefits, flexible work arrangements, and more.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 mb-4">
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
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Career Growth</h3>
                  <p className="text-gray-600">
                    Develop your skills and advance your career with clear paths for progression and mentorship
                    opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 mb-4">
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
                      <path d="m3 11 18-5v12L3 14v-3z" />
                      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Meaningful Impact</h3>
                  <p className="text-gray-600">
                    Make a real difference by helping Canadian small businesses protect their livelihoods and succeed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="bg-white py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tighter text-gray-800 sm:text-3xl md:text-4xl">
                Open Positions
              </h2>
              <p className="mt-4 text-xl text-gray-600">Explore current opportunities to join our growing team.</p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">Senior Software Engineer</h3>
                      <p className="text-gray-600 mb-4">Toronto, ON (Hybrid)</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                          Full-time
                        </span>
                        <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                          Engineering
                        </span>
                        <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                          Senior Level
                        </span>
                      </div>
                    </div>
                    <Button className="rounded-md bg-teal-500 text-white hover:bg-teal-600 w-full md:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">Insurance Advisor</h3>
                      <p className="text-gray-600 mb-4">Remote, </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                          Full-time
                        </span>
                        <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                          Sales
                        </span>
                        <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                          Mid Level
                        </span>
                      </div>
                    </div>
                    <Button className="rounded-md bg-teal-500 text-white hover:bg-teal-600 w-full md:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">Digital Marketing Specialist</h3>
                      <p className="text-gray-600 mb-4">Toronto, ON (Hybrid)</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                          Full-time
                        </span>
                        <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                          Marketing
                        </span>
                        <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                          Mid Level
                        </span>
                      </div>
                    </div>
                    <Button className="rounded-md bg-teal-500 text-white hover:bg-teal-600 w-full md:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Don't see a position that matches your skills? We're always looking for talented individuals to join our
                team.
              </p>
              <Button
                variant="outline"
                className="rounded-md border-teal-500 text-teal-500 hover:bg-teal-50 hover:text-teal-600"
              >
                Send General Application
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
