import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({ duration=1, delay=0.75, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ ref } className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={ mainControls }
        transition={{ duration: duration, delay: delay }}
      >
        { children }
      </motion.div>
    </div>
  );
};

export { ScrollReveal };
