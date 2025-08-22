"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-pink-50 via-white to-pink-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
            Unleash Your{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
              True Beauty
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-xl mx-auto md:mx-0">
            Discover premium makeup essentials designed to bring out your natural glow.  
            From lipsticks to foundations, we’ve got everything to enhance your look.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto">
              Shop Now
            </Button>
            <Button
              variant="outline"
              className="border-pink-500 text-pink-600 hover:bg-pink-100 px-6 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwbWFrZXVwfGVufDB8fDB8fHww"
            alt="Makeup Model"
            width={500}
            height={500}
            priority
            className="rounded-2xl shadow-lg object-cover w-full max-w-sm sm:max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}
