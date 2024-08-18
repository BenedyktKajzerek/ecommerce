import audi from "../../../assets/cars/audi.jpg";
import bentley from "../../../assets/cars/bentley.jpg";
import mercedes3 from "../../../assets/cars/mercedes3.jpg";
import ferrari from "../../../assets/cars/ferrari.jpg";
import mustang from "../../../assets/cars/mustang.jpg";
import lamborghini from "../../../assets/cars/lamborghini.jpg";
import mercedes from "../../../assets/cars/mercedes.jpg";
import mercedes2 from "../../../assets/cars/mercedes2.jpg";
import bmw2 from "../../../assets/cars/bmw2.jpg";

import React from "react";
import { CarSlide } from "./components/CarSlide";

import { SLIDER_DATA } from "../../../data/data";

const cars = [
  lamborghini, mercedes3, ferrari,
  bentley, bmw2, mercedes, 
  mercedes2, audi, mustang,
];

 const SliderSection: React.FC = () => {
  return (
    <section className="pt-24 lg:pt-40 space-y-12">
      <div className="w-full h-[100px] m-auto relative overflow-hidden">
          {SLIDER_DATA.map((some, index) => (   
            <div key={index} className={`itemLeft itemL${index} flex flex-col`}>
              <span className="font-bold text-xl">{ some.header }</span>
              <span className="font-bold text-3xl text-primary-light">{ some.paragraph }</span>
            </div>                     
          ))}
      </div>

      <div className="w-full h-[300px] m-auto relative overflow-hidden">
          {cars.map((car, index) => (   
            <div key={index} className={`itemRight item${index}`}>
              <CarSlide
                key={index}
                src={car}
                variant={`clip-${index % 3 + 1}` as "clip-1" | "clip-2" | "clip-3"}
              />
            </div>                     
          ))}
      </div>
    </section>
  );
};

export { SliderSection };
