import { Testimonial } from "./components";
import car from "../../../assets/cars/bmw.jpg";
import car2 from "../../../assets/cars/minicooper.jpg";
import car3 from "../../../assets/cars/bmw4.jpg";
import person from "../../../assets/testimonials/man.jpg";
import person2 from "../../../assets/testimonials/woman.jpg";
import person3 from "../../../assets/testimonials/man2.jpg";

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

const TestimonialsSection = () => {
  return (
    <section className="pt-40">
      <div className="container flex flex-col gap-12">
        <div className="max-w-[1120px] w-full ml-auto mr-auto">
            <h3 className="text-[calc(35px+5vw)] font-extrabold leading-[calc(35px+5vw)] mb-12">
              <span className="span-stroke-testimonials">THE</span>
              <br /> EXPERIENCE
            </h3>
        </div>

        <div>
          {testimonials.map(testimonial => (
            <Testimonial 
              text={ testimonial.text }
              personImage={ testimonial.personImage }
              carImage={ testimonial.carImage }
              name={ testimonial.name }
              profession={ testimonial.profession }
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
