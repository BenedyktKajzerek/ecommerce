type textIconProps = {
    icon: any
    description: string
}


export function TextIcon({ icon, description }: textIconProps) {
    return (
        <div className="grid place-items-center">
            { icon }
            <span className="-mt-20 font-medium text-center">{description}</span>
        </div>
    )
}