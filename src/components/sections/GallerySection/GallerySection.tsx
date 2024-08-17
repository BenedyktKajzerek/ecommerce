import React from "react";
import car from "../../../assets/gallerySection/mazdarx7.jpg";
import car2 from "../../../assets/gallerySection/mercedes.jpg";
import { GalleryPicture } from "./components";

const GallerySection: React.FC = () => {
  return (
    <section className="pt-40">
      <div className="container">
        <div className="grid grid-cols-2 text-[calc(4px+1.2vw)] lg:text-[calc(6px+1.6vw)] 2xl:text-4xl text-black font-medium">
          <GalleryPicture
            imageSrc={ car }
            imageAlt="Mazda Rx-7"
            hrefLink="/get-started/"
            ribbonText="GET STARTED"
            ribbonBgColor="bg-cyan"
            rotate="left"
          />

          <GalleryPicture
            imageSrc={ car2 }
            imageAlt="Mercedes"
            hrefLink="/faq/"
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
