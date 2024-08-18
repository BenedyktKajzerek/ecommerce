import React from "react";

interface SlideProps {
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  header: string;
  headerStroke: string;
  paragraph: string;
};

const Slide: React.FC<SlideProps> = ({
  imageSrc,
  imageAlt,
  bgColor,
  header,
  headerStroke,
  paragraph
}) => {
  return (
    <>
      <div className="md:w-1/2">
        <img src={ imageSrc } alt={ imageAlt } className="w-full h-auto"/>    
      </div>

      <div className={`swiper-content-clamp ${ bgColor } md:w-1/2 flex flex-col text-center align-middle justify-center`}>
        <h3 className="swiper-header text-[calc(20px+3vw)] font-extrabold leading-[calc(15px+3vw)] 3xl:leading-[4rem] mb-12 uppercase">
          { header }<br /> 
          <span className="span-stroke">{ headerStroke }</span>
        </h3>

        <p className="text-xl">{ paragraph }</p>
      </div>
    </>
  );
};

export { Slide };
