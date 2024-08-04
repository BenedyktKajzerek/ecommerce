type ContentProps = {
    header: string
    paragraph: string
    buttons: any[]
    align: string
}

export function Content({ header, paragraph, buttons, align="left" }: ContentProps) {
    return (
        <div className={`${align === "left" ? "max-w-[600px]" : "max-w-[680px]"} max-w-[600px] text-center lg:text-${align} flex flex-col justify-center ${align === "left" && ("lg:mr-20")} mb-20 lg:mb-0`}>
            <h1 className="text-[calc(6vw)] 2xl:text-8xl -ml-1.5 font-extrabold leading-[calc(6vw)]">
                {header}
            </h1>
            <p className="text-[calc(7px+1.2vw)] 2xl:text-xl text-grey font-medium mt-12 leading-[calc(1vw+12px)]">
                {paragraph}
            </p>
            <div className={`flex justify-center ${align === "left" && ("lg:justify-start")} gap-8 mt-12`}>
                {buttons}
            </div>
        </div>
    )
}
