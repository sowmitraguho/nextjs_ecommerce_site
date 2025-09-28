'use client'
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import UserMenu from "../UserMenu/UserMenu"
import Link from "next/link"

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]
    return (
        <div>
            <Sheet open={open} onOpenChange={setOpen}>
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
                w-fit sm:w-[280px] h-fit max-h-screen flex flex-col px-6 py-12
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
                                    onClick={() => setOpen(!open)}
                                >
                                    {link.name} {link.submenu && <ChevronDown className="h-4 w-4" />}
                                </Link>

                            </div>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}
