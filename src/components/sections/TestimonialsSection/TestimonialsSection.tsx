import { Testimonial } from "./components";
import logo from "../../../assets/unknown.png";
import car from "../../../assets/cars/lamborghini2.jpg";

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
          <Testimonial 
            text="A work(life)saving app. We saved 40% of our time merchandising every month."
            personImage={ logo }
            carImage={ car }
            name="Hanny Eldblom"
            profession="Head of Ecommerce"/>
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
