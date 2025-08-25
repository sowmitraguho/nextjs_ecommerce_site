
import "./globals.css";
import { ThemeProvider } from "./Components/ThemeProvider/ThemeProvider";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "@/components/ui/sonner"
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NavbarNew from "./Components/NavbarNew/NavbarNew";
import { ProductProvider } from "@/Context/ProductContext";
import { CartProvider } from "@/Context/CartContext";
import MySessionProvider from "@/Context/SessionProvider";




export const metadata = {
  title: "AuraBeaute",
  description: "Your one-stop shop for beauty products",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MySessionProvider session={session}>
            <ProductProvider>
              <CartProvider>
                <NavbarNew />
                <main>{children}</main>
                <Toaster />
                <Footer />
              </CartProvider>
            </ProductProvider>
          </MySessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
