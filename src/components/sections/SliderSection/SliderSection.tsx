import React from "react";

 const SliderSection: React.FC = () => {
  return (
    <section className="pt-24 lg:pt-40 space-y-12">
      <div className="w-full h-[100px] m-auto relative overflow-hidden">
          {/* {carsLogos.map((carLogo, index) => (   
            <div key={index} className={`itemLeft item${index}`}>
              <img src={carLogo} alt="" className="size-24 grayscale"/>
            </div>                     
          ))} */}
      </div>

      <div className="w-full h-[300px] m-auto relative overflow-hidden">
          {/* {cars.map((car, index) => (   
            <div key={index} className={`itemRight item${index}`}>
              <CarSlide key={index} src={car} variant={`clip-${index%3+1}`}/>
            </div>                     
          ))} */}
      </div>
    </section>
  );
};

export { SliderSection };
