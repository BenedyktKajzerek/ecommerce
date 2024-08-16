import React, { ComponentProps } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(["transition-colors text-nowrap"], {
  variants: {
    variant: {
      default: [
        "relative bg-white font-medium text-black hover:text-white",
        "flex justify-center items-center overflow-hidden rounded-[20px]",
        "before:content-[''] before:absolute before:w-[100%] before:h-[100%] before:bg-secondary-light",
        "before:top-0 before:left-0 before:scale-x-0 before:transition-transform before:ease-in-out before:origin-right before:duration-500 hover:before:scale-x-100 hover:before:origin-left"
      ],
    },
    size: {
      small: ["text-lg px-8 h-14"],
      medium: ["text-xl py-4 px-8"],
      large: ["text-md sm:text-xl py-4 px-6 xl:text-2xl xl:py-6 xl:px-10"]
    }
  },
  defaultVariants: {
    variant: "default",
    size: "medium"
  }
});

export type ButtonProps = VariantProps<typeof buttonVariants> & ComponentProps<"a"> & { 
    text: string;
    url: string;
    withArrow?: boolean;
  };

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  url,
  text="Click me!",
  withArrow=false,
  className,
  ...props
}) => {
  return (
    <a 
      href={url}
      {...props}
      className={twMerge(buttonVariants({ variant, size }), className)}
    >
      <span className="z-10 flex items-center">
        {text}
        {withArrow && (
          <ArrowRight className="ml-3 xl:mt-1 size-5 xl:size-6"/>
        )}
      </span>
    </a>    
  );
};

export { Button };
