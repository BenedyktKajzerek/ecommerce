import { ComponentProps } from "react";
import { HeaderLink } from "./HeaderLink";
import { motion } from "framer-motion";

const mobileLinkVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1]
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1]
    },
  },
};

type LinkProps = ComponentProps<"a"> & {
  href: string;
  title: string;
};

const MobileLink: React.FC<LinkProps> = ({ href, title, className }) => {
    return (
      <motion.div variants={ mobileLinkVariants }>
        <HeaderLink href={ href } title={ title } className={ className } />
      </motion.div>
    );
};

export { MobileLink };
