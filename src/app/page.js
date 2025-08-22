import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      
    </>
  );
}

//Live site: https://aurabeaute.netlify.app/
