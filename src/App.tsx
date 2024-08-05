import { HeroHome } from "./components/layouts/sections/HeroHome";
import { PageHeader } from "./components/layouts/PageHeader";
import { SectionTwo } from "./components/layouts/sections/SectionTwo";
import { SectionThree } from "./components/layouts/sections/SectionThree";

export default function App() {
  return (
    <>
        <PageHeader />

        <main>
            <HeroHome />

            <SectionTwo />

            <SectionThree />
            
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </main>
    </>
  )
}
