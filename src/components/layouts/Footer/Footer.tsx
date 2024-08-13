import React from 'react';
import logo from "../../../assets/unknown.png";
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { FooterColumn, FooterLink, SocialIcon } from './components';
import { Button } from '../../ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand and Social Icons */}
          <div className="space-y-4">
            <a href="/" className="block">
              <img
                src={logo}
                alt="Detailing"
                className="w-24 lg:w-48"
              />
            </a>

            <ul className="flex space-x-4">
                <SocialIcon
                    href="https://www.facebook.com/"
                    Icon={Facebook}
                    alt="Facebook"
                />
                <SocialIcon
                    href="https://www.youtube.com/channel/"
                    Icon={Youtube}
                    alt="YouTube"
                />
                <SocialIcon
                    href="https://x.com/"
                    Icon={Twitter}
                    alt="Twitter"
                />
                <SocialIcon
                    href="https://www.instagram.com/"
                    Icon={Instagram}
                    alt="Instagram"
                />
            </ul>

            <div className="text-sm text-gray-400">
              <p>Premium Detailing Los Angeles</p>
              <p>Copyright 2024 - Premium Detailing - All rights reserved.</p>
            </div>
          </div>

          {/* Experiences */}
          <FooterColumn title="Experiences">
            <FooterLink href="/" text="Privacy Policy" />
            <FooterLink href="/" text="Terms & Conditions" />
            <FooterLink href="/" text="Cookies" />
          </FooterColumn>

          {/* About */}
          <FooterColumn title="About">
            <FooterLink href="/" text="Our Story" />
            <FooterLink href="/" text="FAQ" />
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Contact">
            <FooterLink href="/" text="carscontact@gmail.com" />
            <FooterLink href="/" text="123 456 789" />
            <FooterLink href="/" text="Get In Touch" />
          </FooterColumn>

        
          <div className="space-y-4">
            <Button url="/get-more-info" text="Get More Info" size="large"/>
            <Button url="/get-started" text="Get Started" withArrow={true} size="large" className="bg-primary"></Button>
          </div>


        </div>
      </div>
    </footer>
  );
};

export { Footer };
