import { VariantProps, cva } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"


export const carSlideVariants = cva(["h-[200px] overflow-hidden bg-slate-500 flex items-center"], {
    variants: {
        variant: {
            one: ["w-[300px] rounded-t-[80px]"],
            two: ["w-[300px]"],
            three: ["w-[240px]"]
        }
    },
    defaultVariants: {
        variant: "one"
    }
})

type carSlideProps = VariantProps<typeof carSlideVariants> & ComponentProps<"div"> & {src: string}

export function CarSlide({ variant, src, className, ...props }: carSlideProps) {
    return (
        <div {...props} className={twMerge(carSlideVariants({ variant }), className)}>
            <img src={src} className="w-full"/>
        </div>
    )
}