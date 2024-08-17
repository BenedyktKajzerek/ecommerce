import { Button } from "../../ui/Button"
import img from "../../../assets/unknown.png"

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules'

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function SwiperSection() {

  return (
    <section className="pt-20 lg:pt-40 overflow-hidden">
      <div className="container slider-500">

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
          <SwiperSlide className="flex flex-col md:max-h-[700px] md:flex-row xs:rounded-3xl overflow-hidden">
            <div className="md:w-1/2">
              <img src={img} alt="" className="w-full h-auto"/>    
            </div>
            <div className="swiper-content-clamp md:w-1/2 bg-pink flex flex-col text-center align-middle justify-center">
              <h3 className="swiper-header text-[calc(20px+3vw)] font-extrabold leading-[calc(15px+3vw)] 3xl:leading-[4rem] mb-12">
                PREMIUM<br /> 
                <span className="span-stroke">DETAILING</span>
              </h3>
              <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex libero vero hic doloribus amet, beatae eveniet inventore soluta sapiente.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col md:max-h-[700px] md:flex-row xs:rounded-3xl overflow-hidden">
            <div className="md:w-1/2">
              <img src={img} alt="" className="w-full h-auto"/>    
            </div>
            <div className="swiper-content-clamp md:w-1/2 bg-yellow flex flex-col text-center align-middle justify-center">
              <h3 className="swiper-header text-[calc(20px+3vw)] font-extrabold leading-[calc(15px+3vw)] 3xl:leading-[4rem] mb-12">
                PREMIUM<br /> 
                <span className="span-stroke">DETAILING</span>
              </h3>
              <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex libero vero hic doloribus amet, beatae eveniet inventore soluta sapiente.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col md:max-h-[700px] md:flex-row xs:rounded-3xl overflow-hidden">
            <div className="md:w-1/2">
              <img src={img} alt="" className="w-full h-auto"/>    
            </div>
            <div className="swiper-content-clamp md:w-1/2 bg-purple flex flex-col text-center align-middle justify-center">
              <h3 className="swiper-header text-[calc(20px+3vw)] font-extrabold leading-[calc(15px+3vw)] 3xl:leading-[4rem] mb-12">
                PREMIUM<br /> 
                <span className="span-stroke">DETAILING</span>
              </h3>
              <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex libero vero hic doloribus amet, beatae eveniet inventore soluta sapiente.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col md:max-h-[700px] md:flex-row xs:rounded-3xl overflow-hidden">
            <div className="md:w-1/2">
              <img src={img} alt="" className="w-full h-auto"/>    
            </div>
            <div className="swiper-content-clamp md:w-1/2 bg-cyan flex flex-col text-center align-middle justify-center">
              <h3 className="swiper-header text-[calc(20px+3vw)] font-extrabold leading-[calc(15px+3vw)] 3xl:leading-[4rem] mb-12">
                PREMIUM<br /> 
                <span className="span-stroke">DETAILING</span>
              </h3>
              <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex libero vero hic doloribus amet, beatae eveniet inventore soluta sapiente.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col md:max-h-[700px] md:flex-row xs:rounded-3xl overflow-hidden">
            <div className="md:w-1/2">
              <img src={img} alt="" className="w-full h-auto"/>    
            </div>
            <div className="swiper-content-clamp md:w-1/2 bg-green flex flex-col text-center align-middle justify-center">
              <h3 className="swiper-header text-[calc(20px+3vw)] font-extrabold leading-[calc(15px+3vw)] 3xl:leading-[4rem] mb-12">
                PREMIUM<br /> 
                <span className="span-stroke">DETAILING</span>
              </h3>
              <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex libero vero hic doloribus amet, beatae eveniet inventore soluta sapiente.</p>
            </div>
          </SwiperSlide>
            

        </Swiper>

        <div className="swiper-custom-pagination swiper-pagination-clickable mt-20  flex justify-center gap-5"/>
        
        <div className="flex justify-center">
          <Button url="/" text="Get Started" size="large" withArrow={true} className="bg-primary-light mt-16"/>
        </div>
          
      </div>
    </section>
  )
}

export { SwiperSection };
