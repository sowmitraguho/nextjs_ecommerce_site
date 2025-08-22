import React from 'react'
import { ModeToggle } from '../ThemeToggler/ThemeToggler';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menubar } from '@/components/ui/menubar';

export default function Navbar() {
    const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between h-16">
        {/* Logo/Brand Name */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-foreground">
            AuraBeaute
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section (Theme Toggle & Mobile Menu Toggle) */}
        <div className="flex items-center gap-x-2">
          <ModeToggle />

          {/* Mobile Navigation Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menubar className="h-5 w-5" />
                <span className="sr-only">Open mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] flex flex-col pt-12">
              <nav className="flex flex-col gap-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors block"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
