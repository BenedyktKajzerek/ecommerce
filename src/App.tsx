import { HeroHome } from "./components/sections/HeroHome";
import { Navbar } from "./components/layouts/Navbar";
import { IconsSection } from "./components/sections/IconsSection";
import { SliderSection } from "./components/sections/SliderSection";
import { SwiperSection } from "./components/sections/SwiperSection";
import { Footer } from "./components/layouts/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroHome />
        <IconsSection />
        <SliderSection />
        <SwiperSection />
      </main>

      <Footer />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
};
