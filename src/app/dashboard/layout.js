import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider"
import MySessionProvider from "@/Context/SessionProvider"
import { ProductProvider } from "@/Context/ProductContext"
import { CartProvider } from "@/Context/CartContext"
import "./../globals.css";
import Link from "next/link"
import { ModeToggle } from "../(site)/Components/ThemeToggler/ThemeToggler"
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions)

  // protect route
  if (!session) redirect("/auth/signin")

  //   if (session.user.role !== "admin") {
  //     redirect("/") // only admin allowed
  //   }

  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        {/* Dashboard-only layout */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MySessionProvider session={session}>
            <ProductProvider>
              <CartProvider>
                <SidebarProvider>
                  <div className="flex min-h-screen min-w-screen">
                    {/* Sidebar */}
                    <Sidebar>
                      <aside className="w-64 min-h-screen bg-gray-100 dark:bg-gray-900 text-white p-4 border-r border-gray-300 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <Link href="/" className="text-2xl font-extrabold tracking-wide
                              bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent
                            dark:from-pink-400 dark:to-pink-600">
                            AuraBeaute
                          </Link>
                          <ModeToggle className="mt-1" />
                        </div>
                        <nav className="flex flex-col gap-3 mt-6">
                          <Link href="/dashboard" className="relative text-lg font-medium
                  text-gray-700 hover:text-pink-600
                  dark:text-gray-300 dark:hover:text-pink-400
                  transition-colors
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 
                  after:bg-pink-500 dark:after:bg-pink-400 
                  group-hover:after:w-full after:transition-all
                ">Dashboard Home</Link>
                          <Link href="/dashboard/addProduct" className="relative text-lg font-medium
                  text-gray-700 hover:text-pink-600
                  dark:text-gray-300 dark:hover:text-pink-400
                  transition-colors
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 
                  after:bg-pink-500 dark:after:bg-pink-400 
                  group-hover:after:w-full after:transition-all
                ">Add Product</Link>
                          <Link href="/dashboard/updateProduct" className="relative text-lg font-medium
                  text-gray-700 hover:text-pink-600
                  dark:text-gray-300 dark:hover:text-pink-400
                  transition-colors
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 
                  after:bg-pink-500 dark:after:bg-pink-400 
                  group-hover:after:w-full after:transition-all
                ">Update Product</Link>
                          {/* <Link href="/dashboard/UserCart" className="hover:text-pink-400">User Cart</Link> */}
                        </nav>
                      </aside>
                    </Sidebar>
                    {/* Main content */}
                    <main className="w-full min-w-[1100px] max-w-7xl mx-auto">
                      <SidebarTrigger />
                      {children}
                    </main>
                  </div>
                </SidebarProvider>
              </CartProvider>
            </ProductProvider>
          </MySessionProvider>
        </ThemeProvider>
      </body>
    </html>

  )
}
