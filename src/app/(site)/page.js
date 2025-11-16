
import HeroSection from "./Components/HeroSection/HeroSection";
import { Button } from "@/components/ui/button";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import TopProducts from "./Components/TopProducts/TopProducts";
import InviteForRegistration from "./Components/InviteForRegistration/InviteForRegistration";
import CategoriesSection from "./Components/CategoriesSection/CategoriesSection.jsx";
import BrandValuesSection from "./Components/BrandValuesSection/BrandValuesSection.jsx";
import TestimonialsSection from "./Components/TestimonialSection/TestimonialSection.jsx";
import SpecialOfferBanner from "./Components/SpecialOfferBanner/SpecialOfferBanner";
import InstagramGallery from "./Components/InstagramGallery/InstagramGallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <FeaturedProducts />
      <TopProducts />
      <CategoriesSection />
      <BrandValuesSection />
      <TestimonialsSection />
      <SpecialOfferBanner />
      
      <InviteForRegistration />
      <InstagramGallery />
    </>
  );
}

//Live site: https://aurabeaute.netlify.app/
