'use client'

import React from "react"
import { ModeToggle } from "../ThemeToggler/ThemeToggler"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import UserMenu from "../UserMenu/UserMenu"
import Link from "next/link"

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
  ]

  return (
    <nav className="
      bg-gradient-to-r from-pink-100 via-white to-pink-50
      dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
      border-b border-pink-200 dark:border-gray-800
      shadow-sm sticky top-0 z-50
    ">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="
              text-2xl font-extrabold tracking-wide
              bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent
              dark:from-pink-400 dark:to-pink-600
            "
          >
            AuraBeaute
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                relative text-sm font-medium
                text-gray-700 hover:text-pink-600
                dark:text-gray-300 dark:hover:text-pink-400
                transition-colors
                after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 
                after:bg-pink-500 dark:after:bg-pink-400 
                hover:after:w-full after:transition-all
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-x-3">
          <UserMenu />
          <ModeToggle />

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-pink-600 hover:bg-pink-100 dark:text-pink-400 dark:hover:bg-gray-800"
              >
                
                <span className="sr-only">Open mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="
                w-full sm:w-[280px] flex flex-col pt-12
                bg-gradient-to-b from-white to-pink-50
                dark:from-gray-900 dark:to-gray-950
              "
            >
              <nav className="flex flex-col gap-y-6 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="
                      text-lg font-semibold
                      text-gray-700 hover:text-pink-600
                      dark:text-gray-300 dark:hover:text-pink-400
                      transition-colors
                    "
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
