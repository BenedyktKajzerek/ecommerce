import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type LinkProps = ComponentProps<"a"> & {
  href: string;
  title: string;
};

const HeaderLink: React.FC<LinkProps> = ({ href, title, className }) => {
    return (
      <Link
        to={ href }
        className={twMerge(
          "text-white hover:text-primary bg-clip-text mx-5 inline-block font-medium text-xl transition-colors", 
          className
        )}
        >
        { title }
      </Link>
    );
};

export { HeaderLink };
