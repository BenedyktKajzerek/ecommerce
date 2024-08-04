import { HeroHome } from "./components/layouts/sections/HeroHome";
import { PageHeader } from "./components/layouts/PageHeader";
import { SectionTwo } from "./components/layouts/sections/SectionTwo";

export default function App() {
  return (
    <>
        <PageHeader />

        <main>
            <HeroHome />

            <SectionTwo />
        </main>

    </>
  )
}
