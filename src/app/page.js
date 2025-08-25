
import HeroSection from "./Components/HeroSection/HeroSection";
import { Button } from "@/components/ui/button";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import TopProducts from "./Components/TopProducts/TopProducts";
import InviteForRegistration from "./Components/InviteForRegistration/InviteForRegistration";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <TopProducts />
      <InviteForRegistration />
    </>
  );
}

//Live site: https://aurabeaute.netlify.app/
