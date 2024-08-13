import { VariantProps, cva } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export const linkVariants = cva(["transition-colors"], {
    variants: {
        variant: {
            headerLink: ["text-white hover:text-primary bg-clip-text mx-5 inline-block font-medium text-xl"],
        }
    },
    defaultVariants: {
        variant: "headerLink"
    }
})

type LinkProps = VariantProps<typeof linkVariants> & ComponentProps<"a">

export function Link({ variant, className, ...props }: LinkProps) {
    return (
        <a {...props} className={twMerge(linkVariants({ variant }), className)}/>
    )
}