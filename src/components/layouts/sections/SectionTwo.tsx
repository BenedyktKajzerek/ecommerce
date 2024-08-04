import { Clock, Gem, Leaf, MessageSquareMore, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "../../ui/button/Button"
import { Content } from "../Content"
import { TextIcon } from "../../ui/textIcon/textIcon"

export function SectionTwo() {
    const btns = [
        <Button url="/" text="Get Started" size="large" withArrow={true} className="bg-primary-light"/>
    ]
    return (
        <section>
            <div className="container flex flex-col lg:flex-row lg:justify-between items-center h-[600px]">

                <div className="sm:min-w-[420px] max-w-[680px] max-h-[460px] h-full w-full grid grid-cols-3 justify-items-center">
                    <TextIcon icon={<Gem className="size-28"/>} description="Supreme Shine"/>
                    <TextIcon icon={<Leaf className="size-28"/>} description="Natural Cleaning Products"/>
                    <TextIcon icon={<Sparkles className="size-28"/>} description="Perfect Polish"/>
                    <TextIcon icon={<Clock className="size-28"/>} description="Always On Time"/>
                    <TextIcon icon={<ShieldCheck className="size-28"/>} description="Quality Guaranteed"/>
                    <TextIcon icon={<MessageSquareMore className="size-28"/>} description="Quick Appointment"/>
                </div>

                <Content header="PROFFESIONAL WORK" paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae odio quos, debitis voluptatibus nihil corrupti perspiciatis distinctio soluta velit sunt." buttons={btns} align="middle"/>

            </div>
        </section>
    )
}
