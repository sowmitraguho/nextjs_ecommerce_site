import { Button } from '@/components/ui/button'
import React from 'react'

export default function InviteForRegistration() {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-pink-300 via-pink-50 to-pink-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
                     
                      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                          <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-4">
                              Join Our Community
                          </h2>
                          <p className="text-gray-900 dark:text-gray-100 max-w-xl mx-auto mb-6">
                              Subscribe to get the latest updates on our products, exclusive deals, and beauty tips.
                          </p>
                          <input type="email" placeholder="Enter your email" className="border border-pink-300 py-2 px-4 rounded-md w-full dark:border-gray-700" />
                          <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-3">
                              Subscribe Now
                          </Button>
                      </div>
                  </section>
  )
}
