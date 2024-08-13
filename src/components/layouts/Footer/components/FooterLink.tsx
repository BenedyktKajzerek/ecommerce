import React from 'react';

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
  return (
    <li>
      <a href={href} target="_self" className="text-grey hover:text-white">
        {text}
      </a>
    </li>
  );
};

export { FooterLink };
