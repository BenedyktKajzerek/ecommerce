import { Link } from "react-router-dom";

interface LinkProps {
  to: string;
  text: string;
};

function HeaderLink({ to, text }: LinkProps) {
    return (
        <Link
          to={ to }
          className="text-white hover:text-primary bg-clip-text mx-5 inline-block font-medium text-xl transition-colors" 
        >
          { text }
        </Link>
    );
};

export { HeaderLink };
