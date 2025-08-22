import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import { Button } from "@/components/ui/button";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import TopProducts from "./Components/TopProducts/TopProducts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <TopProducts />
    </>
  );
}

//Live site: https://aurabeaute.netlify.app/
