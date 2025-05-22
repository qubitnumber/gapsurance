import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function BlogContent() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl mb-4">
            Gapsurance Small Business Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            News and resources for Canadian small businesses and startups covering the economic and business insurance
            landscape.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Featured Post */}
            <div className="mb-16">
              <Link href="#" className="group">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/blog/manufacturing.jpg"
                    alt="Manufacturing facility"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        How Much Does Manufacturing Insurance Cost in ?
                      </h2>
                      <p className="text-white/90">
                        The Canadian manufacturing sector plays a crucial role in driving economic growth. However,
                        liability risks lurk at every stage for manufacturers of every kind. Get an overview of
                        insurance costs and coverage options.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Recent Posts Heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Recent posts</h2>

            {/* Recent Posts Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              <Link href="#" className="group">
                <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src="/blog/manufacturing.jpg"
                      alt="Manufacturing facility"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600">
                      How Much Does Manufacturing Insurance Cost in ?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">May 15, 2023</p>
                    <p className="text-gray-700">
                      The Canadian manufacturing sector plays a crucial role in driving economic growth. However,
                      liability risks lurk at every stage...
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="#" className="group">
                <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src="/blog/small-business.jpg"
                      alt="Small business owners"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600">
                      5 Insurance Policies Every Small Business Should Consider
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">May 8, 2023</p>
                    <p className="text-gray-700">
                      Starting a small business comes with numerous challenges and risks. Protecting your investment
                      with the right insurance coverage is essential...
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="#" className="group">
                <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src="/blog/cyber-security.jpg"
                      alt="Cyber security"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600">
                      Cyber Liability Insurance: Why It's Essential in 2023
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">April 27, 2023</p>
                    <p className="text-gray-700">
                      With cyber attacks on the rise, businesses of all sizes need to consider their digital security
                      posture. Cyber liability insurance provides protection...
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="#" className="group">
                <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src="/blog/shipping.jpg"
                      alt="Shipping boxes"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600">
                      Product Liability Insurance for E-commerce Businesses
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">April 15, 2023</p>
                    <p className="text-gray-700">
                      E-commerce businesses face unique product liability risks. Learn how the right insurance coverage
                      can protect your online store from potential claims...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="rounded-md border-teal-500 px-6 py-2 font-medium text-teal-500 hover:bg-teal-50"
              >
                Load More Articles
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="small-business">Small Business</SelectItem>
                    <SelectItem value="industry-specific">Industry-Specific</SelectItem>
                    <SelectItem value="insurance-basics">Insurance Basics</SelectItem>
                    <SelectItem value="risk-management">Risk Management</SelectItem>
                    <SelectItem value="cyber-security">Cyber Security</SelectItem>
                    <SelectItem value="claims">Claims</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search */}
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Search</h3>
                <div className="flex">
                  <Input placeholder="Search..." className="rounded-r-none" />
                  <Button className="rounded-l-none bg-teal-500 hover:bg-teal-600">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Free Guide */}
              <div className="rounded-lg bg-teal-50 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Download our FREE Insurance Guide</h3>
                <div className="relative h-[200px] w-full mb-4">
                  <Image src="/blog/insurance-guide.jpg" alt="Insurance Guide" fill className="object-contain" />
                </div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600">Download Now</Button>
              </div>

              {/* Popular Posts */}
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  <Link href="#" className="group flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image src="/blog/manufacturing.jpg" alt="Manufacturing" fill className="rounded object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 group-hover:text-teal-600">
                        How Much Does Manufacturing Insurance Cost in ?
                      </h4>
                      <p className="text-xs text-gray-500">May 15, 2023</p>
                    </div>
                  </Link>
                  <Link href="#" className="group flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src="/blog/cyber-security.jpg"
                        alt="Cyber Security"
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 group-hover:text-teal-600">
                        Cyber Liability Insurance: Why It's Essential in 2023
                      </h4>
                      <p className="text-xs text-gray-500">April 27, 2023</p>
                    </div>
                  </Link>
                  <Link href="#" className="group flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src="/blog/small-business.jpg"
                        alt="Small Business"
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 group-hover:text-teal-600">
                        5 Insurance Policies Every Small Business Should Consider
                      </h4>
                      <p className="text-xs text-gray-500">May 8, 2023</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
