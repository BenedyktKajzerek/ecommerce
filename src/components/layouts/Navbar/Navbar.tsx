import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/unknown.png"
import { Link } from "./components/Link";
import { Button } from "../../ui/Button";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsNavbarOpen(false)
    }

    window.addEventListener("resize", handler)

    return () => {
      removeEventListener("resize", handler)
    }
  }, [])

  function isScreenSmall() {
    return window.innerWidth < 1024
  }
  
  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      <nav>
        <div className="container h-36 flex justify-between items-center gap-10 py-10">
          <a href="/" className="block size-10 z-[999]">
              <img src={logo} alt="Logo"/>
          </a>

          <div className="flex-shrink-0 gap-2 hidden lg:flex">
            <ul className="flex">
              <Link href="/" variant="headerLink">Home</Link>
              <Link href="/about-us" variant="headerLink">About Us</Link>
              <Link href="/showcase" variant="headerLink">Showcase</Link>
              <Link href="/pricing" variant="headerLink">Pricing</Link>
            </ul>
          </div>

          <div className="flex-shrink-0 hidden lg:flex">
            <Button url="/" text="Get Started"/>
          </div>

          <div className="flex lg:hidden z-[999]">
            <button onClick={() => setIsNavbarOpen(n => !n)}>
              {isNavbarOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isNavbarOpen && (<MobileNavbar />)}
        </div>
      </nav>
    </header>
  )
}

export { Navbar };
