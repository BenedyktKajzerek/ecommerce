import React from 'react';
import logo from "../../../assets/unknown.png";
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { FooterColumn, FooterLink, SocialIcon } from './components';
import { Button } from '../../ui/Button';

const socialMedia = [
  {
    href: "https://www.facebook.com/",
    Icon: Facebook,
    alt: "Facebook",
  },
  {
    href: "https://www.youtube.com/",
    Icon: Youtube,
    alt: "YouTube",
  },
  {
    href: "https://x.com/",
    Icon: Twitter,
    alt: "Twitter",
  },
  {
    href: "https://www.instagram.com/",
    Icon: Instagram,
    alt: "Instagram",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="text-white pt-40 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row justify-between gap-8 md:gap-20">

          {/* Brand and Social Media */}
          <div className="flex flex-col gap-y-8">
            <a href="/" className="block">
              <img
                src={logo}
                alt="Detailing"
                className="w-10"
              />
            </a>
  
            <ul className="flex gap-x-4">
              {socialMedia.map((social, index) => (
                <SocialIcon
                  key={ index }
                  href={ social.href }
                  Icon={ social.Icon }
                  alt={ social.alt }
                />
              ))}
            </ul>

            <div className="text-sm text-grey">
              <p>Premium Detailing Los Angeles</p>
              <p>Copyright 2024 - Premium Detailing - All rights reserved.</p>
            </div>
          </div>

          <div className='xl:max-w-[900px] w-full flex flex-col md:flex-row md:justify-between gap-y-10'>
            {/* Experiences */}
            <FooterColumn title="Legal">
              <FooterLink href="#" text="Terms & Conditions" />
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Cookies" />
            </FooterColumn>

            {/* About */}
            <FooterColumn title="About">
              <FooterLink href="/about-us" text="Our Story" />
              <FooterLink href="/faq" text="FAQ" />
            </FooterColumn>

            {/* Contact */}
            <FooterColumn title="Contact">
              <FooterLink href="mailto:carscontact@gmail.com" text="carscontact@gmail.com" />
              <FooterLink href="tel:123%20456%20789" text="123 456 789" />
              <FooterLink href="/contact" text="Get In Touch" />
            </FooterColumn>

            {/* Buttons */}
            <div className="flex flex-row md:flex-col gap-6 -order-1 md:order-1">
              <Button url="/faq" text="Learn More" size="small" className="w-full"/>
              <Button url="/contact" text="Get Started" withArrow={ true } size="small" className="bg-primary w-full" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export { Footer };
