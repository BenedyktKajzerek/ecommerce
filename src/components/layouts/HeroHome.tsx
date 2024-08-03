import car from "../../assets/car.mp4"
import { Button } from "../ui/button/Button"
import Tilt from "react-parallax-tilt"

export function HeroHome() {
    return (
        <section className="py-40">
            <div className="container flex flex-col lg:flex-row lg:justify-between items-center h-[600px]">

                <div className="max-w-[600px] text-center lg:text-left flex flex-col justify-center lg:mr-20 mb-20 lg:mb-0">
                    <h1 className="text-[calc(6vw)] 2xl:text-8xl -ml-1.5 font-extrabold leading-[calc(6vw)]">BETTER DETAILING</h1>
                    <p className="text-[calc(7px+1.2vw)] 2xl:text-xl text-grey font-medium mt-12 leading-[calc(1vw+12px)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis possimus fugit sequi odit quia minus quisquam recusandae iusto odio.</p>
                    <div className="flex justify-center lg:justify-start gap-8 mt-12">
                        <Button url="/" text="Get Started" withArrow={true} size="large" className="bg-primary"></Button>
                        <Button url="/" text="Get More Info" size="large"/>
                    </div>
                </div>

                <Tilt>
                    <div className="sm:min-w-[420px] max-w-[700px] max-h-[460px] h-full w-full bg-gradient-to-br from-primary-light to-secondary-dark p-2 rounded-2xl">
                        <video src={car} autoPlay muted loop className="rounded-2xl"/>
                    </div>
                </Tilt>

            </div>
        </section>
    )
}
