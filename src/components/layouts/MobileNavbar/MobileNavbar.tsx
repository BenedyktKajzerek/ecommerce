import React from "react";
import { Button } from "../../ui/Button";
import { HeaderLink } from "../Navbar/components/HeaderLink";

const MobileNavbar: React.FC = () => {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen bg-black flex flex-col justify-center items-center">
      <HeaderLink href="/" variant="headerLink" className="text-6xl my-6 font-extrabold">HOME</HeaderLink>
      <HeaderLink href="/about-us" variant="headerLink" className="text-6xl my-6 font-extrabold">ABOUT US</HeaderLink>
      <HeaderLink href="/showcase" variant="headerLink" className="text-6xl my-6 font-extrabold">SHOWCASE</HeaderLink>
      <HeaderLink href="/pricing" variant="headerLink" className="text-6xl my-6 font-extrabold">PRICING</HeaderLink>
      <Button url="/get-started/" text="Get Started" className="my-6"/>
    </div>
  );
};

export default MobileNavbar;
