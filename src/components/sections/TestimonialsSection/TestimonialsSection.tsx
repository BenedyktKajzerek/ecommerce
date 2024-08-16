import { Testimonial } from "./components";
import logo from "../../../assets/unknown.png";
import car from "../../../assets/cars/lamborghini2.jpg";

const TestimonialsSection = () => {
  return (
    <section className="pt-40">
      <div className="contaienr">
        <Testimonial 
          text="A work(life)saving app. We saved 40% of our time merchandising every month."
          personImage={ logo }
          carImage={ car }
          name="Hanny Eldblom"
          profession="Head of Ecommerce"/>
      </div>
    </section>
  );
};

export { TestimonialsSection };
