import { Testimonial } from "./components";
import car from "../../../assets/testimonialsSection/bmw.jpg";
import car2 from "../../../assets/testimonialsSection/minicooper.jpg";
import car3 from "../../../assets/testimonialsSection/bmw4.jpg";
import person from "../../../assets/testimonialsSection/man.jpg";
import person2 from "../../../assets/testimonialsSection/woman.jpg";
import person3 from "../../../assets/testimonialsSection/man2.jpg";

import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

const testimonials = [
  {
    text: "Impeccable detailing that made my car look brand new. Highly recommend their service!",
    personImage: person,
    carImage: car,
    name: "James Roberts",
    profession: "Automotive Blogger",
  },
  {
    text: "Quick, effective, and flawless. The detailing service exceeded my expectations!",
    personImage: person2,
    carImage: car2,
    name: "Sarah Carter",
    profession: "Luxury Car Dealership Manager",
  },
  {
    text: "Exceptional quality and timely service. My car has never looked better!",
    personImage: person3,
    carImage: car3,
    name: "Michael Brown",
    profession: "Car Collector",
  },
];

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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(testimonials.length - 2) * 129}%`]);

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
