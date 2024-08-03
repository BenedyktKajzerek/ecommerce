import { VariantProps, cva } from "class-variance-authority"
import { ArrowRight } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export const buttonVariants = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["relative bg-white text-black font-medium rounded-[20px] hover:text-white flex justify-center items-center overflow-hidden before:content-[''] before:absolute before:w-[100%] before:h-[100%] before:bg-secondary-light before:top-0 before:left-0 before:scale-x-0 before:transition-transform before:ease-in-out before:origin-right before:duration-500 hover:before:scale-x-100 hover:before:origin-left"],
        },
        size: {
            small: ["text-lg px-8 h-14"],
            medium: ["text-xl py-4 px-8"],
            large: ["text-xl py-4 px-6 xl:text-2xl xl:py-6 xl:px-10"]
        }
    },
    defaultVariants: {
        variant: "default",
        size: "medium"
    }
})

type ButtonProps = VariantProps<typeof buttonVariants> & ComponentProps<"a"> & {text: string, url: string , withArrow?: boolean}

export function Button({ variant, size, url, text="Click me!", withArrow=false, className, ...props }: ButtonProps) {
    return (
        <a href={url} {...props} className={twMerge(buttonVariants({ variant, size }), className)}>
            <span className="z-10 flex items-center">{text} {withArrow && (<ArrowRight className="ml-3 xl:mt-1 size-5 xl:size-6"/>)}</span>
        </a>    
    ) 
}