import { Quote } from "lucide-react";
import React from "react";

interface TestimonialProps {
  text: string;
  personImage: string;
  carImage: string;
  name: string;
  profession: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
  text, 
  personImage, 
  carImage, 
  name, 
  profession 
}) => {
  return (
    <div className="max-w-[1120px] w-full mr-auto ml-auto flex gap-4">
      <div className="bg-grey-dark border max-w-[552px] w-full h-[460px] flex flex-col items-center justify-center border-[#303030] rounded-[50px] text-4xl font-bold p-16 text-center gap-4">
        <Quote className="w-28 h-28" color="grey"/>
        { text }
      </div>

      <div className="max-w-[552px] w-full flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="bg-grey-dark h-[268px] border border-[#303030] rounded-[50px] w-full overflow-hidden">
            <img src={ personImage } alt={ name } className="w-full h-auto"/>
          </div>

          <div className="bg-grey-dark h-[268px] border border-[#303030] rounded-[50px] w-full overflow-hidden flex items-center">
            <img src={ carImage } alt={`${ name }'s car`} className="w-full h-auto" />
          </div>
        </div>

        <div className="bg-grey-dark h-[178px] border border-[#303030] rounded-[50px] flex flex-col items-center justify-center gap-2">
          <h6 className="font-medium text-5xl">{ name }</h6>

          <p className="font-medium text-lg">{ profession }</p>
        </div>
      </div>
    </div>
  );
};

export { Testimonial };
