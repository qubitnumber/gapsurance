"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import GenerateQuotePDF from '@/components/generate-quote-pdf'
import CreateEnvelope from '@/components/create-envelope'

const QuoteSchema = z.object({
  businessName: z.string().min(1, "Business Name is required"),
  businessType: z.enum(["soleProprietorship", "partnership", "corporation", "llc", "nonProfit"]),
  industry: z.enum(["technology", "retail", "construction", "healthcare", "hospitality", "professionalServices", "manufacturing", "other"]),
  annualRevenue: z.enum(["0-100k", "100k-500k", "500k-1m", "1m-5m", "5m+"]),
  numberOfEmployees: z.enum(["1", "2-5", "6-10", "11-25", "26-50", "51+"]),
  coverages: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  businessAddress: z.string().min(1, "Business Address is required"),
  city: z.string().min(1, "City is required"),
  province: z.enum(["ab", "bc", "mb", "nb", "nl", "ns", "on", "pe", "qc", "sk", "nt", "nu", "yt"]),
  postalCode: z.string().min(1, "Postal Code is required"),
  yearsInBusiness: z.enum(["not-yet", "less-than-1", "1-3", "4-5", "6-10", "10+"]),
  previousClaims: z.enum(['yes', 'no']),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone Number is required"),
  preferredContact: z.enum(['email', 'phone']),
  agreeTerm: z.boolean().refine((val) => val === true, {
    message: "Please read and accept the terms and conditions",
  })
});

type QuoteForm = z.infer<typeof QuoteSchema>;

const generateQuoteId = () => {
  const timestamp = Date.now();
  return `QU${timestamp}`;
};

