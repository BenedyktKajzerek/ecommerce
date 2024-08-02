import { VariantProps, cva } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export const buttonVariants = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["bg-white text-black text-xl font-medium rounded-[18px] py-4 px-6 hover:text-white hover:bg-secondary"],
        }
    },
    defaultVariants: {
        variant: "default"
    }
})

type ButtonProps = VariantProps<typeof buttonVariants> & ComponentProps<"button">

export function Button({ variant, className, ...props }: ButtonProps) {
    return <button {...props} className={twMerge(buttonVariants({ variant }), className)}/>
}