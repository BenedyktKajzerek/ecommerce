import { Navbar } from "./components/layouts/Navbar";
import { HeroHome } from "./components/sections/HeroHome";
import { IconsSection } from "./components/sections/IconsSection";
// import { SliderSection } from "./components/sections/SliderSection";
import { SwiperSection } from "./components/sections/SwiperSection";
import { GallerySection } from "./components/sections/GallerySection/GallerySection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { Footer } from "./components/layouts/Footer";
import { Idkyet } from "./components/sections/idkyet";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroHome />
        <IconsSection />
        {/* <SliderSection /> */}
        <SwiperSection />
        {/* <Idkyet /> */}
        <GallerySection />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
};
