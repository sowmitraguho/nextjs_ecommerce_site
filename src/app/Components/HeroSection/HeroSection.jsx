import { Button } from '@/components/ui/button'
import React from 'react'

export default function HeroSection() {
  return (
     <div className="relative bg-cover bg-center flex flex-col items-center justify-center py-24" style={{
        backgroundImage: `url(https://www.shutterstock.com/image-photo/styled-feminine-desktop-woman-fashion-600nw-443462788.jpg)`
      }}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg "></div> {/* Overlay for text readability */}
      <div className="relative z-10 text-white p-6 rounded-lg max-w-2xl bg-black/40 bg-opacity-30">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Unleash Your Inner Radiance
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          Discover our exquisite collection of premium makeup designed to enhance your natural beauty.
        </p>
        <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300">
          Shop the Collection
        </Button>
      </div>
    </div>
  )
}
