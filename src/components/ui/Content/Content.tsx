interface ContentProps {
    header: string
    paragraph: string
    buttons: any[]
    align: string
}

const Content: React.FC<ContentProps> = ({ header, paragraph, buttons, align="left"}) => {
  return (
    <div className={`${align === "left" ? "max-w-[580px] lg:mr-20 lg:text-left" : "max-w-[680px]"} text-center flex flex-col justify-center mb-20 lg:mb-0`}>
      <h1 className={`text-[calc(6vw)] 2xl:text-7xl -ml-1.5 font-extrabold leading-[calc(6vw)]`}>
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

export { Content };
