import { Phone, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"


export default function ContactUsContent() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Our friendly support team is always ready to answer questions, we're just a click or phone call away.
          Our support team is available:
        </p>
        <div className="space-y-2 mb-12">
          <p className="text-gray-700">
            <span className="font-medium">Monday to Thursday:</span> 9:00 AM – 5:30 PM (Eastern Time)
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Friday:</span> 9:00 AM – 4:00 PM (Eastern Time)
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex">
            <div className="mr-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                <Phone className="h-8 w-8 text-gray-600" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Phone</h2>
              <p className="text-sm text-gray-500 mb-3">(No recruiters or real estate agents please)</p>
              <Link
                href="tel:888-654-6030"
                className="text-teal-500 font-medium hover:text-teal-600 hover:underline inline-flex items-center"
              >
                888-654-6030
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

          <div className="flex">
            <div className="mr-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                <MessageSquare className="h-8 w-8 text-gray-600" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Chat</h2>
              <Button className="rounded-md bg-teal-500 px-6 py-2 font-medium text-white hover:bg-teal-600">
                Start Chat
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5181451948044!2d-79.3862894!3d43.6484764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2b5935bf09%3A0x7e2be2d51a7672e3!2sZensurance!5e0!3m2!1sen!2sca!4v1621436289012!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="h-full w-full"
              title="Gapsurance Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
