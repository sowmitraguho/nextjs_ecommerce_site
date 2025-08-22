"use client"

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-pink-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700">
            AuraBeaute
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Discover premium makeup essentials designed to bring out your natural glow.  
            From lipsticks to foundations, we’ve got everything to enhance your look.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-pink-600 dark:hover:text-pink-400">Home</a></li>
            <li><a href="/products" className="hover:text-pink-600 dark:hover:text-pink-400">Shop</a></li>
            <li><a href="/about" className="hover:text-pink-600 dark:hover:text-pink-400">About</a></li>
            <li><a href="/contact" className="hover:text-pink-600 dark:hover:text-pink-400">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-600 dark:hover:text-pink-400">FAQ</a></li>
            <li><a href="#" className="hover:text-pink-600 dark:hover:text-pink-400">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-pink-600 dark:hover:text-pink-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-600 dark:hover:text-pink-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Subscribe to get the latest beauty tips, offers, and products.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-full flex-1 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:text-gray-200"
            />
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-2 w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} AuraBeaute. All rights reserved.
      </div>
    </footer>
  )
}
