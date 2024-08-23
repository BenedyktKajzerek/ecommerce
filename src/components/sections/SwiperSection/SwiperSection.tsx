import React from "react";
import { Button } from "../../ui/Button";
import { slides } from "../../../data/swiperData"

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Slide } from "./components";

const SwiperSection: React.FC = () => {
  return (
    <section className="pt-20 lg:pt-40 overflow-hidden">
      <div className="container slider-500 overflow-visible">

        <Swiper 
          modules={[Pagination]} 
          slidesPerView={1} 
          spaceBetween={75} 
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
            renderBullet: () => {
              return '<span class="swiper-pagination-bullet">' + '</span>';
            }
          }}
          centeredSlides={true}
          className="mySwiper md:max-h-[700px] flex justify-center overflow-visible text-black"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={ index } className="">
              <Slide
                imageSrc={ slide.imageSrc }
                imageAlt={ slide.imageAlt }
                bgColor={ slide.bgColor }
                header={ slide.header }
                headerStroke={ slide.headerStroke }
                paragraph={ slide.paragraph }
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-custom-pagination swiper-pagination-clickable mt-20 flex justify-center gap-5"/>
        
        <div className="flex justify-center">
          <Button url="/contact" text="Get Started" size="large" withArrow={ true } className="bg-primary-light mt-16"/>
        </div>
          
      </div>
    </section>
  );
};

export { SwiperSection };
