import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/unknown.png"
import { Button } from "../../ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { HeaderLink, MobileLink } from "./components";

const headerLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about-us" },
  { title: "Learn More", href: "/faq" },
  { title: "Contact", href: "/contact" },
]

const navbarVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const Navbar: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsNavbarOpen(false);
    };

    window.addEventListener("resize", handler);

    return () => {
      removeEventListener("resize", handler);
    };
  }, []);

  function isScreenSmall() {
    return window.innerWidth < 1024
  };
  
  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      <nav>
        <div className="container h-36 flex justify-between items-center gap-10 py-10">
          <a href="/" className="block size-10 z-[999]">
              <img src={logo} alt="Logo"/>
          </a>

          {/* Navbar Links */}
          <div className="flex-shrink-0 gap-2 hidden lg:flex">
            <ul className="flex">
              {headerLinks.map((link, index) => (
                <HeaderLink
                  key={ index }
                  href={ link.href }
                  title={ link.title }
                />
              ))}
            </ul>
          </div>

          <div className="flex-shrink-0 hidden lg:flex">
            <Button url="/contact" text="Get Started"/>
          </div>

          {/* Navbar Hamburger */}
          <div className="flex lg:hidden z-[999]">
            <button onClick={() => setIsNavbarOpen(n => !n)}>
              {isNavbarOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navbar */}
          <AnimatePresence>
            {isNavbarOpen && (
              <motion.div
                variants={ navbarVariants }
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed left-0 top-0 w-full h-screen origin-top bg-black p-10"
              >
                <div className="h-full flex flex-col">
                  <motion.div
                    variants={ containerVariants }
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full justify-center items-center gap-12"
                  >
                    {headerLinks.map((link, index) => (
                      <div className="overflow-hidden">
                        <MobileLink
                          key={ index }
                          href={ link.href }
                          title={ link.title }
                          className="text-4xl sm:text-6xl font-extrabold"
                          />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
