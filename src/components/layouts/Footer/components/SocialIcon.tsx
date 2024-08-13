import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  href: string;
  Icon: LucideIcon;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, Icon, alt }) => {
  return (
    <li>
      <a href={href} target="_blank" className="block">
        <Icon className="w-6 h-6 hover:scale-110 transition-transform" aria-label={alt} />
      </a>
    </li>
  );
};

export { SocialIcon };
