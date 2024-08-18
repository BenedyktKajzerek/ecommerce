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
    <div className="max-w-[1120px] w-full flex flex-col flex-shrink-0 items-center lg:items-start lg:flex-row gap-4">
      <div className="bg-grey-dark lg:max-w-[552px] w-full xs:h-[460px] flex flex-col lg:items-center justify-center lg:text-center border border-[#303030] rounded-[24px] xs:rounded-[50px] text-2xl xs:text-4xl font-bold py-12 px-6 xs:p-16 gap-4">
        <Quote className="size-20 xs:size-28" color="grey"/>
        { text }
      </div>

      <div className="lg:max-w-[552px] w-full flex flex-col-reverse lg:flex-col gap-4 flex-shrink-0">
        <div className="flex flex-col xs:flex-row gap-4 h-full">
          <div className="bg-grey-dark w-full h-max-[250px] rounded-[24px] xs:rounded-[50px] border border-[#303030] overflow-hidden aspect-square">
            <img
              src={ personImage }
              alt={ name }
              className="w-full h-auto grayscale"
            />
          </div>

          <div className="bg-grey-dark w-full rounded-[24px] xs:rounded-[50px] border border-[#303030] overflow-hidden aspect-square">
            <img
              src={ carImage }
              alt={`${ name }'s car`}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-grey-dark h-[178px] border border-[#303030] rounded-[24px] xs:rounded-[50px] flex flex-col items-center justify-center gap-2">
          <h6 className="font-medium text-3xl xs:text-5xl">{ name }</h6>

          <p className="font-medium text-sm xs:text-lg">{ profession }</p>
        </div>
      </div>
    </div>
  );
};

export { Testimonial };
