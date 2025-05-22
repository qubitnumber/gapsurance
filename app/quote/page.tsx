"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function QuotePage() {
  const [loading, setLoading] = useState(true)
  const [step, setStep] = useState(1)
  const totalSteps = 4

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
      // Scroll to top when changing steps
      window.scrollTo(0, 0)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
      // Scroll to top when changing steps
      window.scrollTo(0, 0)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-teal-500"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Gapsurance" width={140} height={32} className="h-8 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-full border-teal-500 text-teal-500 hover:bg-teal-50 hover:text-teal-600"
              asChild
            >
              <Link href="/contact-us">Need Help?</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Step {step} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-gray-700">{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-500 transition-all duration-300 ease-in-out"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Business Information */}
          {step === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Tell us about your business</h1>
                <p className="text-gray-600">Let's start with some basic information about your business</p>
              </div>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="business-name">Business Name</Label>
                      <Input id="business-name" placeholder="Enter your business name" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="business-type">Business Type</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="corporation">Corporation</SelectItem>
                          <SelectItem value="llc">Limited Liability Company (LLC)</SelectItem>
                          <SelectItem value="non-profit">Non-Profit Organization</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="professional-services">Professional Services</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="annual-revenue">Annual Revenue</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select annual revenue" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-100k">$0 - $100,000</SelectItem>
                          <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                          <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                          <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                          <SelectItem value="5m+">$5,000,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select number of employees" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Just me</SelectItem>
                          <SelectItem value="2-5">2-5</SelectItem>
                          <SelectItem value="6-10">6-10</SelectItem>
                          <SelectItem value="11-25">11-25</SelectItem>
                          <SelectItem value="26-50">26-50</SelectItem>
                          <SelectItem value="51+">51+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button
                  onClick={handleNext}
                  className="bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-2"
                >
                  Next Step <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Coverage Needs */}
          {step === 2 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">What coverage do you need?</h1>
                <p className="text-gray-600">Select the types of insurance coverage you're interested in</p>
              </div>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="general-liability" />
                      <Label htmlFor="general-liability" className="font-medium">
                        General Liability Insurance
                      </Label>
                    </div>
                    <p className="text-sm text-gray-500 pl-6">
                      Protects your business from third-party claims of bodily injury, property damage, and advertising
                      injury.
                    </p>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="professional-liability" />
                      <Label htmlFor="professional-liability" className="font-medium">
                        Professional Liability Insurance
                      </Label>
                    </div>
                    <p className="text-sm text-gray-500 pl-6">
                      Also known as Errors & Omissions (E&O), covers claims of negligence or inadequate work.
                    </p>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="cyber-liability" />
                      <Label htmlFor="cyber-liability" className="font-medium">
                        Cyber Liability Insurance
                      </Label>
                    </div>
                    <p className="text-sm text-gray-500 pl-6">
                      Protects your business from data breaches and other cyber incidents.
                    </p>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="commercial-property" />
                      <Label htmlFor="commercial-property" className="font-medium">
                        Commercial Property Insurance
                      </Label>
                    </div>
                    <p className="text-sm text-gray-500 pl-6">
                      Covers damage to your business property from fire, theft, and certain natural disasters.
                    </p>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="business-interruption" />
                      <Label htmlFor="business-interruption" className="font-medium">
                        Business Interruption Insurance
                      </Label>
                    </div>
                    <p className="text-sm text-gray-500 pl-6">
                      Compensates for lost income if your business can't operate due to covered property damage.
                    </p>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="workers-comp" />
                      <Label htmlFor="workers-comp" className="font-medium">
                        Workers' Compensation Insurance
                      </Label>
                    </div>
                    <p className="text-sm text-gray-500 pl-6">
                      Covers medical expenses and lost wages for employees who are injured on the job.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="border-teal-500 text-teal-500 hover:bg-teal-50 flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-2"
                >
                  Next Step <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Business Details */}
          {step === 3 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Business Details</h1>
                <p className="text-gray-600">Tell us more about your business operations</p>
              </div>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="business-address">Business Address</Label>
                      <Input id="business-address" placeholder="Enter your business address" className="mt-1" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="province">Province</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select province" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ab">Alberta</SelectItem>
                            <SelectItem value="bc">British Columbia</SelectItem>
                            <SelectItem value="mb">Manitoba</SelectItem>
                            <SelectItem value="nb">New Brunswick</SelectItem>
                            <SelectItem value="nl">Newfoundland and Labrador</SelectItem>
                            <SelectItem value="ns">Nova Scotia</SelectItem>
                            <SelectItem value="on">Ontario</SelectItem>
                            <SelectItem value="pe">Prince Edward Island</SelectItem>
                            <SelectItem value="qc">Quebec</SelectItem>
                            <SelectItem value="sk">Saskatchewan</SelectItem>
                            <SelectItem value="nt">Northwest Territories</SelectItem>
                            <SelectItem value="nu">Nunavut</SelectItem>
                            <SelectItem value="yt">Yukon</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input id="postal-code" placeholder="A1A 1A1" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="years-in-business">Years in Business</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select years in business" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="not-yet">Not yet started</SelectItem>
                          <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">More than 10 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="mb-2 block">Do you have any previous insurance claims?</Label>
                      <RadioGroup defaultValue="no" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="claims-yes" />
                          <Label htmlFor="claims-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="claims-no" />
                          <Label htmlFor="claims-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="border-teal-500 text-teal-500 hover:bg-teal-50 flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-2"
                >
                  Next Step <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Information */}
          {step === 4 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Contact Information</h1>
                <p className="text-gray-600">How can we reach you with your quote?</p>
              </div>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="First name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Last name" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="(123) 456-7890" className="mt-1" />
                    </div>

                    <div>
                      <Label className="mb-2 block">Preferred Contact Method</Label>
                      <RadioGroup defaultValue="email" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="contact-email" />
                          <Label htmlFor="contact-email">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="contact-phone" />
                          <Label htmlFor="contact-phone">Phone</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex items-start space-x-2 pt-4">
                      <Checkbox id="terms" className="mt-1" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="#" className="text-teal-500 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-teal-500 hover:underline">
                          Privacy Policy
                        </Link>
                        . I consent to receive communications from Gapsurance.
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="border-teal-500 text-teal-500 hover:bg-teal-50 flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">Get My Quote</Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="text-center text-sm text-gray-500">
            <p>© 2023 Gapsurance. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/privacy-policy" className="text-teal-500 hover:underline">
                Privacy Policy
              </Link>{" "}
              •{" "}
              <Link href="/terms-of-service" className="text-teal-500 hover:underline">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