export default function QuotePage() {
  const [loading, setLoading] = useState(true)
  const [step, setStep] = useState(1)
  const [submission, setSubmission] = useState<{ submitting: boolean; submitted: boolean; quoteId?: string }>({ submitting: false, submitted: false });
  
  const createQuote = useMutation(api.quotes.createQuote);
  const totalSteps = 5
  const stepTitles = [
    {
      title: 'Tell us about your business',
      desc: `Let's start with some basic information about your business`
    },
    {
      title: 'What coverage do you need?',
      desc: `Select the types of insurance coverage you're interested in`
    },
    {
      title: 'Business Details',
      desc: `Tell us more about your business operations`
    },
    {
      title: 'Contact Information',
      desc: `How can we reach you with your quote?`
    },
    {
      title: 'Thank you!',
      desc: `Your quote has been submitted`
    }
  ]
  const step2Coverages = [
    {
      id: 'generalLiabilityInsurance',
      label: 'General Liability Insurance',
      desc: `Protects your business from third-party claims of bodily injury, property damage, and advertising injury.`,
    },
    {
      id: 'professionalLiabilityInsurance',
      label: 'Professional Liability Insurance',
      desc: `Also known as Errors & Omissions (E&O), covers claims of negligence or inadequate work.`,
    },
    {
      id: 'cyberLiabilityInsurance',
      label: 'Cyber Liability Insurance',
      desc: `Protects your business from data breaches and other cyber incidents.`,
    },
    {
      id: 'commercialPropertyInsurance',
      label: 'Commercial Property Insurance',
      desc: `Covers damage to your business property from fire, theft, and certain natural disasters.`,
    },
    {
      id: 'businessInterruptionInsurance',
      label: 'Business Interruption Insurance',
      desc: `Compensates for lost income if your business can't operate due to covered property damage.`,
    },
    {
      id: 'workersCompensationInsurance',
      label: `Workers' Compensation Insurance`,
      desc: `Covers medical expenses and lost wages for employees who are injured on the job.`,
    }
  ]

  const form = useForm<QuoteForm>({
    resolver: zodResolver(QuoteSchema),
    defaultValues: {
      businessName: "",
      businessType: "soleProprietorship",
      industry: "technology",
      annualRevenue: "0-100k",
      numberOfEmployees: "1",
      coverages: ["generalLiabilityInsurance", "professionalLiabilityInsurance"],
      businessAddress: "",
      city: "",
      province: "ab",
      postalCode: "",
      yearsInBusiness: "not-yet",
      previousClaims: "no",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredContact: "email",
      agreeTerm: false,
    },
  });

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

  const onSubmit = async (data: QuoteForm) => {
    console.log(submission.submitting, Object.keys(form.formState.errors).length > 0)
    setSubmission({ submitting: true, submitted: false })
    if (step === 4) {
      const quoteId = generateQuoteId()
      await createQuote({ quoteId, ...data })
      setSubmission({ submitting: false, submitted: true, quoteId })
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

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
    <div className="bg-gray-50 mt-16">
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

          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{stepTitles[step-1]['title']}</h1>
              <p className="text-gray-600">{stepTitles[step-1]['desc']}</p>
            </div>

            <Form {...form}>
              <form className="space-y-4">
                {/* Step 1: Business Information */}
                {step === 1 && (
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="businessName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel style={{color: 'inherit'}}>Business Name</FormLabel>
                              <FormControl>
                                <Input
                                  id="business-name"
                                  placeholder="Enter your business name"
                                  className="mt-1"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs"/>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="businessType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel style={{color: 'inherit'}}>Business Type</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <SelectTrigger className="mt-1">
                                    <SelectValue placeholder="Select business type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="soleProprietorship">Sole Proprietorship</SelectItem>
                                    <SelectItem value="partnership">Partnership</SelectItem>
                                    <SelectItem value="corporation">Corporation</SelectItem>
                                    <SelectItem value="llc">Limited Liability Company (LLC)</SelectItem>
                                    <SelectItem value="nonProfit">Non-Profit Organization</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage className="text-xs"/>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel style={{color: 'inherit'}}>Industry</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <SelectTrigger className="mt-1">
                                    <SelectValue placeholder="Select your industry" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="technology">Technology</SelectItem>
                                    <SelectItem value="retail">Retail</SelectItem>
                                    <SelectItem value="construction">Construction</SelectItem>
                                    <SelectItem value="healthcare">Healthcare</SelectItem>
                                    <SelectItem value="hospitality">Hospitality</SelectItem>
                                    <SelectItem value="professionalServices">Professional Services</SelectItem>
                                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage className="text-xs"/>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="annualRevenue"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel style={{color: 'inherit'}}>Annual Revenue</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
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
                              </FormControl>
                              <FormMessage className="text-xs"/>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="numberOfEmployees"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel style={{color: 'inherit'}}>Number of Employees</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
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
                              </FormControl>
                              <FormMessage className="text-xs"/>
                            </FormItem>
                          )}
                        />

                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Coverage Needs */}
                {step === 2 && (
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <FormField
                        control={form.control}
                        name="coverages"
                        render={() => (
                          <FormItem className="space-y-4">
                            {step2Coverages.map((coverage) => (
                              <FormField
                                key={coverage.id}
                                control={form.control}
                                name="coverages"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={coverage.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(coverage.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, coverage.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== coverage.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <div className="space-y-1 leading-none">
                                        <FormLabel className="font-medium" style={{color: 'inherit'}}>
                                          {coverage.label}
                                        </FormLabel>
                                        <FormDescription className="text-sm text-gray-500">
                                          {coverage.desc}
                                        </FormDescription>
                                      </div>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                )}

                {/* Step 3: Business Details */}
                {step === 3 && (
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="businessAddress"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel style={{color: 'inherit'}}>Business Address</FormLabel>
                                <FormControl>
                                  <Input
                                    id="business-address"
                                    placeholder="Enter your business address"
                                    className="mt-1"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-xs"/>
                              </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel style={{color: 'inherit'}}>City</FormLabel>
                                <FormControl>
                                  <Input
                                    id="city"
                                    placeholder="City"
                                    className="mt-1"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-xs"/>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="province"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel style={{color: 'inherit'}}>Province</FormLabel>
                                <FormControl>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
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
                                </FormControl>
                                <FormMessage className="text-xs"/>
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                            control={form.control}
                            name="postalCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel style={{color: 'inherit'}}>Postal Code</FormLabel>
                                <FormControl>
                                  <Input
                                    id="postal-code"
                                    placeholder="A1A 1A1"
                                    className="mt-1"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-xs"/>
                              </FormItem>
                            )}
                        />

                        <FormField
                          control={form.control}
                          name="yearsInBusiness"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel style={{color: 'inherit'}}>Years in Business</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
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
                              </FormControl>
                              <FormMessage className="text-xs"/>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="previousClaims"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="mb-2 block" style={{color: 'inherit'}}>Do you have any previous insurance claims?</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-row space-x-4"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="yes" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Yes
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="no" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      No
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 4: Contact Information */}
                {step === 4 && (
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel style={{color: 'inherit'}}>First Name</FormLabel>
                                <FormControl>
                                  <Input
                                    id="first-name"
                                    placeholder="First name"
                                    className="mt-1"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-xs"/>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel style={{color: 'inherit'}}>Last Name</FormLabel>
                                <FormControl>
                                  <Input
                                    id="last-name"
                                    placeholder="Last name"
                                    className="mt-1"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-xs"/>
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel style={{color: 'inherit'}}>Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  id="email"
                                  placeholder="you@example.com"
                                  className="mt-1"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs"/>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel style={{color: 'inherit'}}>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  id="phone"
                                  placeholder="(123) 456-7890"
                                  className="mt-1"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs"/>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="preferredContact"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="mb-2 block" style={{color: 'inherit'}}>Preferred Contact Method</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-row space-x-4"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="email" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Email
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="phone" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Phone
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage className="text-xs" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="agreeTerm"
                          render={({ field }) => {
                            return (
                              <div className="flex flex-col">
                                <FormItem
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <div className="space-y-2 leading-none">
                                    <FormLabel className="font-medium" style={{color: 'inherit'}}>
                                      I agree to the{" "}
                                      <Link href="#" className="text-teal-500 hover:underline">
                                        Terms of Service
                                      </Link>{" "}
                                      and{" "}
                                      <Link href="#" className="text-teal-500 hover:underline">
                                        Privacy Policy
                                      </Link>
                                      . I consent to receive communications from Gapsurance.
                                    </FormLabel>
                                  </div>
                                </FormItem>
                                <FormMessage className="text-xs" />
                                {Object.keys(form.formState.errors).length > 0 && (
                                  <span className="flex justify-end text-red-600 text-sm ml-2">
                                    Please fill in all required fields correctly.
                                  </span>
                                )}
                              </div>
                            )
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 5: Contact Information */}
                {step === 5 && (
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
                        {submission.quoteId && (
                          <p className="mt-2 text-xs text-gray-600">
                            Your Quote ID: <span className="font-mono">{submission.quoteId}</span>
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {!submission.submitted && (
                  <div className={`flex ${step === 1 ? 'justify-end' :  'justify-between'}`}>
                    <Button
                      type="button"
                      onClick={handleBack}
                      variant="outline"
                      className={`border-teal-500 text-teal-500 hover:bg-teal-50 flex items-center gap-2 ${step === 1 && 'hidden'}`}
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </Button>
                    <Button
                      type="button"
                      onClick={step < 4 ? handleNext : form.handleSubmit(onSubmit)}
                      className="bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-2"
                    >
                      {step < 4 && 'Next Step'} {step !== 4 && <ArrowRight className="h-4 w-4" />}
                      {step === 4 && !submission.submitted && 'Save'}
                    </Button>
                  </div>
                )}
                {step === 5 && submission.submitted && submission.quoteId && (
                  <div className="flex justify-end gap-3">
                    <GenerateQuotePDF quoteId={submission.quoteId}/>
                    <CreateEnvelope quoteId={submission.quoteId}/>
                  </div>
                )}
                {submission.submitting && (
                    <div style={{
                        position: "fixed",
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: "rgba(0,0,0,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000
                        }}>
                        <div style={{
                            background: "#fff",
                            padding: "32px 48px",
                            borderRadius: "12px",
                            boxShadow: "0 2px 12px #0002",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "#7a9a8a"
                        }}>
                            Submitting...
                        </div>
                    </div>
                )}
              </form>
            </Form>
          </div>
        </div>

        {/* <div className="container flex h-16 items-center justify-end px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-full border-teal-500 text-teal-500 hover:bg-teal-50 hover:text-teal-600"
              asChild
            >
              <Link href="#">Need Help?</Link>
            </Button>
          </div>
        </div> */}
      </main>

      <footer className="bg-white border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="text-center text-sm text-gray-500">
            <p>© 2023 Gapsurance. All rights reserved.</p>
            <p className="mt-2">
              <Link href="#" className="text-teal-500 hover:underline">
                Privacy Policy
              </Link>{" "}
              •{" "}
              <Link href="#" className="text-teal-500 hover:underline">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
