import React from "react";
import car from "../../../assets/gallerySection/mazdarx7.jpg";
import car2 from "../../../assets/gallerySection/mercedes.jpg";
import { GalleryPicture } from "./components";

const GallerySection: React.FC = () => {
  return (
    <section className="pt-40">
      <div className="container">

        <div className="max-w-[1120px] w-full">
          <h3 className="text-[calc(35px+5vw)] font-extrabold leading-[calc(35px+5vw)] mb-12">
            <span className="span-stroke-white">THE</span>
            <br />EXPERIENCE
          </h3>
        </div>
        
        <div className="grid grid-cols-2 text-[calc(4px+1.2vw)] lg:text-[calc(6px+1.6vw)] 2xl:text-4xl text-black font-medium mt-52">
          <GalleryPicture
            imageSrc={ car }
            imageAlt="Mazda Rx-7"
            hrefLink="/contact"
            ribbonText="GET STARTED"
            ribbonBgColor="bg-cyan"
            rotate="left"
          />

          <GalleryPicture
            imageSrc={ car2 }
            imageAlt="Mercedes"
            hrefLink="/faq"
            ribbonText="LEARN MORE"
            ribbonBgColor="bg-purple"
            rotate="right"
          />
        </div>

      </div>
    </section>
  );
};

export { GallerySection };
