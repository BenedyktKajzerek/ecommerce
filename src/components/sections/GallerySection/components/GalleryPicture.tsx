import React from "react";
import { ArrowRight } from "lucide-react";

interface GalleryPictureProps {
  imageSrc: string;
  imageAlt: string;
  hrefLink: string;
  ribbonText: string;
  ribbonBgColor: string;
  rotate: "left" | "right";
};

const GalleryPicture: React.FC<GalleryPictureProps> = ({
  imageSrc,
  imageAlt,
  hrefLink,
  ribbonText,
  ribbonBgColor,
  rotate
}) => {
  return (
    <a href={ hrefLink } className={`rotate-${ rotate } block relative max-w-[700px]`}>
      <div className="overflow-hidden">
        <img src={ imageSrc } alt={ imageAlt } className="h-auto hover:scale-105 transition-transform"/>
      </div>
      
      <div className={`ribbon ${ribbonBgColor} w-full absolute top-1/2 flex justify-center items-center overflow-hidden text-nowrap`}>
        <div><ArrowRight className="size-[calc(6px+1.6vw)] 2xl:size-10 sm:mt-1 ml-2 mr-2 sm:ml-5 sm:mr-5"/></div>
        <div>{ ribbonText }</div>
        <div><ArrowRight className="size-[calc(6px+1.6vw)] 2xl:size-10 sm:mt-1 ml-2 mr-2 sm:ml-5 sm:mr-5"/></div>
        <div>{ ribbonText }</div>
        <div><ArrowRight className="size-[calc(6px+1.6vw)] 2xl:size-10 sm:mt-1 ml-2 mr-2 sm:ml-5 sm:mr-5"/></div>
      </div>
    </a>
  );
};

export { GalleryPicture };
