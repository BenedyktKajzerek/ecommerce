import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


export const carSlideVariants = cva(["h-[300px] bg-slate-500 flex items-center"], {
    variants: {
        variant: {
            ["clip-1"]: ["w-[300px] rounded-t-[200px]"],
            ["clip-2"]: ["w-[240px] rounded-[200px]"],
            ["clip-3"]: ["w-[300px] rounded-tr-[150px] rounded-bl-[150px] rounded-tl-[70px] rounded-br-[70px]"]
        }
    },
    defaultVariants: {
        variant: "clip-1"
    }
});

type carSlideProps = 
  VariantProps<typeof carSlideVariants> &
  ComponentProps<"div"> &
  {src: string};

export function CarSlide({ variant, src, className, ...props }: carSlideProps) {
    return (
        <div {...props} className={twMerge(carSlideVariants({ variant }), "relative h-[300px] overflow-hidden")}>
            <img src={src} className="absolute min-w-[300px] h-[300px] left-1/2 transform -translate-x-1/2"/>
        </div>
    );
};
