import car from "../../../assets/car.mp4"
import Tilt from "react-parallax-tilt"
import { Button } from "../../ui/Button"
import { Content } from "../../ui/Content"

const btns = [
  <Button url="/get-started" text="Get Started" withArrow={true} size="large" className="bg-primary" />,
  <Button url="/get-more-info" text="Get More Info" size="large" />
];

const HeroHome = () => {
  return (
    <section className="pt-40">
      <div className="container flex flex-col lg:flex-row lg:justify-between items-center h-[600px]">
        <Content 
          header="PREMIUM DETAILING"
          paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae odio quos, debitis voluptatibus nihil corrupti perspiciatis distinctio soluta velit sunt." buttons={btns}
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
  );
};

export { HeroHome };
