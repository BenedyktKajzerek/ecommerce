import { Link } from 'react-router-dom';
import React from 'react';

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
  return (
    <li>
      <Link to={href} target="_self" className="text-grey hover:text-white">
        {text}
      </Link>
    </li>
  );
};

export { FooterLink };
