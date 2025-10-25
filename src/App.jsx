import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import Flavortitle from "./components/FlavorTitle";
import FlavorSlider from "./components/FlavorSlider";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";



gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
    <NavBar />
    <HeroSection />
    <MessageSection />
    <FlavorSection />
    <NutritionSection />
    <div>
    <BenefitSection />
    <TestimonialSection/>
    </div>

    <FooterSection/>
    
    </div>
  )
}

export default App
