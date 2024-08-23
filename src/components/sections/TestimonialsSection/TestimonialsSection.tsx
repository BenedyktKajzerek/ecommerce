import { Testimonial } from "./components";
import { testimonials } from "../../../data/testimonialsData";

import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="pt-40">
      <div className="container flex flex-col gap-12">

        <div className="hidden lg:block">
          <HorizontalScrollCarousel />
        </div>

        <div className="block lg:hidden">
          <Testimonial 
            text={ testimonials[2].text }
            personImage={ testimonials[2].personImage }
            carImage={ testimonials[2].carImage }
            name={ testimonials[2].name }
            profession={ testimonials[2].profession }
          />
        </div>
      
      </div>
    </section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={ targetRef } className="relative h-[300vh]">
      <div className="sticky top-0 flex max-w-full h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-40"
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={ index }
              text={ testimonial.text }
              personImage={ testimonial.personImage }
              carImage={ testimonial.carImage }
              name={ testimonial.name }
              profession={ testimonial.profession }
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export { TestimonialsSection };
