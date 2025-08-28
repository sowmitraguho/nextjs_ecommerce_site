import { getServerSession } from "next-auth/next"
import { authOptions } from "../(site)/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider"
import MySessionProvider from "@/Context/SessionProvider"
import { ProductProvider } from "@/Context/ProductContext"
import { CartProvider } from "@/Context/CartContext"
import "./../globals.css";
import { Toaster } from "@/components/ui/sonner"


export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions)

  // protect route
  if (!session) redirect("/auth/signin")

  //   if (session.user.role !== "admin") {
  //     redirect("/") // only admin allowed
  //   }

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
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
                <div className="flex min-h-screen">
                  {/* Sidebar */}
                  <aside className="w-64 bg-gray-900 text-white p-4">
                    <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
                    <nav className="flex flex-col gap-3">
                      <a href="/dashboard" className="hover:text-pink-400">Dashboard Home</a>
                      <a href="/dashboard/addProduct" className="hover:text-pink-400">Add Product</a>
                      <a href="/dashboard/updateProduct" className="hover:text-pink-400">Update Product</a>
                      {/* <a href="/dashboard/UserCart" className="hover:text-pink-400">User Cart</a> */}
                    </nav>
                  </aside>

                  {/* Main content */}
                  <main className="flex-1 p-6">{children}</main>
                </div>
              </CartProvider>
            </ProductProvider>
          </MySessionProvider>
        </ThemeProvider>
      </body>
    </html>

  )
}
