import audi from "../../../assets/cars-logos/audi.png"
import bentley from "../../../assets/cars-logos/bentley.png"
import bmw from "../../../assets/cars-logos/bmw.png"
import bugatti from "../../../assets/cars-logos/bugatti.png"
import chevrolet from "../../../assets/cars-logos/chevrolet.png"
import ferrari from "../../../assets/cars-logos/ferrari.png"
import ford from "../../../assets/cars-logos/ford.png"
import honda from "../../../assets/cars-logos/honda.png"
import jaguar from "../../../assets/cars-logos/jaguar.png"
import jeep from "../../../assets/cars-logos/jeep.png"
import lamborghini from "../../../assets/cars-logos/lamborghini.png"
import land from "../../../assets/cars-logos/land-rover.png"
import maserati from "../../../assets/cars-logos/maserati.png"
import mercedes from "../../../assets/cars-logos/mercedes.png"
import porsche from "../../../assets/cars-logos/porsche.png"
import tesla from "../../../assets/cars-logos/tesla.png"

const cars = [
    audi, bentley, bmw, 
    bugatti, chevrolet, ferrari, 
    ford, honda, jaguar, 
    jeep, lamborghini, land, 
    maserati, mercedes, porsche, 
    tesla
]

export function SectionThree() {

    return (
        <section className="pt-24 lg:pt-40">
            <div className="flex overflow-hidden">
                
                <div className="flex slider">
                    {cars.map(car => (
                        <div className="w-[150px] flex justify-center px-2">
                            <img src={car} alt="" className="w-auto h-12 grayscale" />
                        </div>
                    ))}
                </div>

                <div className="flex slider">
                    {cars.map(car => (
                        <div className="w-[150px] flex justify-center px-2">
                            <img src={car} alt="" className="w-auto h-12 grayscale" />
                        </div>
                    ))}
                </div>

                <div className="flex slider">
                    {cars.map(car => (
                        <div className="w-[150px] flex justify-center px-2">
                            <img src={car} alt="" className="w-auto h-12 grayscale" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
