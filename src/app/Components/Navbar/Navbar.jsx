'use client'

import React, { useState } from "react"
import { ModeToggle } from "../ThemeToggler/ThemeToggler"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import UserMenu from "../UserMenu/UserMenu"
import Link from "next/link"

export default function Navbar() {
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    {
      name: "Dashboard",
      href: "/dashboard",
      submenu: [
        { name: "Add Product", href: "/dashboard/addProduct" }
      ],
    },
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
          <Link href="/" className="
            text-2xl font-extrabold tracking-wide
            bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent
            dark:from-pink-400 dark:to-pink-600
          ">
            AuraBeaute
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="relative text-sm font-medium
                  text-gray-700 hover:text-pink-600
                  dark:text-gray-300 dark:hover:text-pink-400
                  transition-colors
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 
                  after:bg-pink-500 dark:after:bg-pink-400 
                  group-hover:after:w-full after:transition-all
                "
              >
                {link.name} {link.submenu && <ChevronDown className="inline ml-1 h-4 w-4" />}
              </Link>

              {/* Submenu */}
              {link.submenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-800"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
                className="
                  md:hidden text-pink-600 hover:bg-pink-100
                  dark:text-pink-400 dark:hover:bg-gray-800
                "
              >
                <Menu className="h-6 w-6" />
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
              <nav className="flex flex-col gap-y-4 px-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col">
                    <Link
                      href={link.href}
                      className="text-lg font-semibold
                        text-gray-700 hover:text-pink-600
                        dark:text-gray-300 dark:hover:text-pink-400
                        transition-colors flex justify-between items-center"
                      onClick={() => setDashboardOpen(!dashboardOpen)}
                    >
                      {link.name} {link.submenu && <ChevronDown className="h-4 w-4" />}
                    </Link>

                    {/* Mobile Submenu */}
                    {link.submenu && dashboardOpen && (
                      <div className="ml-4 mt-1 flex flex-col gap-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
