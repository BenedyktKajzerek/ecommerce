import { Button } from "../../ui/button/Button"

import img from "../../../assets/unknown.png"

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react"

import { Pagination } from 'swiper/modules'

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function SectionFour() {

    return (
        <section className="pt-20 lg:pt-40 overflow-hidden">
            <div className={"container slider-500"}>

                <Swiper 
                    modules={[Pagination]} 
                    slidesPerView={1} 
                    spaceBetween={75} 
                    pagination={{
                        clickable: true,
                        el: ".swiper-custom-pagination",
                        renderBullet: function (index, className) {
                            return '<span class="swiper-pagination-bullet">' + '</span>';
                        }
                    }}
                    centeredSlides={true}
                    className="mySwiper max-h-[700px] flex justify-center overflow-visible text-black"
                >
                    <SwiperSlide className="flex flex-col md:flex-row xs:rounded-3xl overflow-hidden">
                        <div className="md:w-1/2">
                            <img src={img} alt="" className="w-full h-full"/>    
                        </div>
                        <div className="md:w-1/2 bg-pink p-20 flex flex-col text-center align-middle justify-center">
                            <h1 className="text-7xl font-extrabold mb-12">COOL CARS, FAST CARS</h1>
                            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex libero vero hic doloribus amet, beatae eveniet inventore soluta sapiente.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col md:flex-row xs:rounded-3xl overflow-hidden">
                        <div className="md:w-1/2">
                            <img src={img} alt="" className="w-full h-full"/>    
                        </div>
                        <div className="md:w-1/2 bg-yellow p-20 flex flex-col text-center align-middle justify-center">
                            <h1 className="text-7xl font-extrabold mb-12">Lorem, ipsum.</h1>
                            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex libero vero hic doloribus amet, beatae eveniet inventore soluta sapiente.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col md:flex-row xs:rounded-3xl overflow-hidden">
                        <div className="md:w-1/2">
                            <img src={img} alt="" className="w-full h-full"/>    
                        </div>
                        <div className="md:w-1/2 bg-purple p-20 flex flex-col text-center align-middle justify-center">
                            <h1 className="text-7xl font-extrabold mb-12">Lorem, ipsum.</h1>
                            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex libero vero hic doloribus amet, beatae eveniet inventore soluta sapiente.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col md:flex-row xs:rounded-3xl overflow-hidden">
                        <div className="md:w-1/2">
                            <img src={img} alt="" className="w-full h-full"/>    
                        </div>
                        <div className="md:w-1/2 bg-cyan p-20 flex flex-col text-center align-middle justify-center">
                            <h1 className="text-7xl font-extrabold mb-12">Lorem, ipsum.</h1>
                            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex libero vero hic doloribus amet, beatae eveniet inventore soluta sapiente.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col md:flex-row xs:rounded-3xl overflow-hidden">
                        <div className="md:w-1/2">
                            <img src={img} alt="" className="w-full h-full"/>    
                        </div>
                        <div className="md:w-1/2 bg-green p-20 flex flex-col text-center align-middle justify-center">
                            <h1 className="text-7xl font-extrabold mb-12">Lorem, ipsum.</h1>
                            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex libero vero hic doloribus amet, beatae eveniet inventore soluta sapiente.</p>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className="swiper-custom-pagination swiper-pagination-clickable mt-48 flex justify-center gap-5"/>
                
                <div className="flex justify-center">
                    <Button url="/" text="Get Started" size="large" withArrow={true} className="bg-primary-light mt-16"/>
                </div>
                
            </div>
        </section>
    )
}