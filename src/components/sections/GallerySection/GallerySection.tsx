import { ArrowRight } from "lucide-react";
import car from "../../../assets/gallerySection/mazdarx7.jpg"
import car2 from "../../../assets/gallerySection/mercedes.jpg"

const GallerySection = () => {
  return (
    <section className="pt-40">
      <div className="container">

        <div className="grid grid-cols-2 text-[calc(4px+1.2vw)] lg:text-[calc(6px+1.6vw)] 2xl:text-4xl text-black font-medium">
          <a href="/get-started/" className="rotate-1 block relative max-w-[700px] z-10">
            <div>
              <img src={ car } alt="Mazda Rx-7" className="h-auto"/>
            </div>
            
            <div className="ribbon bg-cyan w-full absolute top-1/2 flex justify-center items-center text-nowrap">
              <div><ArrowRight className="size-[calc(6px+1.6vw)] 2xl:size-10 sm:mt-1 ml-2 mr-2 sm:ml-5 sm:mr-5"/></div>
              <div>GET STARTED</div>
              <div><ArrowRight className="size-[calc(6px+1.6vw)] 2xl:size-10 sm:mt-1 ml-2 mr-2 sm:ml-5 sm:mr-5"/></div>
              <div>GET STARTED</div>
              <div><ArrowRight className="size-[calc(6px+1.6vw)] 2xl:size-10 sm:mt-1 ml-2 mr-2 sm:ml-5 sm:mr-5"/></div>
            </div>
          </a>

          <a href="/faq/" className="rotate-2 block relative max-w-[700px]">
            <div>
              <img src={ car2 } alt="Mercedes" className="h-auto"/>
            </div>
            
            <div className="ribbon bg-purple w-full absolute top-1/2 flex justify-center items-center overflow-hidden text-nowrap">
              <div><ArrowRight className="size-[calc(6px+1.6vw)] 2xl:size-10 sm:mt-1 ml-2 mr-2 sm:ml-5 sm:mr-5"/></div>
              <div>LEARN MORE</div>
              <div><ArrowRight className="size-[calc(6px+1.6vw)] 2xl:size-10 sm:mt-1 ml-2 mr-2 sm:ml-5 sm:mr-5"/></div>
              <div>LEARN MORE</div>
              <div><ArrowRight className="size-[calc(6px+1.6vw)] 2xl:size-10 sm:mt-1 ml-2 mr-2 sm:ml-5 sm:mr-5"/></div>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
};

export { GallerySection };
