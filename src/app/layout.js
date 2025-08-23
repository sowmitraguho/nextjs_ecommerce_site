import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Components/ThemeProvider/ThemeProvider";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "@/components/ui/sonner"
import { getServerSession } from "next-auth/next";
//import { authOptions } from "./api/auth/[...nextauth]";
import MySessionProvider from "./providers/SessionProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Navbar from "./Components/Navbar/Navbar";
//import { authOptions } from "../../pages/api/auth/[...nextauth]";


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
           <Navbar />
           <main>{children}</main>
            <Toaster />
            <Footer />
        </MySessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
