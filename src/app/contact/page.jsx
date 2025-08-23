"use client"

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export default function page() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8
                 bg-gradient-to-r from-pink-100 via-pink-50 to-white
                 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* --- Left Section: Contact Info & Message Form --- */}
        <div className="lg:flex-1 w-full space-y-8">
          <Card className="rounded-2xl shadow-lg bg-pink-50 dark:bg-gray-800 p-8">
            <CardHeader>
              <CardTitle className="text-3xl sm:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-4">
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
              {/* --- Contact Details --- */}
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Address:</span> 123 Beauty St, Glam City, CA 90210
                </p>
                <p>
                  <span className="font-semibold">Email:</span> support@makeup.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +1 234 567 890
                </p>
              </div>

              {/* --- Social Media --- */}
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-500">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-500">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-500">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-500">
                  <FaLinkedinIn size={20} />
                </a>
              </div>

              {/* --- Message Form --- */}
              <form className="space-y-4 mt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
                ></textarea>

                <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-3 w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* --- Right Section: Image --- */}
        <div className="lg:flex-1 w-full">
          <img
            src="https://w0.peakpx.com/wallpaper/73/788/HD-wallpaper-pretty-woman-model-girl-makeup-telephone.jpg"
            alt="Contact us illustration"
            className=" shadow-lg w-full min-h-screen object-cover"
          />
        </div>
      </div>
    </section>
  )
}
