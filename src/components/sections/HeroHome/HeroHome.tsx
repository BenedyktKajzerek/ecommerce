import car from "../../../assets/HeroHome/car.mp4";
import Tilt from "react-parallax-tilt";
import { Button } from "../../ui/Button";
import { Content } from "../../ui/Content";
import React from "react";
import { ScrollReveal } from "../../ui/ScrollReveal";

const btns = [
  <Button url="/get-started/" text="Get Started" withArrow={true} size="large" className="bg-primary" />,
  <Button url="/faq/" text="Learn More" size="large" />,
];

const HeroHome: React.FC = () => {
  return (
    <ScrollReveal duration={ 1 } delay={ 0.25 }>
    <section className="pt-52">
      <div className="container flex flex-col lg:flex-row lg:justify-between items-center h-[600px]">

          <Content 
            header="PREMIUM DETAILING"
            paragraph="Elevate your ride with our premium detailing. We don't settle for ordinary. Step into a realm where cars are not just washed; they are transformed." buttons={btns}
            align="left"
          />

        <Tilt>
          <div className="sm:min-w-[420px] max-w-[760px] max-h-[460px] h-full w-full bg-gradient-to-br from-primary-light to-secondary-dark p-2 rounded-2xl">
            <video
              src={car}
              autoPlay
              muted
              loop
              className="rounded-2xl"
            />
          </div>
        </Tilt>

      </div>
    </section>
    </ScrollReveal>
  );
};

export { HeroHome };
