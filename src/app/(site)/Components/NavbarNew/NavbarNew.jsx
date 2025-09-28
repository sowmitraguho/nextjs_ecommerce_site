import { ModeToggle } from "../ThemeToggler/ThemeToggler"
import { ChevronDown } from "lucide-react"
import UserMenu from "../UserMenu/UserMenu"
import Link from "next/link"
import Cart from "../Cart/Cart"
import MobileMenu from "./MobileMenu"

export default function NavbarNew() {
  // const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
          <Cart />
          <UserMenu />
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
