import { Clock, Gem, Leaf, MessageSquareMore, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "../../ui/button/Button"
import { Content } from "../Content"

const icons = [
    { icon:<Gem className="size-20 lg:size-24"/>, description:"Supreme Shine" },
    { icon:<Leaf className="size-20 lg:size-24"/>, description:"Natural Cleaning Products" },
    { icon:<Sparkles className="size-20 lg:size-24"/>, description:"Perfect Polish" },
    { icon:<Clock className="size-20 lg:size-24"/>, description:"Always On Time" },
    { icon:<ShieldCheck className="size-20 lg:size-24"/>, description:"Quality Guaranteed" },
    { icon:<MessageSquareMore className="size-20 lg:size-24"/>, description:"Quick Appointment" }
]

const btns = [
    <Button url="/" text="Get Started" size="large" withArrow={true} className="bg-primary-light"/>
]

export function SectionTwo() {

    return (
        <section className="pt-20 lg:pt-40">
            <div className="container flex flex-col-reverse lg:flex-row lg:justify-between items-center h-[600px]">

                <div className="sm:min-w-[420px] max-w-[420px] lg:max-w-[680px] max-h-[400px] h-full w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {icons.map((icon, index) => (
                        <div key={index} className="flex flex-col items-center text-center font-medium">
                            <div className="flex flex-col items-center">{ icon.icon } <div className="mt-2">{ icon.description }</div></div>
                        </div>
                    ))}
                </div>

                <Content header="PROFFESIONAL WORK" paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae odio quos, debitis voluptatibus nihil corrupti perspiciatis distinctio soluta velit sunt." buttons={btns} align="middle"/>

            </div>
        </section>
    )
}
